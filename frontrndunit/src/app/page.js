"use client";
import MyHeader from './components/Assets/MyHeader';
import MyFooter from './components/Assets/MyFooter';
import Bodyone from './bodys/bodyone';
import Bodytwo from './bodys/bodytwo';
import SplashController from './components/Assets/SplashController';

export default function Home() {
  return (
   <div className="">
  <SplashController />
    <MyHeader />
    <Bodyone />
    <Bodytwo />
    <MyFooter /> 
   </div>
  );
}
  