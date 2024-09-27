import StarAnimation from '../../components/animation/StarAnimation';
import MainTop from '../../components/main-top/MainTop';
import './main.scss';

export default function Main() {
  return (
    <>
      <StarAnimation />
      <MainTop />
      <div className="pl-[32px] pr-[18px] relative">
        <div className="h-[400px] border border-solid border-green-400"></div>
        <div className="h-[400px] border border-solid border-white"></div>
        <div className="h-[400px] border border-solid border-white"></div>
        <div className="h-[400px] border border-solid border-white"></div>
      </div>
    </>
  );
}
