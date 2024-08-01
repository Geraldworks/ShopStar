import { buttonVariants } from "@/components/ui/button";
import BrandLabel from "@/components/BrandLabel";
import { Link } from "react-router-dom";

/*
TODO

1. When a user is logged in and forces itself to the root route, make sure to keep all the credentials in local storage

*/

const Root = () => {
  //   const handleClickLogin = () => {
  //     // go to the login page
  //   };
  return (
    <div>
      <BrandLabel />
      <div className="flex flex-col items-center space-y-5 mt-5">
        <div className="text-xl">Welcome to ShopStar!</div>
        <div>
          <Link className={buttonVariants({ variant: "outline" })} to="/listings">
            View Listings
          </Link>
          <Link className={buttonVariants({ variant: "outline" })} to="/signin">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Root;
