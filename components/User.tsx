import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, Button, View, Alert } from 'react-native';

export interface Props {
  name: string;
  navigation: any;
}

export default class User extends React.Component<Props> {
  _onPress() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.item}>
        <Button
          onPress={() => this.props.navigation.navigate('Sections')}
          title={this.props.name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
  },
});
