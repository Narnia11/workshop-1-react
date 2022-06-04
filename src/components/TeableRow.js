import React, { useState } from 'react';
import TableAction from './TeableAction';

function TableRow(props) {
  console.log('props:',props)

  return (
    <tr >
    <th>{props.obj.id}</th>
    <th>{props.obj.firstname}</th>
    <th>{props.obj.lastname}</th>
    <th>{props.obj.age}</th>
    <th>
      <TableAction></TableAction>
    </th>
        </tr>

  );
}

export default TableRow