import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import User from './User';
import { Header } from 'react-native-elements';

let SQLite = require('react-native-sqlite-storage');

export default class HomeScreen extends React.Component<any> {
  static navigationOptions = {
    title: 'Know Your Rights',
  };

  constructor(props){
    super(props)
      this.state = {
        users: [
            {user: "bystander", key: "I am a bystander", image: 'https://i.imgur.com/sMLTCxM.png'},
            {user: "protest", key: "I am going to a protest", image: 'https://i.imgur.com/iioNpxc.jpg'},
            {user: "minority", key: "I am a member of a marginalized group", image: 'https://i.imgur.com/ZcUoZiw.png'},
            {user: "driving", key: "I am driving a car", image: 'https://i.imgur.com/aSR3lrH.png'},
        ]
      }
  }

  errorCB(err: any) {
    console.log("SQL Error: " + err);
  }

  successCB() {
    console.log("SQL executed fine");
  }

  openCB() {
    console.log("Database OPENED");
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.users}
          renderItem={
            ({item}) => <User name={item.key} user={item.user} navigation={this.props.navigation} image = {item.image} ></User>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
    color: '#FFF'
  },
});
