import * as React from 'react';
import {StyleSheet, Button, View, Text, ScrollView} from 'react-native';
let SQLite = require('react-native-sqlite-storage')


export interface Props {
    name: string;
    navigation: any;
}

export default class Rights extends React.Component<any> {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title'),
        };
    };

    constructor(props) {
        super(props)

        this.state = {
            content: ''
        }
    }

  componentDidMount() {
    let sectionId = this.props.navigation.getParam('sectionId');

    let db = SQLite.openDatabase({name : "arrest_pocketbook.sqlite", createFromLocation : 1});
    db.transaction((tx: any) => {
      tx.executeSql("SELECT content FROM book_content WHERE id =" + sectionId, [], (tx: any, results: any) => {
        console.log("Query completed");
        let rows = results.rows.raw(); // shallow copy of rows Array
        rows.map(row => console.log(`Content: ${row.content}`));
        this.setState({
          content: rows[0].content
        });
      });
    });
  }

    render() {
        return (
          <ScrollView>
            <Text style={styles.title}>
              {this.props.navigation.getParam('title')}
              </Text>
              <Text style={styles.body}>
                {this.state.content}
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
        padding: 16,
        paddingBottom: 4,
        lineHeight: 30,
    },
    body: {
        color: '#333333',
        backgroundColor: 'white',
        fontSize: 16,
        padding: 16,
        paddingTop: 4,
        lineHeight: 30,
    },
});
