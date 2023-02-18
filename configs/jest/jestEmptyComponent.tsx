// This is mock which use for all imports in tests which have svg (svg extensions)
// We are refer on this file from jest.config.ts in moduleNameMapper, svg mapper

import React from 'react';

const jestEmptyComponent = function () {
  return <div />;
};

export default jestEmptyComponent;
