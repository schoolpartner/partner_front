import React, { Component } from "react";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions";

import IntlMessages from "../../helpers/IntlMessages";
import { Colxx } from "../../components/common/CustomBootstrap";

class Register extends Component {
  state = {
    email: "",
    password: "",
    name: ""
  }

  onUserRegister = e => {
    e.preventDefault()
    if (!!this.state.email && !!this.state.password && !!this.state.name) {
      this.props.registerUser(this.state, this.props.history)
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.getAttribute('name')]: e.target.value
    })
  }

  render() {
    return (
      <Row className="h-100">
        <Colxx xxs="12" md="10" className="mx-auto my-auto">
          <Card className="auth-card">
            <div className="position-relative image-side ">
              <p className="text-white h2">PARTNER - Estreitando relações</p>
              <p className="white mb-0">
                Preencha o formulário para registrar-se. <br />
                Se já for membro{" "}
                <NavLink to={`/user/login`} className="white">
                  Acessar
                </NavLink>
                .
              </p>
            </div>
            <div className="form-side">
              <CardTitle className="mb-4">
                <IntlMessages id="user.register" />
              </CardTitle>
              <Form
                onSubmit={this.onUserRegister}
              >
                <Label className="form-group has-float-label mb-4">
                  <Input
                    type="name"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                  />
                  <IntlMessages id="user.fullname" />
                </Label>
                <Label className="form-group has-float-label mb-4">
                  <Input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                  <IntlMessages id="user.email" />
                </Label>
                <Label className="form-group has-float-label mb-4">
                  <Input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                  <IntlMessages
                    id="user.password"
                    defaultValue={this.state.password}
                  />
                </Label>
                <div className="d-flex justify-content-end align-items-center">
                  <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    disabled={this.props.loading}
                  >
                    {this.props.loading ? 'Carregando...' : <IntlMessages id="user.register-button" />}
                  </Button>
                </div>
              </Form>
            </div>
          </Card>
        </Colxx>
      </Row>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  const { user, loading } = authUser;
  return { user, loading };
};

export default connect(
  mapStateToProps,
  {
    registerUser
  }
)(Register);
