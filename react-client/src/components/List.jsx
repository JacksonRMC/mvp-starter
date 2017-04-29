import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Horse </h4>
    <ul>
   
    There are { props.items.length } items.
    { props.items.map((item, index) => <li key={index}> 
   	<img src={item.image} />
    <h4 > Pie  </h4> 
    </li>)}
  	</ul>
  </div>
)

export default List;