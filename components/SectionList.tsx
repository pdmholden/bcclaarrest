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

    constructor(props){
        super(props)

        //TODO: use this.props.navigation.getParam('user') to query for the sections pertaining to the user

        this.state = {
            sections: [
                {id: 1, key: "Breach of the Peace"},
                {id: 2, key: "Ceasing Property"},
                {id: 3, key: "Identifying yourself to Police"},
                {id: 4, key: "Being detained"},
            ]
        }
    }

    render() {
    return (
        <View style={styles.container}>
            <FlatList
                data={this.state.sections}
                renderItem={
                    ({item}) => <Section sectionId={item.id} name={item.key} navigation={this.props.navigation}></Section>
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

