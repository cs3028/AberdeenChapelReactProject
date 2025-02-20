import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "./ui/Card";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Lock, Mail } from "lucide-react";
import Footer from './ui/Footer';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5001/dashboard", { credentials: "include" })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    navigate("/dashboard"); // redirect if authenticated
                }
            })
        .catch((err) => console.error("Authentication check failed", err));
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("Logging in with", email, password); // Debug log
        try {
            const response = await fetch("http://localhost:5001/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            console.log("Response received:", response); // Debug log

            const data = await response.json();
            console.log("Response data:", data); // Debug log

            if (data.success) {
                alert("Login successful!");
                navigate("/dashboard"); // Redirect after successful login
            } else {
                alert("Invalid email or password");
            }
        } catch (err) {
            console.error("Login request failed:", err);
            alert("Server error, please try again later.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-md p-6 shadow-lg rounded-2xl">
                <CardContent>
                    <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="flex items-center border rounded-lg p-2">
                            <Mail className="mr-2 text-gray-500" />
                            <Input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="flex-1 border-none focus:ring-0"
                            />
                        </div>
                        <div className="flex items-center border rounded-lg p-2">
                            <Lock className="mr-2 text-gray-500" />
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="flex-1 border-none focus:ring-0"
                            />
                        </div>
                        <Button type="submit" className="w-full">Login</Button>
                    </form>
                </CardContent>
            </Card>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default LoginPage;
