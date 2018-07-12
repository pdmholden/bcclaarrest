import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import SectionList from './components/SectionList';
import HomeScreen from './components/HomeScreen';

export default class App extends React.Component<{}> {
  render() {
    return <RootStack/>;
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Sections: SectionList,
  },
  {
    initialRouteName: 'Home',
  },
);
