import * as React from 'react';
import {StyleSheet, Button, View, Text, ScrollView} from 'react-native';

export interface Props {
    name: string;
    navigation: any;
}

export default class Rights extends React.Component<any> {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'default title'),
        };
    };

    render() {
        return (
          <ScrollView>
            <Text style={styles.title}>
              {this.props.navigation.getParam('title', 'default title')}
              </Text>
              <Text style={styles.body}>
                {this.props.navigation.getParam('content', 'default content')}
                </Text>
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        color: '#333333',
        backgroundColor: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        padding: 8,
        paddingBottom: 4
    },
    body: {
        color: '#333333',
        backgroundColor: 'white',
        fontSize: 16,
        padding: 8,
        paddingTop: 4,
    },
});
