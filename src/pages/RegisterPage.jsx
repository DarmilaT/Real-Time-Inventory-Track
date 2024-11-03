import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function RegisterPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  console.log(auth?.currentUser?.email);
  const signUp = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed up:", user);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card className="p-8 max-w-md w-full mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
      <form className="space-y-4" onSubmit={signUp}>
        <div>
          <Label htmlFor="email" className="block text-gray-700">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full mt-1"
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
            className="w-full mt-1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full mt-6">
          Sign Up
        </Button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-500">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500">
          Sign In
        </a>
      </p>
    </Card>
  );
}

export default RegisterPage;
