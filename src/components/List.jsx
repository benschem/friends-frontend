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
    <Show when={people()} fallback={<p>Loading...</p>}>
      <div class="m-2 p-2 ">
        <div class="flex flex-row gap-2">
          <label for="filter">Filter by:</label>

          <select name="filter" id="filter" multiple size="1" class="px-4 grow">
            <option value="all" selected>All</option>
            <optgroup label="Person">
              <option value="friends">Friends</option>
              <option value="family">Family</option>
            </optgroup>
            <optgroup label="Contact type">
              <option value="in-person">In person</option>
              <option value="call">Call</option>
              <option value="message">Message</option>
            </optgroup>
            <optgroup label="Contact type">
              <option value="solo">Solo</option>
              <option value="group">In a group</option>
            </optgroup>
            <optgroup label="Last contacted">
              <option value="today">Today</option>
              <option value="week">Last week</option>
              <option value="month">Last month</option>
              <option value="year">Last year</option>
            </optgroup>
            <optgroup label="Initiated by">
              <option value="you">You</option>
              <option value="them">Them</option>
            </optgroup>
          </select>

          <p class="cursor-pointer underline">show</p>
        </div>


        <div class="mt-2 flex flex-row gap-2">
          <label for="sort" class="">Sort by:</label>
          <select name="sort" id="sort" class="px-2 grow">
            <option value="most-recent">Most recently contacted</option>
            <option value="least-recent">Least recently contacted</option>
            <option value="name">Name</option>
          </select>
        </div>

        <ul class="mt-2 grid grid-rows gap-2">
          <For each={people()}>
            {(person) => (
              <FriendListItem person={person} />
            )}
          </For>
        </ul>
      </div>
    </Show>
  )
}
