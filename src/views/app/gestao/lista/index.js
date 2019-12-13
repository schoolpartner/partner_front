import React, { Component, Fragment } from "react";
import { Row, Card, CardBody, Button, Modal, ModalBody, ModalHeader, ModalFooter, Table, Badge, CardTitle, Input } from "reactstrap";
import IntlMessages from "../../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../../containers/navs/Breadcrumb";
import { NavLink } from 'react-router-dom'
export default class Start extends Component {

    render() {
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">

                        <Breadcrumb heading="menu.listaPresenca" match={this.props.match} />
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>
                <Row>
                    <Colxx xxs={12}>
                        <Card>
                            <CardBody>
                                <label>Informe o Código da Turma</label>
                                <Input />
                            </CardBody>
                        </Card>
                    </Colxx>
                    <Colxx xxs={12}>
                        <Card>

                            <CardBody>
                                <CardTitle>
                                    Turma: 55889
                            </CardTitle>
                                <Table hover>
                                    <thead>
                                        <tr>

                                            <th>Data</th>
                                            <th>Aluno</th>
                                            <th>Professor</th>
                                            <th>Matéria</th>
                                            <th>Turno</th>
                                            <th>Presente</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>12/12/2019 02:20:08</td>
                                            <td>João Silva</td>
                                            <td>Maria Aurélia</td>
                                            <td>Biologia</td>
                                            <td>Matutino</td>
                                            <td><Badge color="success">Sim</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>12/12/2019 02:20:08</td>
                                            <td>André Freitas</td>
                                            <td>Maria Aurélia</td>
                                            <td>Biologia</td>
                                            <td>Matutino</td>
                                            <td><Badge color="danger">Não</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>12/12/2019 02:20:08</td>
                                            <td>Julia Almeida</td>
                                            <td>Maria Aurélia</td>
                                            <td>Biologia</td>
                                            <td>Matutino</td>
                                            <td><Badge color="success">Sim</Badge></td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </CardBody>
                        </Card>
                    </Colxx>

                </Row>
            </Fragment>
        )
    }
}
