import * as React from 'react';
import { StyleSheet, FlatList, View, Alert, Button } from 'react-native';
import Section from './Section';
let SQLite = require('react-native-sqlite-storage')

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
        super(props);

        this.state = {
          sections: []
        };

        // this.state = {
        //     sections: [
        //         {id: 1, key: "Breach of the Peace"},
        //         {id: 2, key: "Ceasing Property"},
        //         {id: 3, key: "Identifying yourself to Police"},
        //         {id: 4, key: "Being detained"},
        //     ]
        // }
    }

    componentDidMount() {
      //TODO: use this.props.navigation.getParam('user') to query for the sections pertaining to the user
      let user = this.props.navigation.getParam('user');

      let db = SQLite.openDatabase({name : "arrest_pocketbook.sqlite", createFromLocation : 1});
      db.transaction((tx: any) => {
        tx.executeSql("SELECT id, title FROM book_content WHERE tags LIKE '%" + user + "%'", [], (tx: any, results: any) => {
          console.log("Query completed");
          let rows = results.rows.raw(); // shallow copy of rows Array
          rows.map(row => console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`));
          this.setState({
            sections: rows
          });
        });
      });
    }

    componentWillMount() {

    }

    render() {
    return (
        <View style={styles.container}>
            <FlatList
                data={this.state.sections}
                renderItem={
                    ({item}) => <Section sectionId={item.id} name={item.title} navigation={this.props.navigation}></Section>
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

