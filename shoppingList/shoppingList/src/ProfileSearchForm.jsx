import { useState } from "react";

function ProfileSearchForm({ search }) {
  const [term, setTerm] = useState("");

  function handleChange(evt) {
    setTerm(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    search(term);
    setTerm("");
  }

  return (
    <form className="profile-search-form" onSubmit={handleSubmit}>
      <input
        className="profile-search-input"
        value={term}
        onChange={handleChange}
        placeholder="Enter username"
      />
      <button className="profile-search-button" type="submit">
        Search by Username
      </button>
    </form>
  );
}

export default ProfileSearchForm;
