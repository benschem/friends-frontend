import FriendItem from "../components/lists/friends/FriendItem";
import ListItem from "../components/lists/contacts/ListItem";
import { createSignal, Show, For } from "solid-js";

export default function Friend() {
  const [friendName, setFriendName] = createSignal(null);
  const [friendRelationship, setFriendRelationship] = createSignal(null);
  const [contacts, setContacts] = createSignal(null);

  const fetchContacts = async () => {
    const result = await fetch(`http://127.0.0.1:3001/api/v1/people/44}`);
    return result.json();
  };

  fetchContacts().then((data) => {
    console.log(data)
    setFriendName(data.data.name);
    setFriendRelationship(data.data.relationship);
    setContacts(data.data.contacts);
  });

  return (
    <Show when={ friendName() && friendRelationship() && contacts() } fallback={ <p class="m-4 ">Loading...</p>} >
      <FriendItem name={ friendName() } relationship={ friendRelationship() } />
      <ul class="mt-2 grid grid-rows divide-y">
        <For each={ contacts() }>
          { (contact) => (
            <ListItem contact={contact} />
          ) }
        </For>
      </ul>
    </Show>
  );
}
