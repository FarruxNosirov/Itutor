import {useCallback, useState} from 'react';

const useVisible = () => {
  const [visible, setVisible] = useState(false);

  const hide = useCallback(() => setVisible(false), []);
  const show = useCallback(() => setVisible(true), []);
  const toggle = useCallback(() => setVisible(v => !v), []);

  return {
    visible,
    hide,
    show,
    toggle,
  };
};

export default useVisible;
