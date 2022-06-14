import React, {useState} from 'react';
import { ExTypes } from './type';
import cn from 'classnames';

const ExComponent = ({content, styles, type, startCount}: ExTypes) => {
  const [count, setCount] = useState(startCount)
  return <div 
  className={cn(
    styles,
    'p-4',{'bg-test text-white' : type === 'primary',
    'bg-test2 text-black' : type === 'secondary' }
    )}
   >
     this is the content you have typed {content}
     <button onClick={() => setCount(count + 1)}> click to increase {count} </button>
    </div>
}

export {ExComponent}