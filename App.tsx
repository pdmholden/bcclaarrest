import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import SectionList from './components/SectionList';
import HomeScreen from './components/HomeScreen';
import Rights from './components/Rights';

export default class App extends React.Component<{}> {
  render() {
    return <RootStack/>;
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Sections: SectionList,
      Rights: Rights,
  },
  {
    initialRouteName: 'Home',
  },
);
