import { Link } from "react-router-dom";
import Theme from "@/components/Theme";

const NotFound = () => {
  return (
    <Theme viewTitle="404 Not Found">
      <div className="text-center mt-5">
        This page does not exist{" "}
        <p>
          <Link className="text-blue-500 underline" to="/listings">
            return
          </Link>
        </p>
      </div>
    </Theme>
  );
};

export default NotFound;
