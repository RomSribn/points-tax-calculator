import React from 'react';
import { customRender } from '@utils/tests';
import { Home } from '@pages/index';

describe('Home component', () => {
  it('Should renders correctly', async () => {
    // Render the component with the mocked data
    const wrapper = customRender(<Home />);

    expect(wrapper).toMatchSnapshot();
  });
});
