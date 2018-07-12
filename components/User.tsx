import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Button, Card, Text, Tile } from 'react-native-elements';
import { StyleSheet, View, Alert, TouchableHighlight, Image } from 'react-native';

export interface Props {
  name: string;
  navigation: any;
  image: string;
}

export default class User extends React.Component<Props> {
  render() {
    return (
      <View style = {styles.item}>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Sections')}>
          <Card
            image={{uri: this.props.image}}
          >
            <Text style = {styles.header}>{this.props.name}</Text>
          </Card>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#A40618',
  }
});
