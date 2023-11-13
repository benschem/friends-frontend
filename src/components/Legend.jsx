import { Show, createSignal, For } from "solid-js";
import Icon from "./Icon";

export default function Legend() {
  const [legendHidden, setLegendHidden] = createSignal(false);
  const legend = [
    { description: "Individually", icon: "person", ideal: true },
    { description: "In a group", icon: "groups", ideal: false },
    { description: "In person", icon: "handshake", ideal: true },
    { description: "On a device", icon: "smartphone", ideal: false },
  ]

  return (
    <Show when={ !legendHidden() }>
      <div class={`${ legendHidden() ? "hidden" : "visible" } items-center rounded-xl shadow-lg font-lato border border-light-pop dark:border-dark-pop divide-y divide-light-pop dark:divide-dark-pop`}>

        <div class="p-4 w-full flex flex-row justify-between items-center">
          <h3 class="text-lg text-light-pop dark:text-dark-pop">
          The different types of contact
          </h3>
          <span class="cursor-pointer material-symbols-outlined text-light-pop dark:text-dark-pop"
                onClick={() => setLegendHidden(true)}>
                close
          </span>
        </div>

        <For each={ legend }>
          { (legendItem) => (
            <div class="p-4 flex flex- justify-left">
                <Icon icon={legendItem.icon} ideal={legendItem.ideal}/>
                <p class="ml-4">{ legendItem.description }</p>
            </div>
          ) }
        </For>
      </div>
    </Show>
  )
}
