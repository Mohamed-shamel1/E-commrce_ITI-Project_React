import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import "../../styles/auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignupPage = () => {
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(AuthContext);
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "", confirmPassword: "", terms: false });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    else if (formData.fullName.trim().length < 2) newErrors.fullName = "Full name must be at least 2 characters";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email address";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) newErrors.password = "Password must contain uppercase, lowercase, and number";
    if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.terms) newErrors.terms = "You must agree to the terms and conditions";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Account created successfully! (This is a demo)");
      navigate("/login");
    } catch (err) {
      alert("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    alert(`${provider} signup would be implemented here`);
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
            <h2>Sign Up To FASCO</h2>
            <p>Create your account to get started.</p>
          </div>
          <div className="social-buttons">
            <button className="social-btn google-btn" onClick={() => handleSocialLogin("Google")}>
                    <FontAwesomeIcon icon={faGoogle} className="social-icon" />
              <span>Sign up with Google</span>
            </button>
            <button className="social-btn email-btn" onClick={() => handleSocialLogin("Email")}>
      <FontAwesomeIcon icon={faEnvelope} className="social-icon" />

              <span>Sign up with Email</span>
            </button>
          </div>
          <div className="divider">
            <span>OR</span>
          </div>
          <form className="auth-form-fields" onSubmit={handleSubmit}>
            <div className={`form-group ${errors.fullName ? "error" : ""}`}>
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleInputChange} required />
              {errors.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>
            <div className={`form-group ${errors.email ? "error" : ""}`}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} required />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className={`form-group ${errors.password ? "error" : ""}`}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Create a password" value={formData.password} onChange={handleInputChange} required />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            <div className={`form-group ${errors.confirmPassword ? "error" : ""}`}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleInputChange} required />
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>
            <div className="form-options">
              <label className="checkbox-container">
                <input type="checkbox" id="terms" name="terms" checked={formData.terms} onChange={handleInputChange} required />
                <span className="checkmark"></span>
                I agree to the <a className="terms-link" href="#">Terms of Service</a> and <a className="terms-link" href="#">Privacy Policy</a>
              </label>
              {errors.terms && <span className="error-message" style={{ display: "block", marginTop: "10px" }}>{errors.terms}</span>}
            </div>
            <button type="submit" className={`submit-btn ${loading ? "loading" : ""}`} disabled={loading}>
              {loading ? "" : "Create Account"}
            </button>
          </form>
          <div className="form-footer">
            <p>
              Already have an account? <a onClick={() => navigate("/login")}>Sign in</a>
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

export default SignupPage;


