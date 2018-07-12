import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import User from './User';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component<any> {
  render() {
    return (
      <View style={styles.container}>
      <Header
        centerComponent={{ text: 'Please state the nature of your legal emergency' }}

      />
        <FlatList
          data={[
            {key: "I am a bystander", image: '../images/protest.jpg'},
            {key: "I am going to a protest, what do I need to know?", image: '../images/protest.jpg'},
            {key: "I am a member of a marginalized group", image: '../images/protest.jpg'},
            {key: "I am driving a car", image: '../images/protest.jpg'},
          ]}
          renderItem={
            ({item}) => <User name={item.key} navigation={this.props.navigation} image = {item.image} ></User>
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
    paddingTop: 50,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
