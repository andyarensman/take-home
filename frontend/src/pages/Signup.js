import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password, firstName, lastName);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>SignUp</h3>
      <label>First Name:</label>
      <input
        type="string"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <label>Last Name:</label>
      <input
        type="string"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      />
      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button>Sign Up</button>
    </form>
  );
};

export default Signup;
