import * as tslib_1 from "tslib";
import * as React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Section from './Section';
var SectionList = /** @class */ (function (_super) {
    tslib_1.__extends(SectionList, _super);
    function SectionList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SectionList.prototype.render = function () {
        var _this = this;
        return (<View style={styles.container}>
            <FlatList data={[
            { key: "Breach of the Peace" },
            { key: "Ceasing Property" },
            { key: "Identifying yourself to Police" },
            { key: "Being detained" },
        ]} renderItem={function (_a) {
            var item = _a.item;
            return <Section name={item.key} navigation={_this.props.navigation}></Section>;
        }}/>
        </View>);
    };
    return SectionList;
}(React.Component));
export default SectionList;
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
//# sourceMappingURL=SectionList.js.map