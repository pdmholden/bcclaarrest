import * as tslib_1 from "tslib";
import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import User from './User';
var HomeScreen = /** @class */ (function (_super) {
    tslib_1.__extends(HomeScreen, _super);
    function HomeScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeScreen.prototype.render = function () {
        var _this = this;
        return (<View style={styles.container}>
        <FlatList data={[
            { key: "I am a bystander" },
            { key: "I am going to a protest, what do I need to know?" },
            { key: "I am a member of a marginalized group" },
            { key: "I am driving a car" },
        ]} renderItem={function (_a) {
            var item = _a.item;
            return <User name={item.key} navigation={_this.props.navigation}></User>;
        }}/>
      </View>);
    };
    return HomeScreen;
}(React.Component));
export default HomeScreen;
var styles = StyleSheet.create({
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
//# sourceMappingURL=HomeScreen.js.map