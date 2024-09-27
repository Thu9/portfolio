import { useEffect, useRef, useState } from 'react';

export default function MainTop() {
  const mainTopRef = useRef<HTMLDivElement>(null);
  let yOffset = 0;
  let offsetBottom = 0;
  let offsetWidth = 0;

  //가속도
  let acc = 0.1;
  let delayedYOffset = 0;
  let rafId = 0;
  let rafState = false;

  const ScrollDown = () => {
    // scrollTo({ top: offsetBottom, behavior: 'smooth' });
  };
  //   const offsetBottom = mainTopRef.current?.offsetHeight;
  useEffect(() => {
    setLayout();
  }, []);

  const setLayout = () => {
    yOffset = window.scrollY;
    if (mainTopRef.current) {
      offsetBottom = mainTopRef.current?.offsetHeight;
      offsetWidth = mainTopRef.current?.offsetWidth;
    }
  };

  const playAnimation = (delayedYOffset: number) => {
    const scrollRatio = (delayedYOffset / offsetBottom) * 2;
    const currentYOffset =
      scrollRatio * offsetWidth > offsetWidth
        ? offsetWidth
        : scrollRatio * offsetWidth;
    console.log(currentYOffset);

    if (mainTopRef.current) {
      const firstText1 = mainTopRef.current?.querySelector(
        '.main-top-title .first',
      ) as HTMLDivElement;
      const firstText2 = mainTopRef.current?.querySelector(
        '.main-top-title-border .first',
      ) as HTMLDivElement;
      const secondText1 = mainTopRef.current?.querySelector(
        '.main-top-title .second',
      ) as HTMLDivElement;
      const secondText2 = mainTopRef.current?.querySelector(
        '.main-top-title-border .second',
      ) as HTMLDivElement;

      firstText1.style.transform = `translate3d(${currentYOffset}px, 0, 0)`;
      firstText2.style.transform = `translate3d(${currentYOffset}px, 0, 0)`;
      secondText1.style.transform = `translate3d(-${currentYOffset}px, 0, 0)`;
      secondText2.style.transform = `translate3d(-${currentYOffset}px, 0, 0)`;
    }
  };

  const loop = () => {
    delayedYOffset = delayedYOffset + (yOffset - delayedYOffset) * acc;
    rafId = requestAnimationFrame(loop);

    playAnimation(delayedYOffset);

    if (Math.abs(yOffset - delayedYOffset) < 1) {
      cancelAnimationFrame(rafId);
      rafState = false;
    }
  };

  addEventListener('scroll', () => {
    yOffset = window.scrollY;
    // playAnimation();
    if (!rafState) {
      rafId = requestAnimationFrame(loop);
      rafState = true;
    }
  });

  addEventListener('resize', setLayout);
  return (
    <>
      <div className="title h-[100vh] w-full relative">
        <div
          ref={mainTopRef}
          className="fixed w-full h-full flex items-center justify-center"
        >
          <div className="main-top-title z-[1]">
            <div className="first float-start">LEE SEOK WOO</div>
            <div className="second float-end whitespace-nowrap">PORTFOLIO</div>
          </div>
          <div className="main-top-title main-top-title-border z-[3]">
            <div className="first float-start">LEE SEOK WOO</div>
            <div className="second float-end whitespace-nowrap">PORTFOLIO</div>
          </div>
          <div className="z-[2] w-[560px] h-[560px] bg-index-white rounded-[50%] max-sm:w-[360px] max-sm:h-[360px]"></div>

          {/* <button
        onClick={ScrollDown}
        className="arrow-button border-[2px] border-index-white mt-[20px] py-[10px] px-[20px] hover:bg-[#04c2c9] hover:border-[#04c2c9]"
        >
        <p className="bg-transparent text-[24px]">
        View my work
        <span className="arrow ml-[8px]">→</span>
        </p>
        </button> */}
        </div>
      </div>
    </>
  );
}
