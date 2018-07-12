import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import User from './components/user';

export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: "I am a bystander"},
            {key: "I am going to a protest, what do I need to know?"},
            {key: "I am a member of a marginalized group"},
            {key: "I am driving a car"},
          ]}
          renderItem={
            ({item}) => <User name={item.key}></User>
          }
        />
      </View>
    );
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
});
