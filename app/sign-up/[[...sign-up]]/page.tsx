import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
  return (
    <div className="container py-16 flex justify-center">
      <SignUp />
    </div>
  )
}

