import React, { Component, Fragment } from "react";
import { Row, Card, CardBody, Button, Modal, ModalBody, ModalHeader,ModalFooter } from "reactstrap";
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
                        <Button
                            style={{ float: 'right' }}
                            className="default"
                            color="primary">
                            Incluir
                        </Button>
                        <Breadcrumb heading="menu.professores" match={this.props.match} />
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>
                <Row>

                    <Colxx xxs="12" className="mb-3">
                        <Card className="d-flex flex-row" >

                            <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                                <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                                    <NavLink
                                        to={`#`}
                                        className="w-40 w-sm-100"
                                    >
                                        <p className="list-item-heading mb-1 truncate">
                                            Maria Aurélia
                                        </p>
                                    </NavLink>
                                    <p className="mb-1 text-muted text-small w-15 w-sm-100">
                                        maraiaal223@gmail.com
                                    </p>
                                    <p className="mb-1 text-muted text-small w-15 w-sm-100">
                                        Biologia
                                    </p>
                                    <p className="mb-1 text-muted text-small w-15 w-sm-100">
                                        QSF598
                                    </p>
                                </div>
                            </div>
                            <CardBody>
                            </CardBody>
                        </Card>
                    </Colxx>
                    <Colxx md={12} lg={12} className="mb-3">
                        <Card className="d-flex flex-row"  >
                            <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                                <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                                    <NavLink
                                        to={`#`}
                                        className="w-40 w-sm-100"
                                    >
                                        <p className="list-item-heading mb-1 truncate">
                                            Pedro Aurélio
                                        </p>
                                    </NavLink>
                                    <p className="mb-1 text-muted text-small w-15 w-sm-100">
                                        pedrov588@gmail.com
                                    </p>
                                    <p className="mb-1 text-muted text-small w-15 w-sm-100">
                                        Biologia
                                    </p>
                                    <p className="mb-1 text-muted text-small w-15 w-sm-100">
                                        QWE547
                                    </p>
                                </div>
                            </div>
                            <CardBody>
                            </CardBody>
                        </Card>
                    </Colxx>

                </Row>
            </Fragment>
        )
    }
}
