import ProfileListingPage from "./components/profile/ProfileListingPage";
import ListingPage from "./components/listings/ListingPage";
import { Routes, Route } from "react-router-dom";
import ProfileView from "./views/ProfileView";
import SignupView from "./views/SignupView";
import SigninView from "./views/SigninView";
import Listings from "./views/Listings";
import Root from "./views/Root";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/listings/:id" element={<ListingPage />} />
      <Route path="/profile" element={<ProfileView />} />
      <Route path="/profile/listings" element={<ProfileView />} />
      <Route path="/profile/listings/:id" element={<ProfileListingPage />} />
      <Route path="/signin" element={<SigninView />} />
      <Route path="/signup" element={<SignupView />} />
    </Routes>
  );
};

export default App;
