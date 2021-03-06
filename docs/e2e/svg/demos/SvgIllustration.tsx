import React, { FC } from 'react';
// @ts-ignore
import { ReactComponent as Svg } from './svg/illustration.svg';

import { useElements, TestLayout } from '@docs-utils';

/**
 * 插画解析 demos
 */
const SvgIllustration: FC = () => {
  const { elements, ref } = useElements();

  return (
    <TestLayout elements={elements}>
      <div ref={ref} style={{ width: 300, height: 300 }}>
        <Svg />
      </div>
    </TestLayout>
  );
};

export default SvgIllustration;
