import { createSignal, createEffect, onCleanup } from "solid-js";
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

  const [position, setPosition] = createSignal(window.scrollY)
  const [, setVisible] = createSignal(true)

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
  <header class="navbar bg-base-100">
    <div class="flex-1">
      <A href="/">
        <p class="cursor-pointer py-4 text-xl font-bold font-pacifico text-center text-light-heading dark:text-dark-heading">
          StayConnected
        </p>
      </A>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><span id="dark-mode-icon"
              class="material-symbols-outlined block cursor-pointer transition-all ease-in-out duration-150 text-light-text dark:text-dark-text hover:text-light-pop dark:hover:text-dark-pop motion-reduce:transition-none"
              onClick={() => changeMode()}>
          dark_mode
        </span></li>
        <li>
          <details>
            <summary>
            <span class="ml-8 material-symbols-outlined cursor-pointer text-light-text dark:text-dark-text hover:text-light-pop dark:hover:text-dark-pop">
          settings
        </span>
            </summary>
            <ul class="p-2 bg-base-100">
              <li><a>Link 1</a></li>
              <li><a>Link 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </header>
)
}
