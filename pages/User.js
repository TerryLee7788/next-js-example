import React from 'react';
import withWrap from '../hoc/withWrap';

function User (props) {
    return <div>hi: {props.name}</div>
}
  
export default withWrap(User);
