import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import * as UsersApi from '../../lib/apis/users-api.js';
import * as UsersModel from '../../lib/models/users-model.js';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const UsersTable = () => {
  
  const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [totalRows, setTotalRows] = useState(0);
	const [perPage, setPerPage] = useState(10);
	const [newid, setNewId] = useState([]);
  const limit = 100;
  const columns = UsersModel.columns;

  const fetchUsers = async page => {
		setLoading(true);
    const response = await UsersApi.get(page, perPage, limit);
    setUsers(response);
		setTotalRows(limit);
		setLoading(false);
	};

  const handlePageChange = page => {
		fetchUsers(page);
	};

  const handlePerRowsChange = async (newPerPage, page) => {
		setLoading(true);
		const response = await UsersApi.get(page, perPage, limit);
    setUsers(response);
		setTotalRows(limit);
		setLoading(false);
	};

	const searchUser = async() => {
		alert(newid);
		const response = await UsersApi.get();
		setUsers(response);
	  }
	
	  const selectGender = async(e) => {
		e.preventDefault();
		const { value } = e.target;
		const response = await UsersApi.get(value);
		setUsers(response);
	  }

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (

	<Container fluid className="p-3">
       <Row>

		<Col sm={8}>            
		<Form>
		<Row>

		<Col>
			<Form.Control placeholder="Search User" onChange={(e) => setNewId(e.target.value)} />
			</Col>
			<Col>
			<button type="button" className="btn btn-warning" onClick={searchUser}>
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
		/>
		</Row>
		</Container>
	);

};

export default UsersTable;
