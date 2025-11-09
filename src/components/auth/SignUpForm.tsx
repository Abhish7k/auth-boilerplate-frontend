import React, { useState, type FormEvent } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { LoaderCircle } from "lucide-react";

const SignUpForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:");
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>

        <CardDescription>
          Enter your details below to create your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* name */}
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>

            <Input
              id="fullName"
              type="text"
              placeholder="Name"
              className="w-full"
            />
          </div>

          {/* email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>

            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="w-full"
            />
          </div>

          {/* password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>

            <Input
              id="password"
              type="password"
              placeholder="*******"
              className="w-full"
            />

            <p className="text-xs text-slate-500 pl-1">
              must be at least 8 characters
            </p>
          </div>

          {/* confirm password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>

            <Input
              id="confirmPassword"
              type="password"
              placeholder="*******"
              className="w-full"
            />
          </div>

          <Button
            type="submit"
            className="w-full cursor-pointer mt-5"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <LoaderCircle className="animate-spin mr-2" />
                Creating your account...
              </span>
            ) : (
              <span>Create Account</span>
            )}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="pt-2 flex justify-center">
        <div className="">
          Already have an account ?
          <Link
            to="/signin"
            className="pl-1 text-blue-600 hover:underline transition-all"
          >
            Sign In
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignUpForm;
