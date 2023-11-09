import { createSignal } from "solid-js";

export default function Header() {
  const [darkMode, setDarkMode] = createSignal(false);

  const changeMode = () => {
    const root = document.querySelector('#root');
    const icon = document.querySelector('#dark-mode-icon');
    if (darkMode()) {
      root.classList.remove('dark');
      icon.innerText="dark_mode";
    } else {
      root.classList.add('dark');
      icon.innerText="light_mode";
    }
    setDarkMode(!darkMode())
  };

  return (
    <header class="shadow-lg flex flex-row justify-between py-4 mb-4 bg-gradient-to-br from-blue-chill-400 dark:from-blue-chill-900 to-blue-chill-300 dark:to-blue-chill-700">
      <p class="px-4 py-4  text-xl font-bold font-pacifico text-center text-blue-chill-700 dark:text-blue-chill-50">StayConnected</p>
      <p class="pr-4 flex items-center text-right text-6xl text-blue-chill-700 dark:text-blue-chill-50">
        <span id="dark-mode-icon" class="material-symbols-outlined cursor-pointer" onClick={() => changeMode()}>
          dark_mode
        </span>
        <span class="ml-4 material-symbols-outlined cursor-pointer">
          settings
        </span>
      </p>
    </header>
)
}
