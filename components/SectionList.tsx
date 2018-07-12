import * as React from 'react';
import { StyleSheet, Text, Button, View, Alert } from 'react-native';

export interface Props {
  name: string;
}

export default class SectionList extends React.Component<Props> {
  _onPress() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return <Text>blah</Text>
  }
}

const styles = StyleSheet.create({
  item: {
  },
});
