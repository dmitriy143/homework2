// import React from 'react';


function EntyField({ textValue, changeText, changeTextEnter }) {
  return (
    <>
      <input value={textValue} onChange={changeText} onKeyDown={changeTextEnter} type="text" />
    </>
  );
}

export default EntyField;