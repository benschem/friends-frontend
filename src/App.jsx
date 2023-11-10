import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import Header from "./components/Header";
import Footer from "./components/Footer";
const Home = lazy(() => import("./pages/Home"));
const Friends = lazy(() => import("./pages/Friends"));
const Friend = lazy(() => import("./pages/Friend"));

export default function App() {
  return (
    <>
      <Header />
      <div class="m-auto flex flex-col grow w-full md:w-3/4 lg:w-1/2 min-h-screen">
        {/* <nav>
          <A href="/">Home</A>
        </nav> */}
          <Routes>
              <Route path="/" component={Home} />
              <Route path="/friends" component={Friends} />
              <Route path="/friends/:id" component={Friend} />
          </Routes>
        <Footer />
      </div>
    </>
  );
}
