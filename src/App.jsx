import { onMount } from "solid-js";
// import { Routes, Route, A } from "@solidjs/router";
// const Header = lazy(() => import("./components/Header"));
// const Footer = lazy(() => import("./components/Footer"));
// const Login  = lazy(() => import("./pages/Login"));
// const Friends  = lazy(() => import("./pages/Friends"));
// const Friend  = lazy(() => import("./pages/Friend"));
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Friends from "./pages/Friends";
import Friend from "./pages/Friend";

export default function App() {
  onMount(() => {
    console.log("Mounted")
    document.getElementById('root').classList.add("bg-gradient-to-br", "from-blue-chill-300", "dark:from-blue-chill-950", "to-blue-chill-100", "dark:to-blue-chill-700")
  });

  return (
    <>
      <Header />
      {/* <nav> */}
        {/* <A href="/friends">About</A> */}
        {/* <A href="/">Home</A> */}
      {/* </nav> */}
      <Friends />
      {/* <Routes>
        <Route path="/" component={Login} />
        <Route path="/friends" component={Friends} />
        <Route path="/friends/:id" component={Friend} />
        <Route
          path="/about"
          element={<div>This site was made with Solid</div>}
        />
      </Routes> */}
      <Footer />
    </>
  );
}
