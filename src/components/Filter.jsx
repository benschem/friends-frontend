export default function Filter() {
  return (
    <div class="form-control w-full max-w-xs">
      <label for="filter" class="label">Filter by:</label>
      <select name="filter" id="filter" class="select select-bordered">
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
    </div>
  )
}
