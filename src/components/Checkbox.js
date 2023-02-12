import { useState } from "react";
const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  
  return (
    <div className="checkbox-wrapper">
      <label>
        <input name="" className="radio" onChange={() => setIsChecked((prev) => !prev)} type="checkbox" checked={isChecked}  />
        <span>{label}</span>
      </label>
    </div>
  );
};
export default Checkbox;