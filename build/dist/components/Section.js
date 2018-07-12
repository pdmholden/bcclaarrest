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
        }); }} title={this.props.name}/>);
    };
    return Section;
}(React.Component));
export default Section;
var styles = StyleSheet.create({
    item: {},
});
//# sourceMappingURL=Section.js.map