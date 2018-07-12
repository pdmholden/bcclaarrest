import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

export interface Props {
    name: string;
    navigation: any;
}

export default class Rights extends React.Component<Props> {
    render() {
        return (
            <Text>{this.props.name}</Text>
        );
    }
}

const styles = StyleSheet.create({
    item: {
    },
});
