import { createSignal } from "solid-js";

export default function Filter() {
  const [expandFilter, setExpandFilter] = createSignal(false);

  return (
    <div class="flex flex-row gap-2 text-light-text dark:text-dark-text font-lato">
      <label for="filter" class="min-w-max">Filter by:</label>
      <select name="filter" id="filter" multiple size={ expandFilter() ? "18" : "1" } class="px-4 grow text-blue-chill-800">
        <option value="all">All</option>
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
      <p class="cursor-pointer underline" onClick={() => setExpandFilter(!expandFilter())}>
        { expandFilter() ? "hide" : "show" }
      </p>
    </div>
  )
}
