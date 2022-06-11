import React from 'react';
import { ExTypes } from './type';

const ExComponent = ({content, styles, type}: ExTypes) => {
  return <div className={styles} > {content} Test Component The Type is {type} </div>
}

export {ExComponent}