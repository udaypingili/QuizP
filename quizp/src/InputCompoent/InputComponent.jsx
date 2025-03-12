import { useState } from "react";
import "./InputComponent.scss";

export default function InputComponent() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`container ${isActive ? "dimmed" : ""}`}>
      {/* Background overlay */}
      <div className={`overlay ${isActive ? "show" : ""}`} onClick={() => setIsActive(false)}></div>

      {/* Input field */}
      <div className={`input-container ${isActive ? "active" : ""}`}>
        <input
          type="text"
          placeholder="Type something..."
          onFocus={() => setIsActive(true)}
        />
      </div>
    </div>
  );
}
