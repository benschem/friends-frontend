import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import Header from "./components/Header";
import Footer from "./components/Footer";
const Home = lazy(() => import("./pages/Home"));
const Friends = lazy(() => import("./pages/Friends"));
const Friend = lazy(() => import("./pages/Friend"));

export default function App() {
  return (
    <div class="bg-gradient-to-br from-blue-chill-300 dark:from-blue-chill-950 to-blue-chill-100 dark:to-blue-chill-700">
      <Header />
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
  );
}
