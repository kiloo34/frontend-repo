"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setUser } from "@/store/reducers";
import { auth } from "@/apis/firebase";
import { Button, TextField, Typography, Box } from "@mui/material";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);

            // dispatch(
            // setUser({
            // user: { uid: user.uid, email: user.email },
            // token: user.accessToken,
            // })
            // );

            router.push("/dashboard");
        } catch (err) {
            setError("Invalid email or password.");
        }
    };

    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 8 }}>
            <Typography variant="h4" mb={2}>
                Login
            </Typography>
            <form onSubmit={handleLogin}>
                <TextField
                    fullWidth
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                />
                {error && (
                    <Typography color="error" variant="body2" mt={1}>
                        {error}
                    </Typography>
                )}
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                </Button>
            </form>
        </Box>
    );
};

export default LoginForm;
