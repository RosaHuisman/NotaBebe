import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Link, Switch, Route, useLocation,
} from 'react-router-dom';
import {
  Button, Icon, Table, Input, Form, Grid, Segment, Header, Footer, Select,
} from 'semantic-ui-react';

const EditModalAdmin = () => {
  console.log('modal admin edit');

  const roleOption = [
    { key: '1', value: 'Parent', text: '1 : Parent' },
    { key: '2', value: 'Staff', text: '2 : Staff' },
    { key: '3', value: 'Admin', text: '3 : Administrateur' },
  ];

  return (
    <div className="ContentEditModal">
      <div className="ContentEditModal__parent">
        <Form>
          <Table celled>
            <Table.Header fullwidth="true" column="equal">
              <Table.Row>
                <Table.HeaderCell colSpan="3" textAlign="center">
                  <div>Modification de l'utilisateur</div>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell verticalAlign="middle"><div className="columnTitle">Nom</div></Table.Cell>
                <Table.Cell verticalAlign="middle">Bonnette</Table.Cell>
                <Table.Cell />
              </Table.Row>
              <Table.Row>
                <Table.Cell verticalAlign="middle"><div className="columnTitle">Prénom</div></Table.Cell>
                <Table.Cell verticalAlign="middle">Jeanne</Table.Cell>
                <Table.Cell />
              </Table.Row>
              <Table.Row>
                <Table.Cell verticalAlign="middle"><div className="columnTitle">Adresse mail</div></Table.Cell>
                <Table.Cell verticalAlign="middle">parent@notabebe.io</Table.Cell>
                <Table.Cell>
                  <input
                    type="email"
                    placeholder="email@notabebe.io"
                  // value=""
                  // onChange=""
                    required
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell verticalAlign="middle"><div className="columnTitle">Numéro de téléphone</div></Table.Cell>
                <Table.Cell verticalAlign="middle">0320831920</Table.Cell>
                <Table.Cell verticalAlign="middle">
                  <input
                    type="tel"
                    pattern="^[0-9]{10}$"
                    placeholder="Numéro de téléphone"
                  // value=""
                  // onChange=""
                    required
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell verticalAlign="middle"><div className="columnTitle">Adresse</div></Table.Cell>
                <Table.Cell verticalAlign="middle">3 rue des Pommes</Table.Cell>
                <Table.Cell verticalAlign="middle">
                  <input
                    type="text"
                    placeholder="Adresse"
                  // value=""
                  // onChange=""
                    required
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell verticalAlign="middle"><div className="columnTitle">Code postal</div></Table.Cell>
                <Table.Cell verticalAlign="middle">48000</Table.Cell>
                <Table.Cell verticalAlign="middle">
                  <input
                    type="number"
                    placeholder="Code postal"
                    max="99999"
                  // value=""
                  // onChange=""
                    required
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell verticalAlign="middle"><div className="columnTitle">Ville</div></Table.Cell>
                <Table.Cell verticalAlign="middle">Trifouilly-les-Oies</Table.Cell>
                <Table.Cell verticalAlign="middle">
                  <input
                    type="text"
                    placeholder="Ville"
                  // value=""
                  // onChange=""
                    required
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell verticalAlign="middle"><div className="columnTitle">Rôle</div></Table.Cell>
                <Table.Cell verticalAlign="middle">2</Table.Cell>
                <Table.Cell verticalAlign="middle">
                  <Select placeholder="Rôle" options={roleOption} />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer fullwidth="true" column="equal">
              <Table.Row>
                <Table.HeaderCell colSpan="3" textAlign="center">
                  <Button
                  // onClick=""
                    icon="cancel"
                    color="red"
                    size="tiny"
                  >
                    {/* <Icon name="cancel" /> */}
                  </Button>
                  <Button
                  // onClick=""
                    icon
                    labelPosition="left"
                    primary
                    size="tiny"
                  >
                    <Icon name="angle down" />Modifier
                  </Button>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Form>
      </div>

      <div className="ContentEditModal__child">

        <div className="ContentEditModal__child__addChild">
          <Button
          // onClick=""
            icon
            labelPosition="left"
            primary
            size="medium"
          >
            <Icon name="plus" />Ajouter un enfant
          </Button>
        </div>

        <div className="ContentEditModal__child__listChild">
          <div className="childName"><Icon name="child" size="big" /> Prénom</div>
          <div className="childName"><Icon name="child" size="big" /> Prénom</div>
          <div className="childName"><Icon name="child" size="big" /> Prénom</div>
          <div className="childName"><Icon name="child" size="big" /> Prénom</div>
        </div>

      </div>
    </div>
  );
};

EditModalAdmin.propTypes = {

};

export default EditModalAdmin;
