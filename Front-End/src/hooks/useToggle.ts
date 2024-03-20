import { useState } from 'react';

export const useToggle = (initState = false): [boolean, () => void] => {
  const [state, setState] = useState(initState);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
};
