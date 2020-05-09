import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import 'jest-styled-components';

import PlayerSummaryCard from '../index';

const renderer = createRenderer();

const item = {
  id: '1',
  description: 'Braided long beard with charms with runes',
  avatarUrl:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3JvT2n7sHUoBw9QqyV-KlwYHfKphD4y0thI9k_iJsyeKmWwcZ&usqp=CAU',
  name: 'Lothar Picco'
};

describe('<PlayerSummaryCard />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<PlayerSummaryCard item={item} />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
