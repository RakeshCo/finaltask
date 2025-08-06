// import React from 'react';

// const Navbar = () => {
//   const sidebarWidth = 220;

//   const navbarStyle = {
//     backgroundColor: '#333',
//     color: '#fff',
//     padding: '15px 20px',
//     position: 'fixed',
//     top: 0,
//     left: sidebarWidth,
//     height: '60px',  // fixed navbar height, adjust if needed
//     width: `calc(100% - ${sidebarWidth}px)`,
//     display: 'flex',
//     alignItems: 'center',
//     boxSizing: 'border-box',
//     zIndex: 1000,
//   };

//   return (
//     <div style={navbarStyle}>
//       <h2>Navbar</h2>
//     </div>
//   );
// };

// export default Navbar;
// import React, { useEffect, useState } from 'react';

// const Navbar = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 600);
//     window.addEventListener('resize', handleResize);
    
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const sidebarWidth = isMobile ? 0 : 220;

//   const navbarStyle = {
//     backgroundColor: '#333',
//     color: '#fff',
//     padding: '15px 20px',
//     position: 'fixed',
//     top: 0,
//     left: sidebarWidth,
//     height: '60px',
//     width: `calc(100% - ${sidebarWidth}px)`,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: isMobile ? 'center' : 'flex-start',
//     boxSizing: 'border-box',
//     zIndex: 1000,
//   };

//   const headingStyle = {
//     fontSize: isMobile ? '1.2rem' : '1.5rem',
//     textAlign: isMobile ? 'center' : 'left',
//     margin: 0,
//     whiteSpace: 'nowrap',
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//   };

//   return (
//     <div style={navbarStyle}>
//       <h2 style={headingStyle}>SECURE YOUR FLUTTER APP</h2>
//     </div>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarWidth = isMobile ? 0 : 220;

  const navbarStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: isMobile ? '10px 15px' : '12px 20px',
    position: 'fixed',
    top: 0,
    left: sidebarWidth,
    height: '60px',
    width: `calc(100% - ${sidebarWidth}px)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: isMobile ? 'center' : 'flex-start',
    boxSizing: 'border-box',
    zIndex: 1000,
  };

  const headingStyle = {
    fontSize: isMobile ? '1rem' : '1.2rem',
    margin: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const paragraphStyle = {
    fontSize: isMobile ? '0.8rem' : '1rem',
    margin: '0 0 0 15px',
    color: '#ccc',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  return (
    <div style={navbarStyle}>
      {/* <h2 style={headingStyle}>SECURE YOUR FLUTTER APP</h2> */}
      <p style={paragraphStyle}>Securing your flutter app :best practice and technique</p>
    </div>
  );
};

export default Navbar;
