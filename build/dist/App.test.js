import * as React from 'react';
import App from './App';
import * as renderer from 'react-test-renderer';
it('renders without crashing', function () {
    var rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
});
//# sourceMappingURL=App.test.js.map