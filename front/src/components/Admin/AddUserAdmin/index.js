import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Link, Switch, Route, useLocation,
} from 'react-router-dom';
import {
  Button, Icon, Table, Input, Form, Grid, Segment, Header, Footer, Select,
} from 'semantic-ui-react';

const AddUserAdmin = () => {
  console.log('modal admin edit');
  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  const roleOption = [
    { key: '1', value: '1', text: '1 : Parent' },
    { key: '2', value: '2', text: '2 : Staff' },
    { key: '3', value: '3', text: '3 : Administrateur' },
  ];

  return (
    <div className="addUserForm">
      <Form>
        <Table celled>
          <Table.Header fullwidth="true" column="equal">
            <Table.Row>
              <Table.HeaderCell colSpan="2" textAlign="center">
                <h1>CREATION ACCES UTILISATEUR</h1>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell verticalAlign="middle"><div className="columnTitle">Nom</div></Table.Cell>
              <Table.Cell>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Nom"
                  // value={user.last_name}
                  // onChange={handleChange}
                  required
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell verticalAlign="middle"><div className="columnTitle">Prénom</div></Table.Cell>
              <Table.Cell>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Prénom"
                  // value={user.first_name}
                  // onChange={handleChange}
                  required
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell verticalAlign="middle"><div className="columnTitle">Adresse mail</div></Table.Cell>
              <Table.Cell>
                <input
                  type="email"
                  name="email"
                  placeholder="email@notabebe.io"
                  // value={user.email}
                  // onChange={handleChange}
                  required
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell verticalAlign="middle"><div className="columnTitle">Numéro de téléphone</div></Table.Cell>
              <Table.Cell verticalAlign="middle">
                <input
                  type="tel"
                  name="phoneNumber"
                  pattern="^[0-9]{10}$"
                  placeholder="Numéro de téléphone"
                  // value={user.phone_number}
                  // onChange={handleChange}
                  required
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell verticalAlign="middle"><div className="columnTitle">Adresse</div></Table.Cell>
              <Table.Cell verticalAlign="middle">
                <input
                  type="text"
                  name="address"
                  placeholder="Adresse"
                  // value={user.address}
                  // onChange={handleChange}
                  required
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell verticalAlign="middle"><div className="columnTitle">Code postal</div></Table.Cell>
              <Table.Cell verticalAlign="middle">
                <input
                  type="number"
                  name="postcode"
                  placeholder="Code postal"
                  max="99999"
                  // value={user.postcode}
                  // onChange={handleChange}
                  required
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell verticalAlign="middle"><div className="columnTitle">Ville</div></Table.Cell>
              <Table.Cell verticalAlign="middle">
                <input
                  type="text"
                  name="city"
                  placeholder="Ville"
                  // value={user.city}
                  // onChange={handleChange}
                  required
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell verticalAlign="middle"><div className="columnTitle">Rôle</div></Table.Cell>
              <Table.Cell verticalAlign="middle">
                <Select placeholder="Rôle" options={roleOption} />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer fullwidth="true" column="equal">
            <Table.Row>
              <Table.HeaderCell colSpan="2" textAlign="center">
                <Link to="/admin">
                  <Button
                  // onClick=""
                    icon="cancel"
                    color="red"
                    size="tiny"
                  />
                </Link>
                <Button
                // onClick=""
                  icon
                  labelPosition="left"
                  primary
                  size="tiny"
                >
                  <Icon name="angle down" />Ajouter
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Form>
    </div>
  );
};

AddUserAdmin.propTypes = {

};

export default AddUserAdmin;
