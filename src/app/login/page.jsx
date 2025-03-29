'use client';
import { useState } from "react";
import Link from "next/link";
import "../style.css";


export default function Login() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setError("");
        alert("Signup Successful!");
    };

    return (
        <div>




            <section className="auth-section signup">

                <div className="container">

                    <div className="auth-row">


                        <div className="auth-left">

                            <img src="../images/logo.svg" className="logo" alt="Stacklens Logo" />

                            <h1>Create your account</h1>

                            <form onSubmit={handleSubmit} className="auth-form">
                                <label className="form-group">
                                    <span>Full Name</span>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <label className="form-group">
                                    <span>Email</span>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <label className="form-group">
                                    <span>Password</span>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <label className="form-group">
                                    <span>Confirm Password</span>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                {error && <p className="text-red-500 text-sm">{error}</p>}
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Sign Up
                                </button>

                                <div className="alternate-auth">
                                    Already have an account? <Link href="/login">Login</Link>
                                </div>

                            </form>
                        </div>




                        <div className="auth-right">

                            <div className="tech-logo-animated-box">
                                <div className="col-first">
                                    <img src="../images/animated-logo-group-1.png" alt="" />
                                    <img src="../images/animated-logo-group-2.png" alt="" />
                                </div>
                                <div className="col-second">
                                    <img src="../images/animated-logo-group-3.png" alt="" />
                                    <img src="../images/animated-logo-group-1.png" alt="" />
                                </div>
                                <div className="col-third">
                                    <img src="../images/animated-logo-group-2.png" alt="" />
                                    <img src="../images/animated-logo-group-3.png" alt="" />
                                </div>
                            </div>

                        </div>



                    </div>

                </div>

            </section>

        </div>

    );
}
