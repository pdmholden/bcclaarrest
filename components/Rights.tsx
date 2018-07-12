import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

export interface Props {
    name: string;
    navigation: any;
}

export default class Rights extends React.Component<any> {
    render() {
        return (
          <View>
            <Text>
              {this.props.navigation.getParam('title', 'default title')}
              </Text>
              <Text>
                {this.props.navigation.getParam('content', 'default content')}
                </Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
    },
});
