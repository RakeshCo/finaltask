// // Home.js
// import React from 'react';

// const Home = () => {
//   const sidebarWidth = 220;
//   const navbarHeight = 60;

//   const containerStyle = {
//     position: 'relative',
//     marginLeft: `${sidebarWidth}px`,
//     marginTop: `${navbarHeight}px`,
//     width: `calc(100% - ${sidebarWidth}px)`,
//     height: `calc(100vh - ${navbarHeight}px)`,
//     backgroundImage:
//       'url("https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1950&q=80")',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     overflowY: 'auto',
//     color: '#fff',
//     fontFamily: "'Poppins', sans-serif",
//     padding: '20px',
//     boxSizing: 'border-box',
//     display: 'flex',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//   };

//   const textWrapper = {
//     backgroundColor: 'rgba(0,0,0,0.6)',
// //     padding: '40px',
// //     borderRadius: '10px',
// //     maxWidth: '700px',
// //     color: 'white',
// //   };

// //   const headingStyle = {
// //     fontSize: '3rem',
// //     marginBottom: '20px',
// //   };

// //   const subheadingStyle = {
// //     fontSize: '1.2rem',
// //     lineHeight: '1.6',
// //     marginBottom: '30px',
// //   };

// //   const buttonStyle = {
// //     padding: '12px 30px',
// //     background: 'linear-gradient(90deg, #ff416c, #ff4b2b)',
// //     border: 'none',
// //     borderRadius: '6px',
// //     color: '#fff',
// //     fontSize: '1rem',
// //     fontWeight: '600',
// //     cursor: 'pointer',
// //   };

// //   return (
// //     <main style={containerStyle}>
// //       <div style={textWrapper}>
// //         <h1 style={headingStyle}>
// //           Unlock the potential
// //           <br />
// //           of Flutter
// //         </h1>
// //         <p style={subheadingStyle}>
// //           Your premier partner for cross-platform app excellent
// //         </p>
// //         <button style={buttonStyle}>Upgrade Your Tech</button>
// //       </div>
// //     </main>
// //   );
// // };

// // export default Home;


// import React from 'react';

// const Home = () => {
//   const sidebarWidth = 220;
//   const navbarHeight = 60;

//   const containerStyle = {
//     position: 'relative',
//     marginLeft: `${sidebarWidth}px`,
//     marginTop: `${navbarHeight}px`,
//     width: `calc(100% - ${sidebarWidth}px)`,
//     height: `calc(100vh - ${navbarHeight}px)`,
//     backgroundImage:
//       'url("https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1950&q=80")',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     overflowY: 'auto', // scroll if content overflows
//     color: '#fff',
//     fontFamily: "'Poppins', sans-serif",
//     padding: '20px',
//     boxSizing: 'border-box',
//     display: 'flex',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//   };

//   const textWrapper = {
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     padding: '40px',
//     borderRadius: '10px',
//     maxWidth: '700px',
//     color: 'white',
//   };

//   const headingStyle = {
//     fontSize: '3rem',
//     marginBottom: '20px',
//   };

//   const subheadingStyle = {
//     fontSize: '1.2rem',
//     lineHeight: '1.6',
//     marginBottom: '30px',
//   };

//   const buttonStyle = {
//     padding: '12px 30px',
//     background: 'linear-gradient(90deg, #ff416c, #ff4b2b)',
//     border: 'none',
//     borderRadius: '6px',
//     color: '#fff',
//     fontSize: '1rem',
//     fontWeight: '600',
//     cursor: 'pointer',
//   };

//   return (
//     <main style={containerStyle}>
//       <div style={textWrapper}>
//         <h1 style={headingStyle}>
//           Unlock the potential
//           <br />
//           of Flutter
//         </h1>
//         <p style={subheadingStyle}>
//           Your premier partner for cross-platform app excellence
//         </p>
//         <button style={buttonStyle}>Upgrade Your Tech</button>
//       </div>
//     </main>
//   );
// };

