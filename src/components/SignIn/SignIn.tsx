'use client'

import { signIn, signOut } from "next-auth/react"

import { auth } from '@/auth'

export default function SignIn() {
  // There is a problem w this that i need to fix tomorrow!!
  // const session = await auth()

  // if (!session?.user) return <button onClick={() => signIn("github")}>Sign In</button>

  return (
    <button onClick={() => signOut()}>Sign Out</button>
  )
}