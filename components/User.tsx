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
  _onPress() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style = {styles.item}>
        <Text>{this.props.image}</Text>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Sections')}>
          <Card
            image={require('../images/protest.jpg')}
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
  }
});
