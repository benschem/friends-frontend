import { Show, createResource, For } from "solid-js";
import { A } from "@solidjs/router";
import { LoadingFriends } from "../components/Loading";
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
    <div class="mx-4 grow">
      <h1 class="mb-8 text-3xl text-center font-pacifico text-light-text dark:text-dark-text">
        Your friends and family
      </h1>

      <div class="px-4 md:px-8 lg:px-16 xl:px-16 ">
        <Filter />
        <Sort />
      </div>

      <ul class="mt-8 grid grid-rows gap-4">
        <Legend />
        <Show when={ people() } fallback={ <LoadingFriends /> } >
          <For each={ people().data }>
            { (person) => (
              <A href={"/friends/" + person.id }>
                <FriendItem person={person} />
              </A>
            ) }
          </For>
        </Show>
      </ul>
    </div>
  );
}
