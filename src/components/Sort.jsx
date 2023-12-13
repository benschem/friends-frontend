export default function Sort() {
  return (
    <div class="form-control w-full max-w-xs">
      <label for="sort" class="label">Sort by:
      </label>
      <select name="sort" id="sort" class="select select-bordered">
        <option selected value="most-recent">Most recently contacted</option>
        <option value="least-recent">Least recently contacted</option>
        <option value="name">Name</option>
      </select>
    </div>
  )
}
