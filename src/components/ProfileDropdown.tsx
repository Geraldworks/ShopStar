import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { UserRoundPen } from "lucide-react";
import useAuth from "./hooks/useAuth";

const ProfileDropdown = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("shopstar-token");
    window.location.reload();
  };

  const handleLogin = () => {
    navigate("/signin");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserRoundPen />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link to="/">
          <DropdownMenuItem className="hover:cursor-pointer">Home</DropdownMenuItem>
        </Link>
        <Link to="/listings">
          <DropdownMenuItem className="hover:cursor-pointer">View Listings</DropdownMenuItem>
        </Link>
        {isAuthenticated ? (
          <div>
            <Link to="/profile">
              <DropdownMenuItem className="hover:cursor-pointer">Profile</DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="hover:cursor-pointer" onClick={handleLogout}>
              Sign Out
            </DropdownMenuItem>
          </div>
        ) : (
          <DropdownMenuItem className="hover:cursor-pointer" onClick={handleLogin}>
            Sign In
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
