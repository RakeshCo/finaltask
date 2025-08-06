// cimport React from 'react';

// const Sidebar = () => {
//   const sidebarStyle = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '220px',
//     height: '100vh',
//     backgroundColor: '#000',
//     padding: '20px',
//     boxSizing: 'border-box',
//     overflowY: 'auto', // important for scroll
//     color: 'white',
//     fontFamily: "'Poppins', sans-serif",
//     borderRight: '2px solid #444',
    
//   };

//   const logoStyle = {
//     width: '100px',
//     margin: '0 auto 30px',
//     display: 'block',
//   };

//   const listStyle = {
//     listStyle: 'none',
//     padding: 0,
//     marginTop: '25px',
//   };

//   const listItemStyle = {
//     marginBottom: '25px',
//     cursor: 'pointer',
//     fontSize: '15px',
//     letterSpacing: '0.5px',
//   };

//   const gradientBorderStyle = {
//     padding: '2px',
//     borderRadius: '10px',
//     background: 'linear-gradient(45deg, #ff0000, #ff9900, #00ff00, #00ccff, #9900ff)',
//     marginBottom: '30px',
//   };

//   const contactButtonStyle = {
//     backgroundColor: '#000',
//     color: '#fff',
//     padding: '10px 15px',
//     border: 'none',
//     borderRadius: '8px',
//     width: '100%',
//     textAlign: 'center',
//     cursor: 'pointer',
//     fontWeight: '600',
//     fontSize: '14px',
//     letterSpacing: '0.5px',
//   };

//   const imageStyle = {
//     width: '100%',
//     marginTop: '30px',
//     borderRadius: '8px',
//   };

//   const loremTextStyle = {
//     marginTop: '15px',
//     fontSize: '14px',
//     lineHeight: '1.5',
//   };

//   return (
//     <div style={sidebarStyle}>
//       {/* Logo */}
//       <img src="/assets/logo.png" alt="Logo" style={logoStyle} />

//       {/* Contact Us with colorful border */}
//       <div style={gradientBorderStyle}>
//         <button style={contactButtonStyle}>Contact Us</button>
//       </div>

//       {/* List Items */}
//       <ul style={listStyle}>
//         <li style={listItemStyle}>App Development</li>
//         <li style={listItemStyle}>Challenges</li>
//         <li style={listItemStyle}>Hire Developer</li>
//         <li style={listItemStyle}>Community</li>
//       </ul>

      
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState, useEffect } from 'react';

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

  // Update sidebar behavior on window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setIsOpen(!mobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarStyle = {
    position: 'fixed',
    top: 0,
    left: isOpen ? '0' : '-240px', // slide in/out
    width: '220px',
    height: '100vh',
    backgroundColor: '#000',
    padding: '20px',
    boxSizing: 'border-box',
    overflowY: 'auto',
    color: 'white',
    fontFamily: "'Poppins', sans-serif",
    borderRight: '2px solid #444',
    transition: 'left 0.3s ease',
    zIndex: 1000,
  };

  const toggleButtonStyle = {
    position: 'fixed',
    top: '15px',
    left: isOpen ? '230px' : '10px',
    backgroundColor: '#111',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    zIndex: 1100,
    fontSize: '18px',
  };

  const logoStyle = {
    width: '100px',
    margin: '0 auto 30px',
    display: 'block',
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    marginTop: '25px',
  };

  const listItemStyle = {
    marginBottom: '25px',
    cursor: 'pointer',
    fontSize: '15px',
    letterSpacing: '0.5px',
  };

  const gradientBorderStyle = {
    padding: '2px',
    borderRadius: '10px',
    background:
      'linear-gradient(45deg, #ff0000, #ff9900, #00ff00, #00ccff, #9900ff)',
    marginBottom: '30px',
  };

  const contactButtonStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '8px',
    width: '100%',
    textAlign: 'center',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    letterSpacing: '0.5px',
  };

  return (
    <>
      {isMobile && (
        <button onClick={toggleSidebar} style={toggleButtonStyle}>
          {isOpen ? '✖' : '☰'}
        </button>
      )}

      <div style={sidebarStyle}>
        {/* Logo */}
        <img src="/assets/logo.png" alt="Logo" style={logoStyle} />

        {/* Contact Us with colorful border */}
        <div style={gradientBorderStyle}>
          <button style={contactButtonStyle}>Contact Us</button>
        </div>

        {/* List Items */}
        <ul style={listStyle}>
          <li style={listItemStyle}>App Development</li>
          <li style={listItemStyle}>Challenges</li>
          <li style={listItemStyle}>Hire Developer</li>
          <li style={listItemStyle}>Community</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;



