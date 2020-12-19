import React from 'react';
import { useRouter } from 'next/router';

const ActiveLink = React.forwardRef(({ children, href }, ref) => {
  const router = useRouter();

  const style = {
    opacity: router.asPath === href ? '0.6' : '1.0',
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style} ref={ref}>
      {children}
    </a>
  );
});

export default ActiveLink;
