import React from 'react';
import withWrap from '../hoc/withWrap';

function SecondPage (props) {
    return <div>SecondPage: {props.name}</div>
}
  
export default withWrap(SecondPage);
