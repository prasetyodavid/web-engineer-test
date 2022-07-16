import React, { useEffect, useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import * as UsersApi from '../../lib/apis/users-api.js';
import * as UsersModel from '../../lib/models/users-model.js';
import FilterComponent from '../../component/filter/FilterComponent';

/*
  TODO:
  Several server side filtering functions not yet working due to limitation of API
*/

const UsersTableServerSide = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState({
    page: 1,
    limit: 100,
    keyword: '',
    gender: 'all',
    perPage: 10,
  });
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [filterText, setFilterText] = useState('');
  const [reset, setReset] = useState(false);
  const [filterGender, setFilterGender] = useState('all');
  const columns = UsersModel.columns;
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const fetchUsers = async (page) => {
    console.log(page);
    setLoading(true);
    filter.page = page;
    const response = await UsersApi.get(filter);
    setUsers(response);
    setTotalRows(filter.limit);
    setLoading(false);
  };

  const handlePageChange = (page) => {
    if (page) {
      fetchUsers(page);
    }
  };

  const searchUser = async () => {
    alert("Server-Side with Name searching not yet available.");
    setLoading(true);
    filter.keyword = filterText;
    const response = await UsersApi.get(filter);
    setUsers(response);
    setTotalRows(filter.limit);
    setLoading(false);
  };

  const selectGender = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { value } = e.target;
    filter.gender = value;
    const response = await UsersApi.getbygender(filter);
    setUsers(response);
    setLoading(false);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setLoading(true);
    filter.page = page;
    filter.perPage = newPerPage;
    const response = await UsersApi.get(filter);
    setUsers(response);
    setTotalRows(filter.limit);
    setLoading(false);
  };

  const setResetFilter = () => {
    setFilterText('');
    setFilterGender('all');
    setReset(true);
    fetchUsers();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser();
  };

  useEffect(() => {
    if (users.length == 0) {
      fetchUsers();
    }
  }, []);

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      setResetPaginationToggle(!resetPaginationToggle);
      setResetFilter();
    };

    return (
      <FilterComponent
        handleSubmit={handleSubmit}
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        selectGender={selectGender}
        searchUser={searchUser}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      title="Users"
      columns={columns}
      data={users}
      progressPending={loading}
      pagination
      fixedHeader
      sortServer
      paginationServer
      paginationTotalRows={totalRows}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
      defaultSortFieldId="name"
      persistTableHead
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default UsersTableServerSide;
