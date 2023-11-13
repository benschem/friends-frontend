import { Show, createResource, For } from "solid-js";
import { LoadingFriends } from "../components/Loading";
import Legend from "../components/Legend";
import { A } from "@solidjs/router";
import Sort from "../components/Sort";
import Filter from "../components/Filter";
import FriendCard from "../components/FriendCard";

const fetchPeople = async () => {
  const response = await fetch("http://127.0.0.1:3001/api/v1/people");
  return response.json();
};

export default function Friends() {
  const [people] = createResource(fetchPeople);

  return (
    <div class="mx-4 grow">
      <h1 class="px-4 mb-8 text-6xl text-center font-lato font-bold text-light-text dark:text-dark-text">
        Your friends and family
      </h1>

      <Legend />

      <h2 class="px-4 mt-8 mb-8 text-2xl text-center font-lato font-bold text-light-accent dark:text-dark-accent">
        When's the last time you were in contact with them?
      </h2>

      <div class="mt-8 px-4 md:px-8 lg:px-16 xl:px-16 ">
        <Filter />
        <Sort />
      </div>

      <ul class="mt-8 grid grid-rows gap-4">
        <Show when={ people() } fallback={ <LoadingFriends /> } >
          <For each={ people().data }>
            { (person) => (
              <A href={"/friends/" + person.id }>
                <FriendCard person={person} />
              </A>
            )}
          </For>
        </Show>
      </ul>
    </div>
  );
}
