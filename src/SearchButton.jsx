import React, { forwardRef } from 'react';

const SearchButton = forwardRef(({ ref1, ref2, onSubmit }, ref) => {
  return (
    <div className="buttCont">
      <div>
        <button className="button-30" onClick={onSubmit}>
          Search
        </button>
      </div>
    </div>
  );
});

export default SearchButton;
