import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Link, Switch, Route, useLocation,
} from 'react-router-dom';
import {
  Button, Icon, Table, Input, Form,
} from 'semantic-ui-react';

import HeaderAdmin from 'src/components/Admin/HeaderAdmin';

import Loading from '../App/Loading';
// import userAPI from './data.json';

import './styles.scss';
import logoAdmin from '../../images/logo_admin.png';
import { deleteUser } from '../../store/actions';

const AdminHome = ({
  handleDelete,
  error,
  user,
  FormDeleteOpen,
  // loading,
  // newSearchValue,
  // onApiChange,
  onApiSubmit,
  // userAPI,
  // loadMoreUsers,
  // getAllUsers,
  // dataUserList,
  onClickOpenFormDeleteUser,
  onClickCloseFormDeleteUser,
  userDeleteId,
  deleteUser,

}) => {
  // le hook useLocation nous renvoie l'url courante
  const location = useLocation();

  const [searchNewValue, setSearchNewValue] = useState('');
  const [UsersListData, setUsersListData] = useState([]);

  useEffect(() => {
    fetch('http://notabebe-back.herokuapp.com/profile/admin/allusers')
      .then((response) => response.json())
      .then((json) => setUsersListData(json));
  }, []);

  const handleClickDeleteUserClose = (id) => {
    console.log('CLICK DELETE', id);
    // e.preventDefault();
    onClickCloseFormDeleteUser(id);
  };

  const handleClickDeleteUserOpen = (id) => {
    console.log('CLICK DELETE', id);
    // e.preventDefault();
    onClickOpenFormDeleteUser(id);
  };

  const handleSubmitDelete = (id) => {
    console.log('SUBMIT DELETE', id);
    // e.preventDefault();
    deleteUser(id);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      <div className="adminMobileHome">
        <img src={logoAdmin} className="adminMobileHome__logo" alt="admin" />
        <div className="adminMobileHome__txt">
          Pour une meilleur expérience, veuillez vous connecter à partir d'un ordinateur.
        </div>
        <Link to="/">
          <div className="button-settings-back">
            Retour à l'accueil
          </div>
        </Link>
      </div>

      <div className="adminDesktopHome">
        <div>
          <HeaderAdmin />
        </div>

        <div className="adminDesktopHome__adminTitle">
          Administration des accès
        </div>

        <div>
          <div>
            <Link to="/profile/parent/1">PARENT 1 - </Link>
            <Link to="/profile/parent/2">PARENT 2 - </Link>
            <Link to="/profile/parent/3">PARENT 3 - </Link>

            <Link to="/profile/parent/1/child/1">PARENT 1: enfant 1 - </Link>
            <Link to="/profile/parent/1/child/2">PARENT 1: enfant 2 - </Link>
            <Link to="/profile/parent/2/child/3">PARENT 2: enfant 3 - </Link>
            <Link to="/profile/parent/3/child/4">PARENT 3: enfant 4 - </Link>

            <Link to="/homepage1">HOME 1 - </Link>
            <Link to="/homepage2">HOME 2 - </Link>
            <Link to="/homepage3">HOME 3</Link>
          </div>
        </div>

        <div className="TableListUser">
          <Table celled>
            <Table.Header fullwidth="true">
              <Table.Row>
                <Table.HeaderCell colSpan="5" width="twelve">
                  <Form onSubmit={onApiSubmit}>
                    <Input
                      fullWidth
                      fluid
                      icon="search"
                      iconPosition="left"
                      type="text"
                      placeholder="Filtrer les accès"
                      // loading={loading}
                      value={searchNewValue}
                      onChange={(e) => setSearchNewValue(e.target.value)}
                    />
                  </Form>
                </Table.HeaderCell>
                <Table.HeaderCell colSpan="2" textAlign="center">
                  <Link to="/admin/adduser">
                    <Button
                      icon
                      labelPosition="left"
                      primary
                      size="medium"
                    >
                      <Icon name="add user" /> Créer un accès
                    </Button>
                  </Link>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Nom</Table.HeaderCell>
                <Table.HeaderCell>Prénom</Table.HeaderCell>
                <Table.HeaderCell>Adresse mail</Table.HeaderCell>
                <Table.HeaderCell>Numéro de téléphone</Table.HeaderCell>
                <Table.HeaderCell>Rôle</Table.HeaderCell>
                <Table.HeaderCell />
                <Table.HeaderCell />
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <>
                {
                UsersListData.filter((user) => {
                  if (searchNewValue === '') {
                    return user;
                  } if (
                    user.first_name.toLowerCase().includes(searchNewValue.toLowerCase())
                    || user.last_name.toLowerCase().includes(searchNewValue.toLowerCase())
                    || user.email.toLowerCase().includes(searchNewValue.toLowerCase())
                    || user.phone_number.toLowerCase().includes(searchNewValue.toLowerCase())
                  ) {
                    return user;
                  }
                }).map((user) => (
                  <Table.Row key={user.id}>
                    <Table.Cell>{user.last_name}</Table.Cell>
                    <Table.Cell>{user.first_name}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>{user.phone_number}</Table.Cell>
                    <Table.Cell textAlign="center">{user.role_id}</Table.Cell>
                    <Table.Cell textAlign="center">
                      <Link to="/admin/edituser">
                        <Icon name="pencil alternate" />
                      </Link>
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      {/* { !FormDeleteOpen && userDeleteId === user.id &&  ? ( */}
                      { FormDeleteOpen && userDeleteId === user.id ? (
                        <Form onSubmit={() => handleSubmitDelete(user.id)}>
                          <Button.Group>
                            <Button primary type="submit">Oui</Button>
                            <Button color="red" type="button" onClick={() => handleClickDeleteUserOpen(user.id)}>Non</Button>
                          </Button.Group>
                        </Form>
                      ) : (
                        <Button icon="trash alternate" onClick={() => handleClickDeleteUserOpen(user.id)} />
                      )}
                    </Table.Cell>
                  </Table.Row>
                ))
              }
              </>
            </Table.Body>
          </Table>
        </div>
      </div>
    </>
  );
};

AdminHome.propTypes = {
  // loading: PropTypes.bool.isRequired,
  FormDeleteOpen: PropTypes.bool,
  // newSearchValue: PropTypes.string.isRequired,
  // userAPI: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     first_name: PropTypes.string.isRequired,
  //     last_name: PropTypes.string.isRequired,
  //     email: PropTypes.string.isRequired,
  //     phone_number: PropTypes.string.isRequired,
  //     role_id: PropTypes.number.isRequired,
  //   }).isRequired,
  // ).isRequired,

  // userAPI: PropTypes.array.isRequired,
  // onApiSubmit: PropTypes.func.isRequired,
  // onApiChange: PropTypes.func.isRequired,
  // loadMoreUsers: PropTypes.func.isRequired,
  // getAllUsers: PropTypes.func.isRequired,

};

AdminHome.defaultProps = {
  FormDeleteOpen: false,
};

export default AdminHome;
