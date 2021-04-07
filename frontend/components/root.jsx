import React from 'react';
import { Provider } from 'react-redux';
// import CloundsoudContainer from './../components/cloundsoud/cloundsoud_index_container';
import { HashRouter, Route } from "react-router-dom";



const Root = ({store}) => (
  <Provider store={store}>
  <HashRouter>
    <Route path="/" component={CloundsoudContainer}/>
  </HashRouter>
  </Provider>
)

export default Root;