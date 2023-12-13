import { createSignal } from "solid-js";
import { A } from "@solidjs/router";

export default function Header() {
  const [darkMode, setDarkMode] = createSignal(false);
  const [darkBgColor, lightBgColor] = ["#fef4f2", "#3D405B"]

  const changeMode = () => {
    const root = document.querySelector('#root');
    const icon = document.querySelector('#dark-mode-icon');
    const body = document.querySelector('body');
    if (darkMode()) {
      root.classList.remove('dark');
      body.style.background = darkBgColor
      icon.innerText="dark_mode";
    } else {
      root.classList.add('dark');
      body.style.background = lightBgColor
      icon.innerText="light_mode";
    }
    setDarkMode(!darkMode())
  };



  return (
  <header class="flex justify-between p-4 bg-base-100">
    <A href="/">
      <p class="px-2 cursor-pointer text-xl font-bold font-pacifico text-center text-light-heading dark:text-dark-heading">
        StayConnected
      </p>
    </A>

    <div class="">
      <span id="dark-mode-icon"
            class="px-2 material-symbols-outlined cursor-pointer transition-all ease-in-out duration-150 text-light-text dark:text-dark-text hover:text-light-pop dark:hover:text-dark-pop motion-reduce:transition-none"
            onClick={() => changeMode()}>
        dark_mode
      </span>

      <span class="px-2 material-symbols-outlined cursor-pointer text-light-text dark:text-dark-text hover:text-light-pop dark:hover:text-dark-pop">
        settings
      </span>
    </div>
  </header>
)
}
