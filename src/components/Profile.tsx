"use client";
import { useSession } from "next-auth/react";

const Profile = () => {
  const session = useSession();

  return (
    <>
      <div>Profile</div>
      {session.data?.user ? <div> signed in</div> : <div> not signed in</div>}
    </>
  );
};
export default Profile;
