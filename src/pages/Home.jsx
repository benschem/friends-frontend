import { createSignal, onCleanup } from "solid-js";

const fetchPeople = async () => {
  const result = await fetch("http://127.0.0.1:3000/api/v1/people");
  return result.json();
};

export default function Home() {
  const [people, setPeople] = createSignal(null);

  fetchPeople().then((data) => setPeople(data));

  // Optional cleanup when the component unmounts
  onCleanup(() => {
    // Add cleanup logic here if needed
  });

  return (
    <div>
      <p>{JSON.stringify(people())}</p>
    </div>
  );
}
