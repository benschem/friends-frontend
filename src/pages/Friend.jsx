import ContactItem from "../components/ContactItem";
import { createResource, Show, For } from "solid-js";
import { A, useParams } from "@solidjs/router";
import { LoadingContacts, LoadingFriendShow  } from "../components/Loading";
import NewContact from "../components/NewContact";

const fetchContacts = async (id) => {
  const result = await fetch("http://127.0.0.1:3001/api/v1/people/" + id);
  return result.json();
};

export default function Friend() {
  const params = useParams();

  const [contacts] = createResource(params.id, fetchContacts);

  return (
    <div class="mx-4 grow">
      <A href="/friends" class="ml-4 flex justify-start cursor-pointer font-lato text-blue-chill-700 dark:text-blue-chill-50">
        <span class="material-symbols-outlined ">
          arrow_back
        </span>
        Back to friends and family
      </A>

      <Show when={ contacts() } fallback={ <LoadingFriendShow /> }>
        <h1 class="p-8 text-center text-3xl font-pacifico text-blue-chill-700 dark:text-blue-chill-50">
          { contacts().data.name }
          <span class="pl-2 font-lato text-base font-light text-blue-chill-700 dark:text-blue-chill-50">
            ({ contacts().data.relationship })
          </span>
        </h1>
      </Show>

        <ul class="mx-4 rounded-2xl grid grid-rows gap-2">
          <NewContact />
          <Show when={ contacts() } fallback={ <LoadingContacts /> }>
            <For each={ contacts().data.contacts }>
              { (contact) => (
                <ContactItem contact={contact} />
              ) }
            </For>
          </Show>
        </ul>
    </div>
  );
}
