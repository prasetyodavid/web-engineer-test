import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import * as UsersApi from '../../lib/apis/users-api.js';
import * as UsersModel from '../../lib/models/users-model.js';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

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
  const [newid, setNewId] = useState([]);
  const columns = UsersModel.columns;

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
    setLoading(true);
    filter.keyword = newid;
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

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      setResetPaginationToggle(!resetPaginationToggle);
      setResetFilter();
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        selectGender={(e) => setFilterGender(e.target.value)}
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
