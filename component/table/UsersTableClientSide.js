import React, { useEffect, useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';

import * as UsersApi from '../../lib/apis/users-api.js';
import * as UsersModel from '../../lib/models/users-model.js';
import FilterComponent from '../../component/filter/FilterComponent';

const UsersTableClientSide = () => {
  const [loading, setLoading] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [filteredItems, setFilteredItems] = useState('');
  const [reset, setReset] = useState(false);
  const [filterGender, setFilterGender] = useState('all');
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState({
    page: 1,
    limit: 100,
    keyword: '',
    gender: 'all',
    perPage: 10,
  });

  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const columns = UsersModel.columns;

  const fetchUsers = async (page) => {
    setLoading(true);
    const response = await UsersApi.getall(filter);
    setUsers(response);
    setFilteredItems(response);
    setLoading(false);
  };

  const searchUser = () => {
    if (filterText.length > 1 && filterGender == 'all') {
      setFilteredItems(
        users.filter(
          (item) =>
            (item.email &&
              item.email.toLowerCase().includes(filterText.toLowerCase())) ||
            (item.login.username &&
              item.login.username
                .toLowerCase()
                .includes(filterText.toLowerCase())) ||
            (item.name.first &&
              (item.name.first + ' ' + item.name.last)
                .toLowerCase()
                .includes(filterText.toLowerCase()))
        )
      );
    } else if (filterText.length == 0 && filterGender !== 'all') {
      setFilteredItems(
        users.filter((item) => item.gender && item.gender === filterGender)
      );
    } else if (filterText.length > 1 && filterGender !== 'all') {
      setFilteredItems(
        users.filter(
          (item) =>
            ((item.email &&
              item.email.toLowerCase().includes(filterText.toLowerCase())) ||
              (item.login.username &&
                item.login.username
                  .toLowerCase()
                  .includes(filterText.toLowerCase()))) &&
            item.gender &&
            item.gender === filterGender
        )
      );
    } else {
      if (users.length > 1) {
        setFilteredItems(users);
      } else {
        alert('Fill in the blanks!');
      }
    }
  };

  const setResetFilter = () => {
    setFilterText('');
    setFilterGender('all');
    setReset(true);
    setFilteredItems(users);
  };

  const selectGender = async (e) => {
    e.preventDefault();
    const { value } = e.target;
    setFilterGender(value);
  };

  useEffect(() => {
    if (users.length == 0) {
      fetchUsers();
    } else {
      searchUser();
    }
  }, [filterGender]);

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
        valueGender={filterGender}
      />
    );
  }, [filterText, filterGender, resetPaginationToggle]);

  return (
    <DataTable
      title="Users (Client)"
      columns={columns}
      data={filteredItems}
      progressPending={loading}
      pagination
      fixedHeader
      persistTableHead
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default UsersTableClientSide;
