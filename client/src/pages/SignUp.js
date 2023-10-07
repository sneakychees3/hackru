import { Link } from "react-router-dom";
import { useState } from "react";
export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      setLoading(true);
      const res = await fetch(process.env.REACT_APP_SERVER_BASE+"/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(!data.success){
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      console.log(data);
    }catch(e){
      setLoading(false);
      setError(e);
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" onChange={handleChange} id='username'/>
        <input type="text" placeholder="password" onChange={handleChange} id='password'/>
        <button disabled={loading}>{loading ?'Loading...':"Sign Up"}</button>
      </form>
      <div>
        <p>have an account? Sign in</p>
        <Link to={"/sign-in"}>
          <span>Sign in</span>
        </Link>
      </div>
      {error&&<p>{error}</p>}
    </div>
  );
}
