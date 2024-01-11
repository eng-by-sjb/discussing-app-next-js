import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/Profile";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign In</Button>
      </form>

      <form action={actions.signOut}>
        <Button type="submit">Sign Out</Button>
      </form>

      {session?.user ? <div>signed in</div> : <div>signed out</div>}
      <div>{JSON.stringify(session?.user)}</div>
      <div>{session?.user?.name}</div>

      {/* using the Profile component to display the user's profile information. The Profile component is imported from the components directory. The Profile component is used to display the user's profile information, such as their name, email, and profile picture. The Profile component is also used to handle the user's profile information, such as updating their name */}
      {/* is a client component  */}
      <Profile></Profile>
    </div>
  );
}
