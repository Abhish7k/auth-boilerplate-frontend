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
import { LoaderCircle } from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignInForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("logged in");
    } catch (error) {
      console.log("Sign in error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>

        <CardDescription>
          Enter your credentials below to login to your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="">
              Email
            </Label>

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
              placeholder="********"
              className="w-full"
            />
          </div>

          {/* submit button */}
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <LoaderCircle className="animate-spin" />
                Signing In...
              </span>
            ) : (
              "Sign In"
            )}
          </Button>

          {/* divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200" />
            </div>

            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* social logins */}
          <div className="grid grid-cols-2 gap-5">
            <Button
              className="cursor-pointer"
              variant="outline"
              disabled={isLoading}
            >
              <FaGoogle />
              Google
            </Button>

            <Button
              className="cursor-pointer"
              variant="outline"
              disabled={isLoading}
            >
              <FaGithub />
              Github
            </Button>
          </div>
        </form>
      </CardContent>

      <CardFooter className="pt-2 flex justify-center">
        <p className="text-sm text-slate-600">
          Don't have an account ?{" "}
          <Link
            to="/signup"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignInForm;
