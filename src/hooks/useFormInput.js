import { useState } from "react";

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
    setValue
  };
}

export default useFormInput;    