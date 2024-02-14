import React, { useState, useRef } from 'react';
import './Collapsible.css'

export default function Collapsible({ label, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();
  return (
    <div className='collapsible'>
      <button className='collapsible-toggle' onClick={() => setIsOpen(!isOpen)}>
        {label}
      </button>

      <div className='collapsible-content-parent' ref={parentRef}
        style={isOpen ? {
          height: parentRef.current.scrollHeight + "px",
        } : {
          height: "0px",
        }}
      >
        <div className='collapsible-content'>{children} </div>
      </div>
    </div>
  );
}