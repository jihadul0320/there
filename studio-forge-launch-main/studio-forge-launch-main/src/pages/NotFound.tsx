
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-24 px-4">
        <div className="text-center max-w-lg">
          <h1 className="heading-xl mb-6">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="btn-primary">
            <Link to="/">
              <ArrowLeft size={18} className="mr-2" /> Back to Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
