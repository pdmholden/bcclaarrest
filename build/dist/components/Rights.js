import * as tslib_1 from "tslib";
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
var Rights = /** @class */ (function (_super) {
    tslib_1.__extends(Rights, _super);
    function Rights() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rights.prototype.render = function () {
        return (<View>
            <Text>
              {this.props.navigation.getParam('title', 'default title')}
              </Text>
              <Text>
                {this.props.navigation.getParam('content', 'default content')}
                </Text>
          </View>);
    };
    return Rights;
}(React.Component));
export default Rights;
var styles = StyleSheet.create({
    item: {},
});
//# sourceMappingURL=Rights.js.map