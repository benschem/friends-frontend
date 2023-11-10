import { Show, createSignal, For } from "solid-js";

export function LegendItems(props) {
  return (
    <div class="flex p-2">
      <span class={`material-symbols-outlined text-right ${props.ideal ? "text-light-accent dark:text-dark-accent" : "text-light-highlight dark:text-dark-highlight"}`}>
        { props.icon }
      </span>
      <p class="ml-4 text-base text-left text-light-text dark:text-dark-text">
        { props.description }
      </p>
    </div>
  )
}

export default function Legend() {
  const [legendHidden, setLegendHidden] = createSignal(false);
  const icons = [
    { description: "Individually", name: "person", ideal: true },
    { description: "In a group", name: "groups", ideal: false },
    { description: "In person", name: "handshake", ideal: true },
    { description: "On a device", name: "smartphone", ideal: false },
  ]

  return (
    <Show when={ !legendHidden() }>
      <li class={`${ legendHidden() ? "hidden" : "visible" } items-center rounded-xl shadow-sm font-lato border border-light-pop dark:border-dark-pop `}>

        <div class="px-4 pt-4 w-full flex flex-row justify-between items-center">
          <h3 class="font-bold text-light-heading dark:text-dark-heading">
            Contact types
          </h3>
          <span class="cursor-pointer material-symbols-outlined text-light-text dark:text-dark-text"
                onClick={() => setLegendHidden(true)}>
                close
          </span>
        </div>

        <div class="p-4 flex flex-col md:flex-row justify-between">
          <For each={ icons }>
            { (icon) => (
              <LegendItems icon={icon.name} description={icon.description} ideal={icon.ideal}/>
            ) }
          </For>
        </div>
      </li>
    </Show>
  )
}
