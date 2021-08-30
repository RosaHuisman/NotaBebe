import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Link, Switch, Route, useLocation, useHistory,
} from 'react-router-dom';
import {
  Button, Icon, Table, Input, Form, Grid, Segment, Header, Footer, Select,
} from 'semantic-ui-react';

import Field from 'src/containers/Field';

const AddUserAdmin = ({
  loading,

  first_name,
  last_name,
  email,
  phone_number,
  address,
  postcode,
  city,
  password,
  role_id,

  handleAddUser,
  changeField,

  contentAdminPageAdd,
  addUserSuccess,
  addUserError,
  resetFormAdmin,
}) => {
  console.log('modal admin edit');
  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  const handleSubmitAddUser = (e) => {
    console.log('ici c\'est addUser', e);
    e.preventDefault();
    handleAddUser();
  };

  const history = useHistory();

  const previousPage = () => {
    history.push('/admin');
    resetFormAdmin();
  };

  const roleOption = [
    { key: '1', value: '1', text: '1 : Parent' },
    { key: '2', value: '2', text: '2 : Staff' },
    { key: '3', value: '3', text: '3 : Administrateur' },
  ];

  return (
    <div className="addUserForm">
      {contentAdminPageAdd
        && (
          <Form onSubmit={handleSubmitAddUser}>
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
                    <Field
                      type="text"
                      name="last_name"
                      placeholder="Nom"
                      onChange={changeField}
                      value={last_name}
                      required
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell verticalAlign="middle"><div className="columnTitle">Prénom</div></Table.Cell>
                  <Table.Cell>
                    <Field
                      type="text"
                      name="first_name"
                      placeholder="Prénom"
                      onChange={changeField}
                      value={first_name}
                      required
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell verticalAlign="middle"><div className="columnTitle">Adresse mail</div></Table.Cell>
                  <Table.Cell>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={changeField}
                      value={email}
                      required
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell verticalAlign="middle"><div className="columnTitle">Numéro de téléphone</div></Table.Cell>
                  <Table.Cell verticalAlign="middle">
                    <Field
                      type="tel"
                      name="phone_number"
                      pattern="^[0-9]{10}$"
                      placeholder="Numéro de téléphone"
                      onChange={changeField}
                      value={phone_number}
                      required
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell verticalAlign="middle"><div className="columnTitle">Adresse</div></Table.Cell>
                  <Table.Cell verticalAlign="middle">
                    <Field
                      type="text"
                      name="address"
                      placeholder="Adresse"
                      onChange={changeField}
                      value={address}
                      required
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell verticalAlign="middle"><div className="columnTitle">Code postal</div></Table.Cell>
                  <Table.Cell verticalAlign="middle">
                    <Field
                      type="number"
                      name="postcode"
                      placeholder="Code postal"
                      max="99999"
                      onChange={changeField}
                      value={postcode}
                      required
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell verticalAlign="middle"><div className="columnTitle">Ville</div></Table.Cell>
                  <Table.Cell verticalAlign="middle">
                    <Field
                      type="text"
                      name="city"
                      placeholder="Ville"
                      onChange={changeField}
                      value={city}
                      required
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell verticalAlign="middle"><div className="columnTitle">Rôle = 1 : Parent / 2 : Staff / 3 : Admin</div></Table.Cell>
                  <Table.Cell verticalAlign="middle">
                    <Field
                      type="number"
                      name="role_id"
                      placeholder="Rôle"
                      min="1"
                      max="3"
                      onChange={changeField}
                      value={role_id}
                      required
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell verticalAlign="middle"><div className="columnTitle">Mot de passe temporaire</div></Table.Cell>
                  <Table.Cell verticalAlign="middle">
                    <Field
                      type="text"
                      name="password"
                      placeholder="Mot de passe"
                      onChange={changeField}
                      value={password}
                      required
                    />
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
                      type="submit"
                      icon
                      labelPosition="left"
                      primary
                      size="tiny"
                    >
                      <Icon name="angle right" />Ajouter
                    </Button>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Form>
        )}

      {addUserSuccess
        && (
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
                <Table.Cell verticalAlign="middle" textAlign="center">
                  <div className="messageSuccess">Utilisateur créé</div>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer fullwidth="true" column="equal">
              <Table.Row>
                <Table.HeaderCell colSpan="2" textAlign="center">
                  <Button
                    onClick={previousPage}
                    type="button"
                    icon
                    labelPosition="left"
                    primary
                    size="tiny"
                  >
                    <Icon name="angle left" />Retour
                  </Button>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        )}

      {addUserError
        && (
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
                <Table.Cell verticalAlign="middle" textAlign="center">
                  <div className="messageError">Erreur serveur</div>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer fullwidth="true" column="equal">
              <Table.Row>
                <Table.HeaderCell colSpan="2" textAlign="center">
                  <Button
                    onClick={previousPage}
                    type="button"
                    icon
                    labelPosition="left"
                    primary
                    size="tiny"
                  >
                    <Icon name="angle left" />Retour
                  </Button>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        )}
    </div>
  );
};

AddUserAdmin.propTypes = {
  // email: PropTypes.string,
  // password: PropTypes.string.isRequired,
  // changeField: PropTypes.func.isRequired,
  // handleLogin: PropTypes.func.isRequired,

  contentAdminPageAdd: PropTypes.bool,
  addUserSuccess: PropTypes.bool,
  addUserError: PropTypes.bool,
};

AddUserAdmin.defaultProps = {
  contentAdminPageAdd: true,
  addUserSuccess: false,
  addUserError: false,
};

export default AddUserAdmin;
