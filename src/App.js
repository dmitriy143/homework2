import { useState, useEffect } from 'react';
import TableRow from './components/TableRow';
import EntyField from './components/EntyField';
import './App.css';

function App() {

  let state = [
    {
      id: 1,
      name: 'какой-то текст1'
    },
    {
      id: 2,
      name: 'какой-то текст2'
    },
    {
      id: 3,
      name: 'какой-то текст3'
    }
  ]

  const [rows, setRow] = useState(JSON.parse(localStorage.getItem('rows')) || state)

  useEffect(() => {
    localStorage.setItem('rows', JSON.stringify(rows));
  }, [rows])

  const [textValue, setTextValue] = useState('')

  // изменяем textValue (событие)
  function changeText(evt) {
    setTextValue(evt.target.value)
  }
  function changeTextEnter(e) {
    if (e.key === 'Enter') {
      addRow()
    }
  }

  // удалям tr
  function delRow(index) {
    // устанавливаем новое значение rows, обрезаем rows до index-са и прибавляем оставшуюся часть массива(rows) - вырезаем элемент
    setRow(rows.slice(0, index).concat(rows.slice(index + 1)));
  }

  // добавляем tr
  function addRow() {
    // добавляем к rows еще один объект
    setRow([
      ...rows,
      {
        id: rows[rows.length - 1].id + 1,
        name: !textValue ? 'какой-то текст' : textValue
      }]
    );
    setTextValue('')
  }

  return (
    <div className="App">
      <div className="control">
        <EntyField textValue={textValue} changeText={changeText} changeTextEnter={changeTextEnter} />
        <button onClick={() => addRow()}>add</button>
      </div>
      <div className="table-wrapper">
        <table className="table">
          <tbody>
            <TableRow rows={rows} delRow={delRow} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
