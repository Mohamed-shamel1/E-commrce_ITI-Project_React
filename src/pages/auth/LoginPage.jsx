import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import "../../styles/auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const LoginPage = () => {
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "", remember: false });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email address";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert("Login successful! (This is a demo)");
    } catch (err) {
      alert("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    alert(`${provider} login would be implemented here`);
  };

  return (
    <div className="auth-container">
      <div className="auth-image">
        <div className="image-overlay">
          <div className="brand-logo">
            <h1>FASCO</h1>
          </div>
        </div>
      </div>
      <div className="auth-form">
        <div className="form-container">
          <div className="form-header">
            <h2>Sign In To FASCO</h2>
            <p>Welcome back! Please enter your details.</p>
          </div>
          <div className="social-buttons">
            <button className="social-btn google-btn" onClick={() => handleSocialLogin("Google")}>
                    <FontAwesomeIcon icon={faGoogle} className="social-icon" />
              <span>Sign in with Google</span>
            </button>
            <button className="social-btn email-btn" onClick={() => handleSocialLogin("Email")}>
      <FontAwesomeIcon icon={faEnvelope} className="social-icon" />

              <span>Sign in with Email</span>
            </button>
          </div>
          <div className="divider">
            <span>OR</span>
          </div>
          <form className="auth-form-fields" onSubmit={handleSubmit}>
            <div className={`form-group ${errors.email ? "error" : ""}`}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} required />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className={`form-group ${errors.password ? "error" : ""}`}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleInputChange} required />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            <div className="form-options">
              <label className="checkbox-container">
                <input type="checkbox" id="remember" name="remember" checked={formData.remember} onChange={handleInputChange} />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a className="forgot-link" onClick={() => navigate("/forgot-password")}>Forgot password?</a>
            </div>
            <button type="submit" className={`submit-btn ${loading ? "loading" : ""}`} disabled={loading}>
              {loading ? "" : "Sign In"}
            </button>
          </form>
          <div className="form-footer">
            <p>
              Don't have an account? <a onClick={() => navigate("/signup")}>Sign up</a>
            </p>
          </div>
        </div>
        <div className="auth-footer">
          <p>FASCO Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


