import React from 'react';
import { shallow } from 'enzyme';

import App from '../../components/App';

describe('The App component test suite', () => {
  it('should render component', () => {
    expect(shallow(<App />).contains(<div>Hello World</div>)).toBe(true);
  });
});
