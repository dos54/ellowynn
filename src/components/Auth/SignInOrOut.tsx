import { SignIn } from "./SignIn/SignIn";
import { SignOut } from "./SignOut/SignOut";

import { auth } from "@/auth";

export default async function SignInOrOut() {
  const session = await auth()

  if (!session?.user) return <SignIn />
  return <SignOut />
}