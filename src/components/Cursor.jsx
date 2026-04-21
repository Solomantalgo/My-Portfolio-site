import { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const requestRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // CURSOR LOGIC FROM TRIAL.HTML
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 5}px`;
        cursorRef.current.style.top = `${e.clientY - 5}px`;
      }
    };

    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x - 18}px`;
        ringRef.current.style.top = `${ringPos.current.y - 18}px`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    const onMouseEnter = () => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.transform = 'scale(2.5)';
        ringRef.current.style.transform = 'scale(1.5)';
      }
    };

    const onMouseLeave = () => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.transform = 'scale(1)';
        ringRef.current.style.transform = 'scale(1)';
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    // Attach to all links and buttons
    const handleEvents = () => {
       const elements = document.querySelectorAll('a, button');
       elements.forEach(el => {
         el.addEventListener('mouseenter', onMouseEnter);
         el.addEventListener('mouseleave', onMouseLeave);
       });
       return elements;
    };

    const elements = handleEvents();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(requestRef.current);
      elements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden lg:block" />
      <div ref={ringRef} className="custom-cursor-ring hidden lg:block" />
    </>
  );
};

export default Cursor;
