export default function Sort() {
  return (
    <div class="mt-4 flex flex-row gap-2 text-light-text dark:text-dark-text font-lato">
      <label for="sort" class="min-w-max">Sort by:</label>
      <select name="sort" id="sort" class="px-2 grow text-blue-chill-800">
        <option value="most-recent">Most recently contacted</option>
        <option value="least-recent">Least recently contacted</option>
        <option value="name">Name</option>
      </select>
    </div>
  )
}