// export default Home;


// import React, { useState, useEffect } from 'react';

// const Home = () => {
//   const sidebarWidth = 220;
//   const navbarHeight = 60;

//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const containerStyle = {
//     position: 'relative',
//     marginLeft: isMobile ? '0' : `${sidebarWidth}px`,
//     marginTop: `${navbarHeight}px`,
//     width: isMobile ? '100%' : `calc(100% - ${sidebarWidth}px)`,
//     height: `calc(100vh - ${navbarHeight}px)`,
//     backgroundImage:
//       'url("https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1950&q=80")',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     overflowY: 'auto',
//     color: '#fff',
//     fontFamily: "'Poppins', sans-serif",
//     padding: isMobile ? '15px' : '20px',
//     boxSizing: 'border-box',
//     display: 'flex',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//   };

//   const textWrapper = {
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     padding: isMobile ? '25px' : '40px',
//     borderRadius: '10px',
//     maxWidth: '700px',
//     width: '100%',
//     color: 'white',
//   };

//   const headingStyle = {
//     fontSize: isMobile ? '2rem' : '3rem',
//     marginBottom: '20px',
//   };

//   const subheadingStyle = {
//     fontSize: isMobile ? '1rem' : '1.2rem',
//     lineHeight: '1.6',
//     marginBottom: '30px',
//   };

//   const buttonStyle = {
//     padding: '12px 30px',
//     background: 'linear-gradient(90deg, #ff416c, #ff4b2b)',
//     border: 'none',
//     borderRadius: '6px',
//     color: '#fff',
//     fontSize: isMobile ? '0.9rem' : '1rem',
//     fontWeight: '600',
//     cursor: 'pointer',
//   };

//   return (
//     <main style={containerStyle}>
//       <div style={textWrapper}>
//         <h1 style={headingStyle}>
//           Unlock the potential
//           <br />
//           of Flutter
//         </h1>
//         <p style={subheadingStyle}>
//           Your premier partner for cross-platform app excellence
//         </p>
//         <button style={buttonStyle}>Upgrade Your Tech</button>
//       </div>
//     </main>
//   );
// };

// export default Home;
import React, { useState, useEffect } from 'react';

const Home = () => {
  const sidebarWidth = 220;
  const navbarHeight = 60;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    position: 'relative',
    marginLeft: isMobile ? 0 : `${sidebarWidth}px`,
    marginTop: `${navbarHeight}px`,
    width: isMobile ? '100%' : `calc(100% - ${sidebarWidth}px)`,
    minHeight: `calc(100vh - ${navbarHeight}px)`,
    backgroundImage:
      'url("https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1950&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflowY: 'auto',
    overflowX: 'hidden',
    color: '#fff',
    fontFamily: "'Poppins', sans-serif",
    padding: isMobile ? '15px' : '20px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  };

  const textWrapper = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: isMobile ? '25px' : '40px',
    borderRadius: '10px',
    maxWidth: '700px',
    width: '100%',
    color: 'white',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    fontSize: isMobile ? '2rem' : '3rem',
    marginBottom: '20px',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
  };

  const subheadingStyle = {
    fontSize: isMobile ? '1rem' : '1.2rem',
    lineHeight: '1.6',
    marginBottom: '30px',
  };

  const buttonStyle = {
    padding: '12px 30px',
    background: 'blue',
    border: 'none',
    borderRadius: '6px',
    color: '#fff',
    fontSize: isMobile ? '0.9rem' : '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    borderRadius:"50px"
  };

  return (
    <main style={containerStyle}>
      <div style={textWrapper}>
        <h1 style={headingStyle}>
          Unlock the potential
          <br />
          of Flutter
        </h1>
        <p style={subheadingStyle}>
          Your premier partner for cross-platform app excellence
        </p>
        <button style={buttonStyle}>Upgrade Your Tech</button>
      </div>
    </main>
  );
};

export default Home;
