import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

export interface Props {
    name: string;
    navigation: any;
}

export default class Section extends React.Component<Props> {
    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Rights', {
                    title: 'Fake Title',
                    content: 'Fake Content',
                })}
                title={this.props.name}
            />
        );
    }
}

const styles = StyleSheet.create({
    item: {
    },
});
