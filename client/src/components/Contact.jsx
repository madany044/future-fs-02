import React from 'react';

const Contact = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(12px)",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
          maxWidth: "500px",
          width: "100%",
          animation: "fadeInUp 0.6s ease forwards",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "20px",
            color: "#2c3e50",
            position: "relative",
          }}
        >
          Contact Us
          <span
            style={{
              display: "block",
              width: "60px",
              height: "4px",
              background: "#3498db",
              margin: "10px auto 0",
              borderRadius: "2px",
            }}
          ></span>
        </h2>

        <form>
          {/* Name */}
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="name" style={{ fontWeight: "bold" }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "6px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                outline: "none",
                transition: "0.3s",
              }}
              onFocus={(e) => (e.target.style.border = "1px solid #3498db")}
              onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="email" style={{ fontWeight: "bold" }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "6px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                outline: "none",
                transition: "0.3s",
              }}
              onFocus={(e) => (e.target.style.border = "1px solid #3498db")}
              onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
            />
          </div>

          {/* Message */}
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="message" style={{ fontWeight: "bold" }}>
              Message
            </label>
            <textarea
              id="message"
              placeholder="How can we help you?"
              rows="4"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "6px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                resize: "none",
                outline: "none",
                transition: "0.3s",
              }}
              onFocus={(e) => (e.target.style.border = "1px solid #3498db")}
              onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "linear-gradient(90deg, #3498db, #2ecc71)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "1.1rem",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.target.style.background =
                "linear-gradient(90deg, #2ecc71, #3498db)")
            }
            onMouseOut={(e) =>
              (e.target.style.background =
                "linear-gradient(90deg, #3498db, #2ecc71)")
            }
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
