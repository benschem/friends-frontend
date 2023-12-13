import { createSignal } from "solid-js";

const ComplexFormWithValidation = () => {
  const [date, setDate] = createSignal("");
  const [contactType, setContactType] = createSignal("");
  const [initiatedBy, setInitiatedBy] = createSignal("");
  const [context, setContext] = createSignal("");

  // Validation error messages
  const [dateError, setDateError] = createSignal("");
  const [contactTypeError, setContactTypeError] = createSignal("");
  const [initiatedByError, setInitiatedByError] = createSignal("");
  const [contextError, setContextError] = createSignal("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    // Basic validation: Check if the date is not empty
    setDateError(e.target.value.trim() === "" ? "Date cannot be empty" : "");
  };

  const handleContactTypeChange = (e) => {
    setContactType(e.target.value);
    // Basic validation: Check if the contact type is not empty
    setContactTypeError(e.target.value.trim() === "" ? "Contact type cannot be empty" : "");
  };

  const handleInitiatedByChange = (e) => {
    setInitiatedBy(e.target.value);
    // Basic validation: Check if the initiated by is not empty
    setInitiatedByError(e.target.value.trim() === "" ? "Initiated by cannot be empty" : "");
  };

  const handleContextChange = (e) => {
    setContext(e.target.value);
    // Basic validation: Check if the context is not empty
    setContextError(e.target.value.trim() === "" ? "Context cannot be empty" : "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Additional validation logic before submission if needed
    if (date().trim() === "" || contactType().trim() === "" || initiatedBy().trim() === "" || context().trim() === "") {
      // Display validation errors
      setDateError(date().trim() === "" ? "Date cannot be empty" : "");
      setContactTypeError(contactType().trim() === "" ? "Contact type cannot be empty" : "");
      setInitiatedByError(initiatedBy().trim() === "" ? "Initiated by cannot be empty" : "");
      setContextError(context().trim() === "" ? "Context cannot be empty" : "");
      return;
    }
    // Form submission logic
    alert(`Submitted: Date - ${date()}, Contact Type - ${contactType()}, Initiated By - ${initiatedBy()}, Context - ${context()}`);
  };

  return (
    <form onSubmit={handleSubmit} class="flex flex-col gap-2">
      <label>
        Date:
        <input type="date" value={date()} onInput={handleDateChange} />
      </label>
      {dateError() && <span style="color: red;">{dateError()}</span>}

      <label>
        Contact Type:
        <select value={contactType()} onInput={handleContactTypeChange}>
          <option value="">Select</option>
          <option value="device">Device</option>
          <option value="in-person">In-person</option>
        </select>
      </label>
      {contactTypeError() && <span style="color: red;">{contactTypeError()}</span>}

      <label>
        Initiated By:
        <select value={initiatedBy()} onInput={handleInitiatedByChange}>
          <option value="">Select</option>
          <option value="me">Me</option>
          <option value="then">Then</option>
        </select>
      </label>
      {initiatedByError() && <span style="color: red;">{initiatedByError()}</span>}

      <label>
        Context:
        <select value={context()} onInput={handleContextChange}>
          <option value="">Select</option>
          <option value="solo">Solo</option>
          <option value="group">Group</option>
        </select>
      </label>
      {contextError() && <span style="color: red;">{contextError()}</span>}

      <button type="submit" class="mt-2 py-2 px-4 border rounded-lg font-lato text-blue-chill-700 dark:text-blue-chill-50">Submit</button>
    </form>
  );
};

export default ComplexFormWithValidation;
