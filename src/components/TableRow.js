// import { useState } from 'react';


function TableRow({ rows, delRow }) {
  // console.log(rows)

  return (
    <>
      {rows.map((row, index) => {
        return (
          <tr key={row.id} className="table-row">
            <td className="table-td">{row.name}</td>
            <td className="table-td"><button onClick={() => delRow(index)}>delete</button></td>
          </tr>
        )
      })}
    </ >

  )
}

export default TableRow;
