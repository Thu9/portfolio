import { useEffect, useState } from 'react';
import './Loader.scss';
import NumberScroller from '../../components/number-scroller/NumberScroller';

export default function Loader(props: any) {
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(50);
  const [entranceAnimation, setEntranceAnimation] = useState('');

  const loadingStyle = {
    backgroundPosition: `${100 - progress}% 0`,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setCount(progress < 9 ? 50 : progress < 17 ? 300 : progress < 32 ? 70 : 20);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, count);

    if (progress >= 100) {
      setTimeout(() => {
        setEntranceAnimation('entrance-close-up');
      }, 250);
    }

    return () => clearInterval(interval);
  }, [progress]);

  const handleEntranceEnd = () => {
    props.setEntrance(true);
  };

  return (
    <div className="bg-black w-[100%] h-[100%]">
      <div className="flex h-[100%] justify-center items-center">
        <div className="text-white font-bold text-[48px] leading-[1]">
          <div className="loading-text" style={loadingStyle}>
            LOADING
          </div>

          <div className={entranceAnimation} onAnimationEnd={handleEntranceEnd}>
            <div className={'loading-text'} style={loadingStyle}>
              LOADING
            </div>
          </div>

          <div className="loading-text" style={loadingStyle}>
            LOADING
          </div>
        </div>
      </div>
      <div className="fixed bottom-[16px] left-[16px]">
        <NumberScroller num={progress} fontSize={144} />
      </div>
    </div>
  );
}
