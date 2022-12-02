import React from 'react';

export default function Modal(title, children, editing, setEditing, onExited, showCloseIcon, className) {
  return (<div>
    <h5>{title}</h5>
  </div>
  );
}

{/* <div>
<div>
  {showCloseIcon && (
    <button
      aria-label="close dialog"
      onClick={() => setEditing(false)}
      className="dialog-close"
    >
      X
    </button>
  )}
  <h5>
    {title}
  </h5>

  {children}
</div>
</div> */}