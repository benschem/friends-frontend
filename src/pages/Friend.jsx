import Legend from "../components/Legend"
import { createResource, Show, For } from "solid-js";
import { LoadingContacts, LoadingFriendShow } from "../components/Loading";
import ContactCard from "../components/ContactCard";
import { A, useParams } from "@solidjs/router";

const fetchContacts = async (id) => {
  const result = await fetch("http://127.0.0.1:3001/api/v1/people/" + id);
  return result.json();
};

export default function Friend() {
  const params = useParams();

  const [contacts] = createResource(params.id, fetchContacts);

  return (
    <div class="mx-4 grow">
      <A href="/friends">
        <button class="btn font-lato text-blue-chill-700 dark:text-blue-chill-50">
          Back
        </button>
      </A>

      <Show when={ contacts() } fallback={ <LoadingFriendShow /> }>
        <h1 class="p-8 text-center text-6xl font-bold font-lato text-light-text dark:text-dark-text">
          { contacts().data.name }
          <span class="pl-2 font-lato text-base font-light text-light-text dark:text-dark-text">
            ({ contacts().data.relationship })
          </span>
        </h1>
      </Show>

      <Legend />

      <h2 class="px-4 my-4 text-xl text-center font-lato font-bold text-light-accent dark:text-dark-accent">
        Contact history
      </h2>

      <ul class="rounded-2xl grid grid-rows gap-4">
        {/* <NewContact /> */}
        <Show when={ contacts() } fallback={ <LoadingContacts /> }>
          <For each={ contacts().data.contacts }>
            { (contact) => (
              <ContactCard contact={contact} />
            ) }
          </For>
        </Show>
      </ul>
    </div>
  );
}
