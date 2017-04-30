import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Horse </h4>
    <ul>
   
    There are { props.items.length } items.
    { props.items.map((item, index) => <ul key={index}> 
   	<a  href={item.url}> <img src={item.image} /> </a>
    <h4>  Pie  </h4> 
    </ul>)}
  	</ul>
  </div>
)

export default List;