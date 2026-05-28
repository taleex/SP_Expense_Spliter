import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function AuthForm() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button className="w-full">Login</Button>
        <p className="text-sm text-muted-foreground">Don't have an account? <a href="/auth/signup" className="text-primary">Sign up</a></p>
    </div>
  )
}
