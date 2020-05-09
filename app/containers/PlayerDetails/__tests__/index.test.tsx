import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import 'jest-styled-components';

import PlayerDetails from '../index';

const renderer = createRenderer();

jest.mock('react-router-dom', () => ({
  useParams: () => ({ id: '1' })
}));

describe('<PlayerDetails />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<PlayerDetails />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
