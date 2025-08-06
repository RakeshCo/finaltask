// import React from "react";

// const ContactUs = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Form submitted!");
//   };

//   return (
//     <div
//       style={{
//         marginLeft: "220px",
//         padding: "20px",
//         boxSizing: "border-box",
//         minHeight: "100vh",
//         backgroundColor: "#000",
//         fontFamily: "'Poppins', sans-serif",
//         color: "#fff",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           gap: "20px",
//           marginBottom: "30px",
//           fontWeight: "500",
//           fontSize: "16px",
//         }}
//       >
//         <div>Events</div>
//         <div>GenAi</div>
//         <div>Careers</div>
//         <div>Case Study</div>
//         <div>SME Talks</div>
//       </div>

//       <h2
//         style={{
//           fontSize: "22px",
//           marginBottom: "25px",
//           color: "#fff",
//           fontWeight: "600",
//           letterSpacing: "1px",
//           textTransform: "uppercase",
//         }}
//       >
//         Contact With Us
//       </h2>

//       <div
//         style={{
//           display: "flex",
//           gap: "40px",
//           alignItems: "flex-start",
//           flexWrap: "wrap",
//         }}
//       >
//         <div style={{ flex: "1", minWidth: "250px" }}>
//           <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#ccc" }}>
//             For any collaboration or project query,<br />
//             feel free to contact us.<br />
//             <strong>yayuz.com</strong>
//           </p>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "12px",
//             width: "300px",
//             backgroundColor: "#1a1a1a",
//             padding: "20px",
//             borderRadius: "10px",
//             boxShadow: "0 0 10px rgba(255,255,255,0.1)",
//           }}
//         >
//           <input type="text" placeholder="Your Name" style={inputStyle} />
//           <input type="email" placeholder="Your Email" style={inputStyle} />
//           <input type="tel" placeholder="Your Phone" style={inputStyle} />
//           <button type="submit" style={buttonStyle}>
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const inputStyle = {
//   padding: "10px",
//   fontSize: "14px",
//   border: "1px solid #555",
//   borderRadius: "6px",
//   backgroundColor: "#000",
//   color: "#fff",
// };

// const buttonStyle = {
//   padding: "10px",
//   backgroundColor: "#fff",
//   color: "#000",
//   border: "none",
//   borderRadius: "6px",
//   fontWeight: "600",
//   cursor: "pointer",
// };

// export default ContactUs;

import React from "react";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <>
      <style>
        {`
          /* Base container with left margin for desktop */
          .container {
            margin-left: 220px;
            padding: 20px;
            box-sizing: border-box;
            min-height: 100vh;
            background-color: #000;
            font-family: 'Poppins', sans-serif;
            color: #fff;
          }

          /* Top navbar flex container */
          .top-navbar {
            display: flex;
            gap: 20px;
            margin-bottom: 30px;
            font-weight: 500;
            font-size: 16px;
            flex-wrap: wrap;
          }

          /* Heading style */
          .heading {
            font-size: 22px;
            margin-bottom: 25px;
            color: #fff;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
          }

          /* Main section flex container */
          .main-section {
            display: flex;
            gap: 40px;
            align-items: flex-start;
            flex-wrap: wrap;
          }

          /* Left text block */
          .left-text {
            flex: 1;
            min-width: 250px;
            font-size: 16px;
            line-height: 1.6;
            color: #ccc;
          }

          /* Form styles */
          .contact-form {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 300px;
            background-color: #1a1a1a;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(255,255,255,0.1);
          }

          input[type="text"],
          input[type="email"],
          input[type="tel"] {
            padding: 10px;
            font-size: 14px;
            border: 1px solid #555;
            border-radius: 6px;
            background-color: #000;
            color: #fff;
          }

          button {
            padding: 10px;
            background-color: #fff;
            color: #000;
            border: none;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
          }

          /* Responsive for smaller screens */
          @media (max-width: 600px) {
            .container {
              margin-left: 0;
              padding: 15px 10px;
            }
            .top-navbar {
              gap: 10px;
              font-size: 14px;
            }
            .main-section {
              flex-direction: column;
              gap: 20px;
            }
            .contact-form {
              width: 100%;
            }
            .left-text {
              font-size: 14px;
              min-width: auto;
            }
          }
        `}
      </style>

      <div className="container">
        <div className="top-navbar">
          <div>Events</div>
          <div>GenAi</div>
          <div>Careers</div>
          <div>Case Study</div>
          <div>SME Talks</div>
        </div>

        <h2 className="heading">Contact With Us</h2>

        <div className="main-section">
          <div className="left-text">
            For any collaboration or project query,<br />
            feel free to contact us.<br />
            <strong>yayuz.com</strong>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="tel" placeholder="Your Phone" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;



