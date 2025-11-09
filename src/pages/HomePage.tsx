// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const HomePage = () => {
  return (
    <div className="">
      {/* Navbar */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                to="/"
                className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                MyApp
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/signin">
                <Button variant="outline" className="cursor-pointer">
                  Sign In
                </Button>
              </Link>

              <Link to="/signup">
                <Button variant="outline" className="cursor-pointer">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HomePage;
