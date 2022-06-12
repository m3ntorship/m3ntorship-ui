import React from 'react';
import { ExTypes } from './type';
import cn from 'classnames';

const ExComponent = ({content, styles, type}: ExTypes) => {
  return <div className={cn(styles, " p-4 ",{'bg-black text-white' : type === 'primary', 'bg-test2 text-black' : type === 'secondary' })} > {content} Test Component The Type is {type} </div>
}

export {ExComponent}