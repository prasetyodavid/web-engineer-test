import moment from 'moment';

export const columns = [
  {
    name: 'User Name',
    selector: (row) => row.login.username,
    sortable: true,
    sortField: 'username',
  },
  {
    id: 'name',
    name: 'Name',
    selector: (row) => row.name.first + ' ' + row.name.last,
    sortable: true,
    sortField: 'name_last',
  },
  {
    name: 'Email',
    selector: (row) => row.email,
    sortable: true,
    sortField: 'email',
  },
  {
    name: 'Gender',
    selector: (row) => row.gender,
    sortable: true,
    sortField: 'gender',
  },
  {
    name: 'Registered Date',
    cell: (row) => (
      <div>{moment(row.registered.date).format('YYYY-MM-DD HH:mm:ss')}</div>
    ),
    sortable: true,
    sortField: 'registered_date',
  },
];
