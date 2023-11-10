import { Show, createSignal } from "solid-js";

export default function Legend() {
  const [legendHidden, setLegendHidden] = createSignal(false);

  return (
    <Show when={ !legendHidden() }>
      <li class={`${ legendHidden() ? "hidden" : "visible" } mb-2 grow-0 items-center rounded-xl shadow font-roboto bg-blue-chill-200 dark:bg-blue-chill-800 divide-y divide-blue-chill-300 dark:divide-blue-chill-900`}>

        <div class="p-4 w-full flex flex-row justify-between items-center">
          <h3 class="font-bold text-blue-chill-700 dark:text-blue-chill-50">
            Contact types
          </h3>
          <span class="cursor-pointer material-symbols-outlined text-blue-chill-700 dark:text-blue-chill-50"
                onClick={() => setLegendHidden(true)}>
                close
          </span>
        </div>

        <div class="grid grid-cols-2 items-center divide-x divide-blue-chill-300 dark:divide-blue-chill-900">

          <div class="grid grid-rows-2 divide-y divide-blue-chill-300 dark:divide-blue-chill-900">

            <div class="p-4 flex flex-row justify-between">
              <span class="material-symbols-outlined text-blue-chill-700 dark:text-blue-chill-50">
                groups
              </span>
              <p class="ml-4 grow text-base text-blue-chill-700 dark:text-blue-chill-50">
                In a group
              </p>
            </div>

            <div class="p-4 flex flex-row justify-between">
              <span class="material-symbols-outlined text-blue-chill-700 dark:text-blue-chill-50">
                person
              </span>
              <p class="ml-4 grow text-base text-blue-chill-700 dark:text-blue-chill-50">
                Individually
              </p>
            </div>

          </div>

          <div class="grid grid-rows-2 divide-y divide-blue-chill-300 dark:divide-blue-chill-900">

            <div class="p-4 flex flex-row justify-between">
              <span class="material-symbols-outlined text-blue-chill-700 dark:text-blue-chill-50">
                handshake
              </span>
              <p class="ml-4 grow text-base text-blue-chill-700 dark:text-blue-chill-50">
                In person
              </p>
            </div>

            <div class="p-4 flex flex-row justify-between grow">
              <span class="material-symbols-outlined text-blue-chill-700 dark:text-blue-chill-50">
              smartphone
              </span>
              <p class="ml-4 grow text-base text-blue-chill-700 dark:text-blue-chill-50">
                On a device
              </p>
            </div>

          </div>

        </div>
      </li>
    </Show>
  )
}
