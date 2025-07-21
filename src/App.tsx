import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

// Auth pages
import SignIn from "@/components/auth/SignIn";
import Register from "@/components/auth/Register";
import MobileRegister from "@/components/auth/MobileRegister";
import MobileOtpPage from "@/components/auth/MobileOtpPage";
import EmailRegister from "@/components/auth/EmailRegister";
import ForgotPassword from "@/components/auth/ForgotPassword";
import EmailOtpPage from "@/components/auth/EmailOtpPage";

// Pages
import HomePage from "./pages/Homepage";
import ExplorePage, { SearchResult } from "./pages/ExplorePage";
import NotFound from "./pages/NotFound";
import Shop from "./pages/ShopPage";
import Pitch from "./pages/Pitch";
import EduvidPage from "./pages/EduvidPage";
import MessagePage from "./pages/MessagePage";
import Notifications from "./pages/Notifications";
import Notification from "./components/notifications/Notifications";
import AddsManager from "./pages/AddsManager";
import ProfilePager from "./pages/ProfilePager";

// Components
import Category, { Filters } from "./components/Shops/Categories";
import ProductList from "./components/Shops/ProductList";
import ProductCartDetial from "./components/Shops/ProductCardDetails";
import Editprofile from "./components/profile/EditProfile";
import InvesterProfile from "./components/profile/InvesterProfile";
import InfoProfile from "./components/profile/InfoProfile";
import Subscription, {  Payment } from "./components/profile/Subscription";

// import CreateAddOptions from "./components/addManagement/CreateAddOptions";
import Awareness from "./components/addManagement/Awareness";
import Custom from "./components/addManagement/Custom";
import Visiblity from "./components/addManagement/Visiblity";

import SelectAccountType from "./components/accounts/AccountTypeSelection";
import InfoForm from "./components/accounts/Info";

import Settings from "./DarkTheme/SettingsPanel";

import Product from "./components/feed/Product/Product";
import NextPages from "./components/feed/Product/Next-Pages";
import PriceInvetory from "./components/feed/Product/price-Inventory";
import Shipping from "./components/feed/Product/Shipping";
import MoreDetial from "./components/feed/Product/MoreDetial";
import CreatePost from "./components/feed/CreatePost/CreatePost";
import CreatePitch from "./components/feed/CreatePitch";

import VoiceCall from "./components/chatMessage/VoiceCall";
import VideoCall from "./components/chatMessage/VideoCall";
// import Messages from "./components/chatMessage/messages";

import MostView from "./components/Shops/MostView";
import ShopProduct from "./components/Shops/ShopProducts";
import ShopProfile from "./components/Shops/ShopProfile";

// More Settings (Mobile)
import SwitchApp from "./components/MoreSettingMobile/SwitchApp";
import ActiveStatus from "./components/MoreSettingMobile/ActiveStatus";
import SavePosts from "./components/MoreSettingMobile/SavePosts";
import GreenVerification, { Address, ApplyVerificationGreen, Business, ImportExport } from "./components/MoreSettingMobile/GreenVerification/GreenVerification";
import BlueVerification, { ApplyVerification, IdentityVerification, PreviewSelfie, SelfyVerification, ShareProfessional, SocialMedia, TakeSelfy } from "./components/MoreSettingMobile/BlueVerification/BlueVerification";
import HideStory from "./components/MoreSettingMobile/HideStory";
import Blocked from "./components/MoreSettingMobile/Blocked";
import AdOperation from "./components/MoreSettingMobile/AdOperation";
import PrivacySetting, {StoryPrivacy } from "./components/MoreSettingMobile/PrivacySetting";
import DeletAccount from "./components/MoreSettingMobile/DeletAccount";
import Feedback from "./components/MoreSettingMobile/Feedback";
import HelpCenter from "./components/MoreSettingMobile/HelpCenter";
import ReportPro from "./components/MoreSettingMobile/ReportPro";
import HidePeople from "./components/MoreSettingMobile/HidePeople";

// Routes
import PrivateRoute from "./routes/PrivateRoute";
import { Filter } from "lucide-react";
import Wallet, { AddMoney, Receipt } from "./components/MoreSettingMobile/Wallet";
import ProfilePost from "./components/profile/ProfilePost";
import MediaUpload from "./components/addManagement/MediaUpload";


