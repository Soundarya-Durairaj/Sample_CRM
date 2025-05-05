import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleRegister} style={{ maxWidth: "300px", margin: "50px auto" }}>
      <h2>Register</h2>
      <input type="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", margin: "5px 0" }} />
      <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", margin: "5px 0" }} />
      <button type="submit" style={{ width: "100%" }}>Register</button>
    </form>
  );
}

export default Register;
