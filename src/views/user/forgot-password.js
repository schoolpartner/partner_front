import React, { Component } from "react";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Colxx } from "../../components/common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";

export default class ForgotPassword extends Component {
  state = {
    email: ""
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
                Use seu e-mail para resetar a senha. <br />
                Se ainda não for membro{" "}
                <NavLink to={`/user/register`} className="white">
                  registre-se
                </NavLink>
                .
              </p>
            </div>
            <div className="form-side">
              <CardTitle className="mb-4">
                <IntlMessages id="user.forgot-password" />
              </CardTitle>
              <Form>
                <Label className="form-group has-float-label mb-4">
                  <Input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                  <IntlMessages id="user.email" />
                </Label>

                <div className="d-flex justify-content-end align-items-center">
                  <Button
                    href="/app"
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                  >
                    <IntlMessages id="user.reset-password-button" />
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
