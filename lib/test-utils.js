/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { render } from '@testing-library/react';

export const renderWithRouterContext = (route, renderComponent) =>
  render(
    <RouterContext.Provider value={route}>
      {renderComponent}
    </RouterContext.Provider>,
  );

export default null;
