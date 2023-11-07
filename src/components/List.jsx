import Filter from "./Filter";
import Sort from "./Sort";
import FriendListItem from "./FriendListItem";
import { createSignal, onCleanup, Show, For } from "solid-js";

const fetchPeople = async () => {
  const result = await fetch("http://127.0.0.1:3001/api/v1/people");
  return result.json();
};

export default function List() {

  const [people, setPeople] = createSignal(null);

  fetchPeople().then((data) => {
    console.log(data);
    setPeople(data.data);
  });

  // Optional cleanup when the component unmounts
  onCleanup(() => {
    // Add cleanup logic here if needed
  });

  return (
    <Show when={ people() } fallback={ <p>Loading...</p>} >
      <div class="mx-4">
        <div class="p-4 rounded-xl shadow bg-blue-chill-700">
          <Filter />
          <Sort />
        </div>

        <ul class="mt-2 grid grid-rows gap-2">
          <For each={people()}>
            { (person) => (
              <FriendListItem person={person} />
            ) }
          </For>
        </ul>
      </div>
    </Show>
  )
}
