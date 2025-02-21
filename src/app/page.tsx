import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'

export default async function Home() {
  const {userId, redirectToSignIn} = await auth()

  if (!userId) return redirectToSignIn()

  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  )
}