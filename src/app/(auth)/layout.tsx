import AuthForm from "@/src/components/auth-form";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <AuthForm />
      {children}
    </div>
  )
}
