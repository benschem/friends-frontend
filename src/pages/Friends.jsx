import List from "../components/lists/friends/List";
import { Show, createSignal } from "solid-js";

export default function Friends() {
  const [people, setPeople] = createSignal(null);

  const fetchPeople = async () => {
    const result = await fetch("http://127.0.0.1:3001/api/v1/people");
    return result.json();
  };

  fetchPeople().then((data) => {
    setPeople(data.data);
  });

  return (
    <Show when={ people() } fallback={ <p class="m-4">Loading...</p>} >
      <List people={ people() } />
    </Show>
  );
}
