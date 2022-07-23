import React, { FC } from 'react';

import { IBadgeProps } from './IBadge.d';

const badge: FC<IBadgeProps> = ({ color }) => {
  return <div>{color}</div>;
};

export { badge };
