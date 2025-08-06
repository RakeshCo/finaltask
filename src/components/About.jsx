// import React from 'react';

// const About = () => {
//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'flex-end',
//     height: '60vh',
//     width: '100vw',
//     padding: '40px',
//     backgroundColor: '#000',
//     fontFamily: "'Poppins', sans-serif",
//     color: '#fff',
//     boxSizing: 'border-box',
//   };

//   const headingStyle = {
//     fontSize: '1.8rem',
//     fontWeight: 'bold',
//     whiteSpace: 'nowrap',
//     marginLeft: '180px',  // moved more to right
//     display: 'flex',
//     flexDirection: 'column', // stack vertically
//     lineHeight: '1.1',
//   };

//   const paragraphStyle = {
//     fontSize: '1rem',
//     maxWidth: '500px',
//     lineHeight: '1.6',
//   };

//   const blueTextStyle = {
//     color: 'blue',
//     textDecoration: 'underline',
//     cursor: 'pointer',
//   };

//   const buttonStyle = {
//     padding: '10px 20px',
//     backgroundColor: '#ff416c',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '6px',
//     fontSize: '1rem',
//     fontWeight: '600',
//     display: 'flex',
//     alignItems: 'center',
//     cursor: 'pointer',
//     whiteSpace: 'nowrap',
//   };

//   const arrowStyle = {
//     marginLeft: '8px',
//     fontSize: '1.2rem',
//   };

//   return (
//     <div style={containerStyle}>
//       <h1 style={headingStyle}>
//         <span>Flutter's</span>
//         <span>down</span>
     
//       </h1>
      
//       <p style={paragraphStyle}>
//         Flutter is Google’s open-source UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. It uses the Dart programming language and offers fast development, expressive and flexible designs, and native performance, making it popular for cross-platform app development.
//         <span style={blueTextStyle}>Click me again</span>
//       </p>

//       <button style={buttonStyle}>
//         Begin <span style={arrowStyle}>↗</span>
//       </button>
//     </div>
//   );
// };

// export default About;

// import React from 'react';

// const About = () => {
//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     flexWrap: 'wrap',
//     height: 'auto',
//     width: 'calc(100% - 220px)',
//     marginLeft: '220px',
//     padding: '40px',
//     backgroundColor: '#000',
//     fontFamily: "'Poppins', sans-serif",
//     color: '#fff',
//     boxSizing: 'border-box',
//   };

//   const headingStyle = {
//     fontSize: '1.8rem',
//     fontWeight: 'bold',
//     whiteSpace: 'nowrap',
//     marginBottom: '20px',
//     flexBasis: '100%',
//     lineHeight: '1.1',
//   };

//   const paragraphStyle = {
//     fontSize: '1rem',
//     maxWidth: '500px',
//     lineHeight: '1.6',
//   };

//   const blueTextStyle = {
//     color: 'blue',
//     textDecoration: 'underline',
//     cursor: 'pointer',
//   };

//   const buttonStyle = {
//     padding: '10px 20px',
//     backgroundColor: '#ff416c',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '6px',
//     fontSize: '1rem',
//     fontWeight: '600',
//     display: 'flex',
//     alignItems: 'center',
//     cursor: 'pointer',
//     whiteSpace: 'nowrap',
//     marginTop: '20px',
//   };

//   const arrowStyle = {
//     marginLeft: '8px',
//     fontSize: '1.2rem',
//   };

//   return (
//     <div style={containerStyle}>
//       <h1 style={headingStyle}>
//         <span>Flutter's</span>
//         <span>down</span>
//       </h1>

//       <p style={paragraphStyle}>
//         Flutter is Google’s open-source UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. It uses the Dart programming language and offers fast development, expressive and flexible designs, and native performance, making it popular for cross-platform app development.
//         <span style={blueTextStyle}> Click me again</span>
//       </p>

//       <button style={buttonStyle}>
//         Begin <span style={arrowStyle}>↗</span>
//       </button>
//     </div>
//   );
// };

// export default About;
import React, { useState, useEffect } from 'react';

const About = () => {
  const sidebarWidth = 220;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Always vertical for sequential layout
    width: isMobile ? '100%' : `calc(100% - ${sidebarWidth}px)`,
    marginLeft: isMobile ? '0' : `${sidebarWidth}px`,
    padding: isMobile ? '20px 15px' : '40px',
    backgroundColor: '#000',
    fontFamily: "'Poppins', sans-serif",
    color: '#fff',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    gap: '20px',
  };

  const headingStyle = {
    fontSize: isMobile ? '1.8rem' : '2.2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    lineHeight: '1.2',
  };

  const paragraphStyle = {
    fontSize: isMobile ? '0.95rem' : '1rem',
    lineHeight: '1.6',
    color: '#ccc',
    marginBottom: '10px',
  };

  const blueTextStyle = {
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#ff416c',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: isMobile ? '0.9rem' : '1rem',
    fontWeight: '600',
    alignSelf: 'flex-start',
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const arrowStyle = {
    marginLeft: '8px',
    fontSize: '1.2rem',
  };

  return (
    <div style={containerStyle}>
      {/* Heading */}
      <h1 style={headingStyle}>
        Flutter's <br />
        down
      </h1>

      {/* First Paragraph */}
      <p style={paragraphStyle}>
        Flutter is Google’s open-source UI toolkit for building beautiful, natively compiled
        applications for mobile, web, and desktop from a single codebase. It uses the Dart programming
        language and offers fast development, expressive and flexible designs, and native performance,
        making it popular for cross-platform app development.
        <span style={blueTextStyle}> Click me again</span>
      </p>

      {/* Second Paragraph - History of Flutter */}
      <p style={paragraphStyle}>
        Flutter was first announced by Google in 2015 and released in its stable version in December 2018.
        Originally focused on Android and iOS, Flutter has since evolved into a full-fledged cross-platform
        framework supporting web and desktop. Its layered architecture allows for highly customizable UI,
        which has been a key factor in its growing popularity among developers worldwide.
      </p>

      {/* Button */}
      <button style={buttonStyle}>
        Begin <span style={arrowStyle}>↗</span>
      </button>
    </div>
  );
};

export default About;

