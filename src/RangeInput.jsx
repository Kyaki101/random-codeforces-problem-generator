import React, { forwardRef } from 'react';

const RangeInput = forwardRef((props, ref) => {  
  return (
    <>
      <div>
        <input type="text" className="rangeInp" ref={ref} placeholder={props.bound}/> 
      </div>
    </>
  );
});

export default RangeInput;
