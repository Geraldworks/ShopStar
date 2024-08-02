import ProfileListingView from "./views/ProfileListingView";
import { Routes, Route } from "react-router-dom";
import ListingPage from "./views/ListingPage";
import ProfileView from "./views/ProfileView";
import SignupView from "./views/SignupView";
import SigninView from "./views/SigninView";
import Listings from "./views/Listings";
import NotFound from "./views/NotFound";
import Root from "./views/Root";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/listings/:id" element={<ListingPage />} />
      <Route path="/profile" element={<ProfileView />} />
      <Route path="/profile/listings" element={<ProfileView />} />
      <Route path="/profile/listings/:id" element={<ProfileListingView />} />
      <Route path="/signin" element={<SigninView />} />
      <Route path="/signup" element={<SignupView />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
