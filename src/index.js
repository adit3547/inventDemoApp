import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
//import store from './config/store';
//import { Provider } from 'react-redux';
import Login from './screens/Login';
import Home from './screens/Home';
import ListInvent from './screens/ListInvent';
import InventNomenklatur from './screens/InventCRUD/InventNomenklatur';
import { container } from './config/routes';
import { isSignedIn } from './config/auth';
//import Button from './test3button/';
//import Navigator from './config/routes';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57166',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $white: '#fff',
  $inputText: '#797979',
  $border: '#E2E2E2E2',
  $lightGray: '#F1F1F1',
  $darkText: '#343434',
  $backGround: '#0a0a23',
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
    };
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert('An error occurred'));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;
    console.log(this.state);
    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Layout = container(signedIn);
    return <Layout onNavigationStateChange={null} />;
  }
}
