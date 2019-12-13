import React, { Component } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AppLayout from "../../layout/AppLayout";
import gogo from "./gogo";
import secondMenu from "./second-menu";
import blankPage from "./blank-page";
import Professores from './gestao/professores/';
import ListaPresenca from './gestao/lista/'
class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <AppLayout>
        <Switch>
          <Redirect exact from={`${match.url}/`} to={`${match.url}/gogo`} />
          <Route path={`${match.url}/gogo`} component={gogo} />
          <Route path={`${match.url}/second-menu`} component={secondMenu} />
          <Route path={`${match.url}/blank-page`} component={blankPage} />
          <Route path={`${match.url}/professores`} component={Professores} />
          <Route path={`${match.url}/listaPresenca`} component={ListaPresenca} />
          <Redirect to="/error" />
        </Switch>
      </AppLayout>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
