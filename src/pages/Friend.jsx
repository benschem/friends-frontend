import ContactItem from "../components/ContactItem";
import { createResource, Show, For } from "solid-js";
import { A, useParams } from "@solidjs/router";

const fetchContacts = async (id) => {
  const result = await fetch("http://127.0.0.1:3001/api/v1/people/" + id);
  return result.json();
};

export default function Friend() {
  const params = useParams();

  const [contacts] = createResource(params.id, fetchContacts);

  return (
    <>
      <A href="/friends" class="ml-4 flex justify-start cursor-pointer font-roboto text-blue-chill-700 dark:text-blue-chill-50">
        <span class="material-symbols-outlined ">
          arrow_back
        </span>
        Back to friends and family
      </A>
      <Show when={ contacts() } fallback={ <p class="m-4 ">Loading...</p>} >

        <h1 class="p-8 text-center text-3xl font-pacifico text-blue-chill-700 dark:text-blue-chill-50">
          { contacts().data.name }
          <span class="pl-2 font-roboto text-base font-light text-blue-chill-700 dark:text-blue-chill-50">
            ({ contacts().data.relationship })
          </span>
        </h1>

        <ul class="mx-4 rounded-2xl grid grid-rows gap-2 divide-y divide-blue-chill-200 dark:divide-blue-chill-800">
          <For each={ contacts().data.contacts }>
            { (contact) => (
              <ContactItem contact={contact} />
            ) }
          </For>
        </ul>
      </Show>
    </>
  );
}
