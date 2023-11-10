import { createSignal, createEffect, onCleanup } from "solid-js";
import { A } from "@solidjs/router";

export default function Header() {
  const [darkMode, setDarkMode] = createSignal(false);

  const changeMode = () => {
    const root = document.querySelector('#root');
    const icon = document.querySelector('#dark-mode-icon');
    const body = document.querySelector('body');
    if (darkMode()) {
      root.classList.remove('dark');
      body.style.background = "#f2f9f9"
      icon.innerText="dark_mode";
} else {
      root.classList.add('dark');
      body.style.background = "#1a2c32"
      icon.innerText="light_mode";
    }
    setDarkMode(!darkMode())
  };

  const [position, setPosition] = createSignal(window.scrollY)
  const [visible, setVisible] = createSignal(true)

  createEffect(() => {
    const handleScroll = () => {
      const moving = window.scrollY;

      setVisible(position() > moving);
      setPosition(moving);
    };

    window.addEventListener("scroll", handleScroll);

    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });

  return (
    <header class={ `mb-4 p-4 h-24 w-full ${ visible() ? "top-0" : "-top-24" } transition-all duration-800 delay-400 ease-in-out sticky flex shadow justify-between bg-gradient-to-br from-blue-chill-400 dark:from-blue-chill-900 to-blue-chill-300 dark:to-blue-chill-700` }>
      <A href="/">
        <p class="cursor-pointer py-4 text-xl font-bold font-pacifico text-center text-blue-chill-700 dark:text-blue-chill-50">
          StayConnected
        </p>
      </A>
      <p class="mr-4 flex items-center text-right text-6xl text-blue-chill-700 dark:text-blue-chill-50">
        <span id="dark-mode-icon" class="material-symbols-outlined cursor-pointer" onClick={() => changeMode()}>
          dark_mode
        </span>
        <span class="ml-8 material-symbols-outlined cursor-pointer">
          settings
        </span>
      </p>
    </header>
)
}
