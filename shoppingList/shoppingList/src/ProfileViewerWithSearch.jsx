import { useEffect, useState } from "react";

import ProfileSearchForm from "./ProfileSearchForm";

import axios from "axios";

const BASE_URL = "https://api.github.com/users";

function ProfileViewerWithSearch() {
  const [username, setUsername] = useState("hackclub");

  const [profile, setProfile] = useState({
    data: null,
    isLoading: true,
  });

  useEffect(
    function fetchUsernameChange() {
      async function fetchUser() {
        const userResult = await axios.get(`${BASE_URL}/${username}`);
        setProfile({ data: userResult.data, isLoading: false });
      }
      fetchUser();
    },
    [username]
  );

  function search(username) {
    setProfile({ data: null, isLoading: true });
    setUsername(username);
  }

  const url = profile.data?.avatar_url && profile.data.avatar_url;

  // console.log(profile.data)
  // console.log(profile.data.avatar_url)
  // console.log(profile.data.name)


  return (
    <div>
      <h1>Search for Github Profile Pic </h1>
      <ProfileSearchForm search={search} />
      {url ? <img src={url} alt="" /> : "No Profile image found"}
      <h3>{profile.data?.name && profile.data.name}</h3>
    </div>
  );
}


export default ProfileViewerWithSearch;
