import * as React from 'react';
import { StyleSheet, FlatList, View, Alert, Button } from 'react-native';
import Section from './Section';

export interface Props {
  name: string;
}

export default class SectionList extends React.Component<any> {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'default title'),
        };
    };


    render() {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    {key: "Breach of the Peace"},
                    {key: "Ceasing Property"},
                    {key: "Identifying yourself to Police"},
                    {key: "Being detained"},
                ]}
                renderItem={
                    ({item}) => <Section name={item.key} navigation={this.props.navigation}></Section>
                }
            />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 50,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
    color: '#FFF'
  },
});

