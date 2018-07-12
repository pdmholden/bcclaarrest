import * as tslib_1 from "tslib";
import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import SectionList from './components/SectionList';
import HomeScreen from './components/HomeScreen';
import Rights from './components/Rights';
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return <RootStack />;
    };
    return App;
}(React.Component));
export default App;
var RootStack = createStackNavigator({
    Home: HomeScreen,
    Sections: SectionList,
    Rights: Rights,
}, {
    initialRouteName: 'Home',
});
//# sourceMappingURL=App.js.map