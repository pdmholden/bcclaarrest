import * as React from 'react';
import {StyleSheet, Button, View, Text, ScrollView} from 'react-native';

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

        //TODO: use this.props.navigation.getParam('sectionId') to query for the content and set the state.content

        this.state = {
            content: 'If you have not been arrested, but you are being held against your will, remember to:\n' +
            '\n' +
            '•    Ask why you are being held.\n' +
            '•    Get the badge number or name of the police officer.\n' +
            '•    Stay silent and tell the police you are staying silent (if you feel safe doing so). You may, if you have not committed any crime, wish to explain what you were doing that made the police suspicious. Sometimes an explanation can end a police interaction more quickly.\n' +
            '•    Tell the police if you have needles with you before they search you. They’ll probably find the needles anyway, and you don’t want to accidentally hurt a police officer.\n' +
            '\n' +
            'Reason #3 – The Police are Arresting You\n' +
            '\n' +
            'You will know if you are under arrest because a police officer has said you are under arrest, or somehow indicated you are not free to go by physically holding you. If you are under arrest, and the police ask, you must tell them your name and address. The police must tell you why you are being arrested unless the reason is obvious – remember what they say so you can tell your lawyer.\n' +
            '\n' +
            'The arresting officer may release you right away with an “appearance notice” (a sheet of paper that tells you where and when to show up for court) if she believes that you will show up for court, not break any more laws, and she is sure she knows who you are.ow up for court, not break any more laws, and she is sure she knows who you are.ow up for court, not break any more laws, and she is sure she knows who you are.ow up for court, not break any more laws, and she is sure she knows who you are.ow up for court, not break any more laws, and she is sure she knows who you are.ow up for court, not break any more laws, and she is sure she knows who you are.ow up for court, not break any more laws, and she is sure she knows who you are.ow up for court, not break any more laws, and she is sure she knows who you are.',
        }
    }

    render() {
        return (
          <ScrollView>
            <Text style={styles.title}>
              {"Section Id: " + this.props.navigation.getParam('sectionId') + " " + this.props.navigation.getParam('title')}
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
