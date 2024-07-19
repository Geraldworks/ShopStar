import { buttonVariants } from "@/components/ui/button";
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
      <div>this is the root page</div>
      <div>
        <Link className={buttonVariants({ variant: "outline" })} to="/products">
          Check Out
        </Link>
        <Link className={buttonVariants({ variant: "outline" })} to="/signin">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Root;
