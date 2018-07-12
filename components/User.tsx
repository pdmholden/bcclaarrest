import * as React from 'react';
import { StyleSheet, Button, View, Alert } from 'react-native';

export interface Props {
  name: string;
}

export default class User extends React.Component<Props> {
  _onPress() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.item}>
        <Button
          onPress={this._onPress}
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
