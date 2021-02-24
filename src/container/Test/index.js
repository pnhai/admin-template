import React, { useState } from "react";
import "./index.scss";
export default function Test() {
  const [open, setopen] = useState(false);
  return (
    <div>
      <button onClick={() => setopen(!open)}>CLick</button>
      <p className={`h-12 bg-gray-300 open-text ${open && "active"}`}>
        Aliquam ligula est, aliquet et semper vitae,.
      </p>
    </div>
  );
}
