import { useEffect, useState } from 'react';

import { debounce } from 'lodash';

export const useWindowWidth = () => {
  const [width, setWidth] = useState(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = debounce(() => {
        setWidth(window.innerWidth);
      }, 50);

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
    return null;
  }, []);

  return width;
};

export default null;
