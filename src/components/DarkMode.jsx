import React from 'react';
import Lightpng from '../assets/website/dark.png';
import Darkpng from '../assets/website/light.png';

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  const element = document.documentElement;

  React.useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='relative'>
      <img
        src={Lightpng}
        alt=""
        onClick={toggleTheme}
        className={`w-12 cursor-pointer drop-shadow-lg transition-all duration-300 absolute right-0 z-10 ${theme === 'dark' ? 'opacity-0' : 'opacity-50'}`}
      />

      <img
        src={Darkpng}
        alt=""
        onClick={toggleTheme}
        className={`w-12 cursor-pointer drop-shadow-lg transition-all duration-300 ${theme === 'dark' ? 'opacity-50' : 'opacity-0'}`}
      />
    </div>
  );
};

export default DarkMode;
