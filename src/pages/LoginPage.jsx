import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user + " Logged In");
      return userCredential.user;
    } catch (error) {
      console.error("Error signing in with email:", error.message);
      throw error;
    }
  };
  return (
    <Card className="p-8 max-w-md w-full mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
      <form className="space-y-4" onSubmit={signIn}>
        <div>
          <Label htmlFor="email" className="block text-gray-700">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="password" className="block text-gray-700">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full mt-6">
          Sign In
        </Button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-500">
        Don&apos;t have an account?{" "}
        <a href="/register" className="text-blue-500">
          Sign Up
        </a>
      </p>
    </Card>
  );
}

export default LoginPage;
