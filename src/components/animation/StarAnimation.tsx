import { useEffect, useRef } from 'react';
import '../../assets/styles/stars.scss';

export default function StarAnimation() {
  const constellationRef = useRef<HTMLDivElement>(null);
  const starsCount = 250;
  let stars = '';

  const style = ['style1', 'style2', 'style3', 'style4'];
  const size = ['size1', 'size1', 'size1', 'size2', 'size3'];
  const opacity = [
    'opacity1',
    'opacity1',
    'opacity1',
    'opacity2',
    'opacity2',
    'opacity3',
  ];

  useEffect(() => {
    setLayout();
  }, []);

  const setLayout = () => {
    if (!constellationRef.current) return;

    const windowWidth = screen.width;
    const windowHeight = constellationRef.current?.offsetHeight;

    for (let i = 0; i < starsCount; i++) {
      stars +=
        "<span class='stars " +
        style[getRandomValue(0, 4)] +
        ' ' +
        opacity[getRandomValue(0, 6)] +
        ' ' +
        size[getRandomValue(0, 5)] +
        "' style='animation-delay: 0." +
        getRandomValue(0, 9) +
        's; left: ' +
        getRandomValue(0, windowWidth) +
        'px; top: ' +
        getRandomValue(0, windowHeight) +
        "px;'></span>";
    }

    constellationRef.current.innerHTML = stars;
  };

  const getRandomValue = (min: number, max: number): number => {
    //min <= value < max
    return Math.floor(Math.random() * (max - min) + min);
  };

  // addEventListener('resize', setLayout);

  // noite.innerHTML = estrela;

  // //meteoros
  // var numeroAleatorio = 5000;

  // setTimeout(function () {
  //   carregarMeteoro();
  // }, numeroAleatorio);

  // function carregarMeteoro() {
  //   setTimeout(carregarMeteoro, numeroAleatorio);
  //   numeroAleatorio = getRandomValue(5000, 10000);
  //   var meteoro =
  //     "<div class='meteoro " + style[getRandomValue(0, 4)] + "'></div>";
  //   document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = meteoro;
  //   setTimeout(function () {
  //     document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = '';
  //   }, 1000);
  // }

  return (
    <>
      <div
        ref={constellationRef}
        className="absolute left-0 top-0 bg-wihte w-full h-full"
      ></div>
    </>
  );
}
