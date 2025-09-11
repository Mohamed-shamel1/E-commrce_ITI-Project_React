import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import "../../styles/auth.css";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (successMessage) setSuccessMessage("");
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email address";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccessMessage("Password reset link has been sent to your email address.");
      setFormData({ email: "" });
    } catch {
      setErrors({ email: "Failed to send reset email. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    alert(`${provider} login would redirect to login page`);
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-image">
        <div className="image-overlay">
          <div className="brand-logo">
            <h1>EPROVA</h1>
          </div>
        </div>
      </div>
      <div className="auth-form">
        <div className="form-container">
          <div className="form-header">
            <h2>Reset Your Password</h2>
            <p>Enter your email address and we'll send you a link to reset your password.</p>
          </div>
          <div className="social-buttons">
            <button className="social-btn google-btn" onClick={() => handleSocialLogin("Google")}>
              <i className="fab fa-google social-icon"></i>
              <span>Sign in with Google</span>
            </button>
            <button className="social-btn email-btn" onClick={() => handleSocialLogin("Email")}>
              <i className="fas fa-envelope social-icon"></i>
              <span>Sign in with Email</span>
            </button>
          </div>
          <div className="divider">
            <span>OR</span>
          </div>
          {successMessage && <div className="success-message">{successMessage}</div>}
          <form className="auth-form-fields" onSubmit={handleSubmit}>
            <div className={`form-group ${errors.email ? "error" : ""}`}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleInputChange} required />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <button type="submit" className={`submit-btn ${loading ? "loading" : ""}`} disabled={loading}>
              {loading ? "" : "Send Reset Link"}
            </button>
          </form>
          <div className="form-footer">
            <p>
              Remember your password? <a onClick={() => navigate("/login")}>Back to Login</a>
            </p>
          </div>
        </div>
        <div className="auth-footer">
          <p>EPROVA Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;


