import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    navigate("/dashboard");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #74ebd5, #ACB6E5)"
    }}>
      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          width: "100%",
          maxWidth: "400px", // Limits form width for better responsiveness
        }}
      >
        <h2 style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "20px"
        }}>Login</h2>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px", // Adjusted space between input fields
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box", // Prevents overflow of padding
          }}
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px", // Adjusted space between input fields
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box", // Prevents overflow of padding
          }}
        />
        
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05, backgroundColor: "#ACB6E5" }}
          transition={{ duration: 0.3 }}
          style={{
            width: "100%",
            padding: "14px",
            background: "#74ebd5",
            border: "none",
            color: "#333",
            fontWeight: "bold",
            borderRadius: "4px",
            cursor: "pointer",
            boxSizing: "border-box", // Ensures button width matches input fields
          }}
        >
          Login
        </motion.button>
      </motion.form>
    </div>
  );
}

export default Login;
