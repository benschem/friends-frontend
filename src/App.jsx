import { onMount } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Friends from "./pages/Friends";

export default function App() {
  onMount(() => {
    console.log("App Mounted")
  });

  return (
    <div class="bg-gradient-to-br from-blue-chill-300 dark:from-blue-chill-950 to-blue-chill-100 dark:to-blue-chill-700">
      <Header />
      {/* <nav>
        <A href="/">Home</A>
      </nav> */}
      <Routes>
        <Route path="/" component={Friends} />
      </Routes>
      <Footer />
    </div>
  );
}
