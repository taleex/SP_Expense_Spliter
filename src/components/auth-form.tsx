import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AuthForm() {
  return (
    <form className="flex flex-col gap-2">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button type="submit">Login</Button>
    </form>
  )
}
