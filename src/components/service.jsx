// import React from 'react';

// const Service = () => {
//   const mainContentStyle = {
//     padding: '40px',
//     height: '100vh',
//     overflowY: 'auto',
//     width: 'calc(100vw - 220px)', // adjust width based on sidebar width (220px)
//     marginLeft: '220px',           // shift right so it doesn’t go under sidebar
//     display: 'flex',
//     flexDirection: 'column',
//     fontFamily: 'Arial, sans-serif',
//     backgroundColor: '#000',
//     color: '#fff',
//   };

//   const headingStyle = {
//     fontSize: '32px',
//     fontWeight: 'bold',
//     marginBottom: '40px',
//     textAlign: 'center',
//   };

//   const contentStyle = {
//     display: 'flex',
//     flex: 1,
//     justifyContent: 'space-between',
//     alignItems: 'stretch',
//     width: '100%',
//   };

//   const textStyle = {
//     flex: 1,
//     paddingRight: '20px',
//   };

//   const listStyle = {
//     listStyleType: 'none',
//     padding: 0,
//     fontSize: '18px',
//     lineHeight: '2.8',
//     height: '100%',
//   };

//   const listItemStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     paddingRight: '10px',
//     marginBottom: '10px',
//     borderBottom: '1px solid #333',
//     color: '#fff',
//     gap: '8px',
//   };

//   const imageContainerStyle = {
//     flex: 1,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   };

//   const imageStyle = {
//     width: '100%',
//     // height: '100%',
//     objectFit: 'cover',
//     borderRadius: '10px',
//   };

//   return (
//     <main style={mainContentStyle}>
//       <h2 style={headingStyle}>Our Services</h2>
//       <div style={contentStyle}>
//         <div style={textStyle}>
//           <ul style={listStyle}>
//             <li style={listItemStyle}>
//               <span>Flutter App Development</span><span>-</span>
//             </li>
//             <li style={listItemStyle}>
//               <span>UI/UX Design</span><span>+</span>
//             </li>
//             <li style={listItemStyle}>
//               <span>Web Design</span><span>+</span>
//             </li>
//             <li style={listItemStyle}>
//               <span>SEO Optimization</span><span>+</span>
//             </li>
//             <li style={listItemStyle}>
//               <span>Digital Marketing</span><span>+</span>
//             </li>
//           </ul>
//         </div>
//         <div style={imageContainerStyle}>
//           <img
//             src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
//             alt="Service Illustration"
//             style={imageStyle}
//           />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Service;

import React, { useState, useEffect } from 'react';

const Service = () => {
  const sidebarWidth = 220;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mainContentStyle = {
    padding: isMobile ? '20px 15px' : '40px',
    height: '100vh',
    overflowY: 'auto',
    width: isMobile ? '100vw' : `calc(100vw - ${sidebarWidth}px)`,
    marginLeft: isMobile ? '0' : `${sidebarWidth}px`,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#000',
    color: '#fff',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    fontSize: isMobile ? '24px' : '32px',
    fontWeight: 'bold',
    marginBottom: isMobile ? '20px' : '40px',
    textAlign: 'center',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: '100%',
    gap: isMobile ? '20px' : '0',
  };

  const textStyle = {
    flex: 1,
    paddingRight: isMobile ? '0' : '20px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    fontSize: isMobile ? '16px' : '18px',
    lineHeight: '2.8',
    height: '100%',
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    paddingRight: '10px',
    marginBottom: '10px',
    borderBottom: '1px solid #333',
    color: '#fff',
    gap: '8px',
  };

  const imageContainerStyle = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyle = {
    width: isMobile ? '100%' : '90%',
    borderRadius: '10px',
    objectFit: 'cover',
  };

  return (
    <main style={mainContentStyle}>
      <h2 style={headingStyle}>Our Services</h2>
      <div style={contentStyle}>
        <div style={textStyle}>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <span>Flutter App Development</span><span>-</span>
            </li>
            <li style={listItemStyle}>
              <span>UI/UX Design</span><span>+</span>
            </li>
            <li style={listItemStyle}>
              <span>Web Design</span><span>+</span>
            </li>
            <li style={listItemStyle}>
              <span>SEO Optimization</span><span>+</span>
            </li>
            <li style={listItemStyle}>
              <span>Digital Marketing</span><span>+</span>
            </li>
          </ul>
        </div>
        <div style={imageContainerStyle}>
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
            alt="Service Illustration"
            style={imageStyle}
          />
        </div>
      </div>
    </main>
  );
};

export default Service;


