import { Button } from "./ui/button";
import { Input } from "./ui/input";

type AuthFormProps = {
  type: "login" | "signup";
}

export default function AuthForm({ type }: AuthFormProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button className="w-full">{type === "login" ? "Login" : "Sign Up"}</Button>
        {type === "login" ? (
          <p className="text-sm text-muted-foreground">Don't have an account? <a href="signup" className="text-primary">Sign up</a></p>
        ) : (
          <p className="text-sm text-muted-foreground">Already have an account? <a href="login" className="text-primary">Login</a></p>
        )}
    </div>
  )
}
