import { createSignal, For } from "solid-js";

export default function AddContactForm(props) {
  const [date, setDate] = createSignal("");
  const [contactType, setContactType] = createSignal("");
  const [initiatedBy, setInitiatedBy] = createSignal("");
  const [context, setContext] = createSignal("");

  // Validation error messages
  const [dateErrors, setDateErrors] = createSignal([]);
  const [contactTypeErrors, setContactTypeErrors] = createSignal([]);
  const [initiatedByErrors, setInitiatedByErrors] = createSignal([]);
  const [contextErrors, setContextErrors] = createSignal([]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    // Basic validation: Check if the date is not empty
    setDateErrors(e.target.value.trim() === "" ? "Date cannot be empty" : "");
  };

  const handleContactTypeChange = (e) => {
    setContactType(e.target.value);
    // Basic validation: Check if the contact type is not empty
    setContactTypeErrors(e.target.value.trim() === "" ? "Contact type cannot be empty" : "");
  };

  const handleInitiatedByChange = (e) => {
    setInitiatedBy(e.target.value);
    // Basic validation: Check if the initiated by is not empty
    setInitiatedByErrors(e.target.value.trim() === "" ? "Initiated by cannot be empty" : "");
  };

  const handleContextChange = (e) => {
    setContext(e.target.value);
    // Basic validation: Check if the context is not empty
    setContextErrors(e.target.value.trim() === "" ? "Context cannot be empty" : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      date().trim() === "" ||
      contactType().trim() === "" ||
      initiatedBy().trim() === "" ||
      context().trim() === ""
    ) {
      // Update error states and prevent submission
      setDateErrors(date().trim() === "" ? ["Date cannot be empty"] : []);
      setContactTypeErrors(contactType().trim() === "" ? ["Contact type cannot be empty"] : []);
      setInitiatedByErrors(initiatedBy().trim() === "" ? ["Initiated by cannot be empty"] : []);
      setContextErrors(context().trim() === "" ? ["Context cannot be empty"] : []);

      return;
    }

    // Perform AJAX call
    const url = `http://127.0.0.1:3001/api/v1/people/${props.friendId}/contacts`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: date(),
        contact_type: contactType(),
        initiated_by: initiatedBy(),
        context: context(),
      }),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log("Response from server:", data);
      props.refetch();
    }
    catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} class="flex flex-col gap-2">
      <label>
        Date:
        <input type="date" value={date()} onInput={handleDateChange} />
      </label>
      <For each={dateErrors()}>
        {(error) => (
          <span class="text-light-warning dark:text-dark-warning">
            {error}
          </span>
        )}
      </For>

      <label>
        Contact Type:
        <select value={contactType()} onInput={handleContactTypeChange}>
          <option value="">Select</option>
          <option value="call">Call</option>
          <option value="message">Message</option>
          <option value="in person">In person</option>
        </select>
      </label>
      <For each={contactTypeErrors()}>
        {(error) => (
          <span class="text-light-warning dark:text-dark-warning">
            {error}
          </span>
        )}
      </For>

      <label>
        Initiated By:
        <select value={initiatedBy()} onInput={handleInitiatedByChange}>
          <option value="">Select</option>
          <option value="you">Me</option>
          <option value="them">Them</option>
          <option value="other">Other</option>
        </select>
      </label>
      <For each={initiatedByErrors()}>
        {(error) => (
          <span class="text-light-warning dark:text-dark-warning">
            {error}
          </span>
        )}
      </For>

      <label>
        Context:
        <select value={context()} onInput={handleContextChange}>
          <option value="">Select</option>
          <option value="solo">Individually</option>
          <option value="group">In a group</option>
        </select>
      </label>
      <For each={contextErrors()}>
        {(error) => (
          <span class="text-light-warning dark:text-dark-warning">
            {error}
          </span>
        )}
      </For>

      <button type="submit" class="py-2 px-4 border rounded-lg font-lato text-blue-chill-700 dark:text-blue-chill-50">Submit</button>
    </form>
  );
}
