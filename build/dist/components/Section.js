import * as tslib_1 from "tslib";
import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
var Section = /** @class */ (function (_super) {
    tslib_1.__extends(Section, _super);
    function Section() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Section.prototype.render = function () {
        var _this = this;
        return (<Button onPress={function () { return _this.props.navigation.navigate('Rights', {
            title: 'Fake Title',
            content: 'Fake Content',
        }); }} title={this.props.name}/>);
    };
    return Section;
}(React.Component));
export default Section;
var styles = StyleSheet.create({
    item: {},
});
//# sourceMappingURL=Section.js.map