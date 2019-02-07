import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store'

import './assets/scss/Main.scss';
import PagePresenter from './components/page/page-presenter'

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="Main">
                <PagePresenter/>
            </div>
        </Provider>
    );
  }
}

export default App;