const appRouter = createBrowserRouter([
  { path: "/", element: <SignIn /> },
  { path: "/register", element: <Register /> },
  { path: "/mobileregister", element: <MobileRegister /> },
  { path: "/mobileotp", element: <MobileOtpPage /> },
  { path: "/emailregister", element: <EmailRegister /> },
  { path: "/forgetpassword", element: <ForgotPassword /> },
  { path: "/emailotp", element: <EmailOtpPage /> },
  { path: "/selectaccounttype", element: <SelectAccountType /> },
  { path: "/infoform", element: <InfoForm /> },

  // Private Routes
  { path: "/feed", element: <PrivateRoute><HomePage /></PrivateRoute> },
  { path: "/shop", element: <PrivateRoute><Shop /></PrivateRoute> },
  { path: "/pitch", element: <PrivateRoute><Pitch /></PrivateRoute> },
  { path: "/explore", element: <PrivateRoute><ExplorePage /></PrivateRoute> },
  { path: "/search-results", element: <PrivateRoute><SearchResult /></PrivateRoute> },
  { path: "/eduvid", element: <PrivateRoute><EduvidPage /></PrivateRoute> },
  { path: "/message", element: <PrivateRoute><MessagePage /></PrivateRoute> },
  // { path: "/messages", element: <PrivateRoute><Messages /></PrivateRoute> },
  { path: "/category", element: <PrivateRoute><Category /></PrivateRoute> },
  { path: "/notifications", element: <PrivateRoute><Notifications /></PrivateRoute> },
  { path: "/notification", element: <PrivateRoute><Notification /></PrivateRoute> },
  { path: "/adds", element: <PrivateRoute><AddsManager /></PrivateRoute> },
  // { path: "/createaddoptions", element: <PrivateRoute><CreateAddOptions /></PrivateRoute> },
  { path: "/products/:category", element: <PrivateRoute><ProductList /></PrivateRoute> },
  { path: "/productcart", element: <PrivateRoute><ProductCartDetial /></PrivateRoute> },
  { path: "/settings", element: <PrivateRoute><Settings /></PrivateRoute> },

  // Feed - Product flow
  { path: "/product", element: <PrivateRoute><Product /></PrivateRoute> },
  { path: "/next-page", element: <PrivateRoute><NextPages /></PrivateRoute> },
  { path: "/priceInvetory", element: <PrivateRoute><PriceInvetory /></PrivateRoute> },
  { path: "/shiping", element: <PrivateRoute><Shipping /></PrivateRoute> },
  { path: "/moredetial", element: <PrivateRoute><MoreDetial /></PrivateRoute> },

  // Ads
  // { path: "/advanced", element: <PrivateRoute><CreateAddOptions /></PrivateRoute> },
  { path: "/awareness", element: <PrivateRoute><Awareness /></PrivateRoute> },
  { path: "/custom", element: <PrivateRoute><Custom /></PrivateRoute> },
  { path: "/visibility", element: <PrivateRoute><Visiblity/></PrivateRoute> },
  { path: "/mediaupload", element: <PrivateRoute><MediaUpload/></PrivateRoute> },


  // Profile
  { path: "/profile", element: <PrivateRoute><ProfilePager /></PrivateRoute> },
  { path: "/editprofile", element: <PrivateRoute><Editprofile /></PrivateRoute> },
  { path: "/investerprofile", element: <PrivateRoute><InvesterProfile/></PrivateRoute> },
  { path: "/infoprofile", element: <PrivateRoute><InfoProfile /></PrivateRoute> },
  { path: "/subscription", element: <PrivateRoute><Subscription /></PrivateRoute> },

  // Calls
  { path: "/voicecall", element: <PrivateRoute><VoiceCall /></PrivateRoute> },
  { path: "/videocall", element: <PrivateRoute><VideoCall /></PrivateRoute> },

  // Shop extra
  { path: "/MostView", element: <PrivateRoute><MostView /></PrivateRoute> },
  { path: "/shopproduct", element: <PrivateRoute><ShopProduct /></PrivateRoute> },
  { path: "/shopprofile", element: <PrivateRoute><ShopProfile /></PrivateRoute> },

  // Post & Pitch
  { path: "/createPost", element: <PrivateRoute><CreatePost /></PrivateRoute> },
  { path: "/createpitch", element: <PrivateRoute><CreatePitch /></PrivateRoute> },

  // Mobile settings
  { path: "/switch", element: <PrivateRoute><SwitchApp /></PrivateRoute> },
  { path: "/active", element: <PrivateRoute><ActiveStatus /></PrivateRoute> },
  { path: "/save", element: <PrivateRoute><SavePosts /></PrivateRoute> },
  { path: "/green", element: <PrivateRoute><GreenVerification /></PrivateRoute> },
  { path: "/blue", element: <PrivateRoute><BlueVerification /></PrivateRoute> },
  { path: "/hide", element: <PrivateRoute><HideStory /></PrivateRoute> },
  { path: "/block", element: <PrivateRoute><Blocked /></PrivateRoute> },
  { path: "/operation", element: <PrivateRoute><AdOperation /></PrivateRoute> },
  // { path: "/billInfo", element: <PrivateRoute><Bills/></PrivateRoute> },
  // { path: "/manager", element: <PrivateRoute><Manager/></PrivateRoute> },
  // { path: "/bill", element: <PrivateRoute><BillInformation/></PrivateRoute> },
  { path: "/wallet", element: <PrivateRoute><Wallet/></PrivateRoute> },
  { path: "/delete", element: <PrivateRoute><DeletAccount /></PrivateRoute> },
  { path: "/feedback", element: <PrivateRoute><Feedback /></PrivateRoute> },
  { path: "/help", element: <PrivateRoute><HelpCenter /></PrivateRoute> },
  { path: "/report", element: <PrivateRoute><ReportPro /></PrivateRoute> },
  { path: "/hidepeople", element: <PrivateRoute><HidePeople /></PrivateRoute> },
  { path: "/filter", element: <PrivateRoute><Filters/></PrivateRoute> },
  { path: "/payment", element: <PrivateRoute><Payment/></PrivateRoute> },
  { path: "/selfiepreview", element: <PrivateRoute><PreviewSelfie/></PrivateRoute> },



// privacySetting
  { path: "/privacy", element: <PrivateRoute><PrivacySetting /></PrivateRoute> },
  { path: "/Storyprivacy", element: <PrivateRoute><StoryPrivacy/></PrivateRoute> },
  { path: "/receipts", element: <PrivateRoute><Receipt/></PrivateRoute> },
   { path:"/profile/post/:id", element:<PrivateRoute><ProfilePost/></PrivateRoute>},
   { path:"/addmoney", element:<PrivateRoute><AddMoney/></PrivateRoute>},

   




  // Blue Verification Steps
  // { path: "/identityverification", element: <PrivateRoute><IdentityVerification /></PrivateRoute> },
  // { path: "/applyverification", element: <PrivateRoute><ApplyVerification /></PrivateRoute> },
  // { path: "/selfyverification", element: <PrivateRoute><SelfyVerification /></PrivateRoute> },
  // { path: "/socialmedia", element: <PrivateRoute><SocialMedia /></PrivateRoute> },
  // { path: "/shareprofessional", element: <PrivateRoute><ShareProfessional /></PrivateRoute> },
  // { path: "/previewselfie", element: <PrivateRoute><PreviewSelfie /></PrivateRoute> },
  // { path: "/takeselfie", element: <PrivateRoute><TakeSelfy /></PrivateRoute> },

  // Green Verification Steps
  // { path: "/greenidentity", element: <PrivateRoute><ApplyVerificationGreen /></PrivateRoute> },
  // { path: "/address", element: <PrivateRoute><Address /></PrivateRoute> },
  // { path: "/business", element: <PrivateRoute><Business /></PrivateRoute> },
  // { path: "/importexport", element: <PrivateRoute><ImportExport /></PrivateRoute> },

  // Fallback
  { path: "/*", element: <NotFound /> },
]);

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <RouterProvider router={appRouter} />
      <Toaster />
    </div>
  );
}

export default App;
