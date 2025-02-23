import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
  <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
    <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
      Hi, I am Nan <span className="waving-hand">👋</span>
    </p>
  </div>
  
  {/* Modified computer container */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-full max-w-2xl mx-auto px-4 z-10">
    <img 
      src="/assets/computer.svg" 
      alt="Computer" 
      className="w-full h-auto"
    />
  </div>
  
  {/* Adjusted button position */}
  <div className="absolute bottom-7 left-0 right-0 w-full z-10 flex justify-center">
    <a href="#about" className="w-fit">
      <Button 
        name="Let's work together" 
        isBeam 
        containerClass="sm:w-fit w-full sm:min-w-96" 
      />
    </a>
  </div>
</section>
  );
};

export default Hero;
