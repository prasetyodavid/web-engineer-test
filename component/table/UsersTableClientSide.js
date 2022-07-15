import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

import * as UsersApi from '../../lib/apis/users-api.js';
import * as UsersModel from '../../lib/models/users-model.js';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FilterComponent from '../../component/filter/FilterComponent';

const UsersTable = () => {
  const [loading, setLoading] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [filterGender, setFiltergender] = useState('');
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState({
    page: 1,
    limit: 100,
    keyword: '',
    gender: 'all',
    perPage: 10,
  });
  const [totalRows, setTotalRows] = useState(0);
  const [newid, setNewId] = useState([]);
  const columns = UsersModel.columns;

  const fetchUsers = async (page) => {
    setLoading(true);
    filter.page = page;
    const response = await UsersApi.getall(filter);
    setUsers(response);
    setTotalRows(filter.limit);
    setLoading(false);
  };

  const handlePageChange = (page) => {
    if (page) {
      fetchUsers(page);
    }
  };

  const searchUser = async (e) => {};

  const selectGender = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { value } = e.target;
    filter.gender = value;
    const response = await UsersApi.getallbygender(filter);
    setUsers(response);
    setLoading(false);
  };

  const filteredItems = users.filter(
    (item) =>
      (item.email &&
        item.email.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.login.username &&
        item.login.username.toLowerCase().includes(filterText.toLowerCase()))
  );

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container fluid className="p-3">
      <Row>
        <Col sm={8}>
          <Form>
            <Row>
              <Col>
                <Form.Control
                  placeholder="Search User"
                  onChange={(e) => setFilterText(e.target.value)}
                />
              </Col>
              <Col>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={searchUser}
                >
                  <svg width="15px" height="15px">
                    <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                  </svg>
                </button>
              </Col>
              <Col>
                <InputGroup>
                  <Form.Label>Gender</Form.Label>
                  <Form.Select aria-label="Gender" onChange={selectGender}>
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Form.Select>
                </InputGroup>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      <Row>
        <DataTable
          title="Users"
          columns={columns}
          data={filteredItems}
          progressPending={loading}
          pagination
          fixedHeader
          persistTableHead
        />
      </Row>
    </Container>
  );
};

export default UsersTable;
