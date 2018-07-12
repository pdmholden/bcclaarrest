import * as React from 'react';
import { StyleSheet, FlatList, View, Alert, Button } from 'react-native';
import Rights from './Rights';

export interface Props {
  name: string;
}

export default class SectionList extends React.Component<Props> {
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
                    ({item}) => <Rights name={item.key} ></Rights>
                }
            />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
  },
});
