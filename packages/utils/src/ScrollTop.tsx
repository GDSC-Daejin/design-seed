import { useEffect } from 'react';
{
  /*페이지 이동시 스크롤 초기화 코드*/
}
export const ScrollTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
