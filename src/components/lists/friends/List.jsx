import Filter from "./Filter";
import Sort from "./Sort";
import ListItem from "./ListItem";
import { For } from "solid-js";

export default function List(props) {
  return (
    <div class="mx-4">
      <div class="px-2">
        <Filter />
        <Sort />
      </div>

      <ul class="mt-4 grid grid-rows gap-2">
        <For each={props.people}>
          { (person) => (
            <ListItem person={person} />
          ) }
        </For>
      </ul>
    </div>
  )
}
