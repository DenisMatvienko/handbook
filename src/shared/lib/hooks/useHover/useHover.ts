import { useCallback, useMemo, useState } from 'react';

export interface useHoverBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export type useHoverResult = [boolean, useHoverBind];

export const useHover = (): useHoverResult => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return useMemo(() => [
    isHover,
    {
      onMouseEnter,
      onMouseLeave,
    },
  ], [isHover, onMouseEnter, onMouseLeave]);
};
