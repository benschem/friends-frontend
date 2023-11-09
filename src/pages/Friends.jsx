import { Show, createResource, For } from "solid-js";
import { A } from "@solidjs/router";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import FriendItem from "../components/FriendItem";
import Legend from "../components/Legend";

const fetchPeople = async () => {
  const response = await fetch("http://127.0.0.1:3001/api/v1/people");
  return response.json();
};

export default function Friends() {
  const [people] = createResource(fetchPeople);

  return (
    <>
      <Show when={ people() } fallback={ <p class="m-4">Loading...</p>} >
        <div class="mx-4">

          <h1 class="mb-8 text-3xl text-center font-pacifico text-blue-chill-700 dark:text-blue-chill-50">Your friends and family</h1>

          <div class="px-2">
            <Filter />
            <Sort />
          </div>

          <ul class="mt-4 grid grid-rows gap-2">
            <Legend />
            <For each={ people().data }>
              { (person) => (
                <A href={"/friends/" + person.id }>
                  <FriendItem person={person} />
                </A>
              ) }
            </For>
          </ul>
        </div>
      </Show>
      <p>{console.log(people(), people.loading)}</p>
    </>
  );
}
