import React, { useRef, useState } from 'react';
import useOutsideClick from './../customHooks/UseOutsideClick';

function Dropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useOutsideClick(dropdownRef, () => {
    if (open) setOpen(false);
  });

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Toggle Dropdown</button>
      {open && (
        <div ref={dropdownRef} style={{ border: '1px solid black', padding: '10px' }}>
          Dropdown Content
        </div>
      )}
    </div>
  );
}

export default Dropdown;
