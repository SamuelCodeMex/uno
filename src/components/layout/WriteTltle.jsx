import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
 function WriteTitle() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Programador', 'Desarrollador', 'Maquetador web'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <p className="hero-subtitle">
      <span ref={typedRef}>
        {/* Empty span to hold the typed text */}
      </span>
    </p>
  );
}


export default WriteTitle