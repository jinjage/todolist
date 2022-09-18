
import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function TestComponent() {
    const [value, setValue] = useState([]);
    const handleChange = (val) => setValue(val);
  return (
    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton id="tbg-btn-true" value={true} onClick={console.log(value)}>
       {value[0]==true ? "Bitmedi" : "Bitti"}
      </ToggleButton>
      
    </ToggleButtonGroup>
  );
}

export default TestComponent;