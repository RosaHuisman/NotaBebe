import React from 'react';
import {
  Icon, Table,
} from 'semantic-ui-react';

export default function DataTable({ dataUser }) {
  return (
    dataUser.map((user) => (
      <Table.Row key={user.id}>
        <Table.Cell>{user.last_name}</Table.Cell>
        <Table.Cell>{user.first_name}</Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Table.Cell>{user.phone_number}</Table.Cell>
        <Table.Cell textAlign="center">{user.role_id}</Table.Cell>
        <Table.Cell textAlign="center"><Icon name="pencil alternate" /></Table.Cell>
        <Table.Cell textAlign="center"><Icon name="trash alternate" /></Table.Cell>
      </Table.Row>
    ))
  );
}
