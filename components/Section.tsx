import * as React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { Button, Card, Text, Tile } from 'react-native-elements';


export interface Props {
    sectionId: number;
    name: string;
    navigation: any;
}

export default class Section extends React.Component<Props> {
    render() {
        return (
          <View style = {styles.item}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Rights', {
                  title: this.props.name,
                  sectionId: this.props.sectionId
              })}
              >
              <Card>
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
