import { redirect } from "next/navigation";
import { createClient } from "../../utils/supabase/server";
import Welcome from "./components/welcome";

export default async function HomePage() {
  const supabase = await createClient();

  // Get session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // If no session exists, redirect to login page
  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <Welcome />
    </>
  );
}
