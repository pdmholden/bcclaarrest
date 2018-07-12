import * as React from 'react';
import {StyleSheet, Button, View, Text, ScrollView} from 'react-native';

export interface Props {
    name: string;
    navigation: any;
}

export default class Rights extends React.Component<any> {
  static navigationOptions = {
    title: 'Rights',
  };
    render() {
        return (
          <ScrollView>
            <Text>
              {this.props.navigation.getParam('title', 'default title')}
              </Text>
              <Text>
                {this.props.navigation.getParam('content', 'default content')}
                </Text>
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    item: {
    },
});
