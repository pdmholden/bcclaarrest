import * as tslib_1 from "tslib";
import * as React from 'react';
import { StyleSheet, Button, View } from 'react-native';
var User = /** @class */ (function (_super) {
    tslib_1.__extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.render = function () {
        var _this = this;
        return (<View style={styles.item}>
        <Button onPress={function () { return _this.props.navigation.navigate('Sections'); }} title={this.props.name}/>
      </View>);
    };
    return User;
}(React.Component));
export default User;
var styles = StyleSheet.create({
    item: {},
});
//# sourceMappingURL=User.js.map