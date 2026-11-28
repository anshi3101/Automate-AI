import { cn } from "cn"
import {FcGoogle} from "react-icons/fc"
import { Button } from "@/components/ui/button"
import { login } from "@/features/auth" // Ya aapka jo bhi auth.js ka folder path hai (jaise "@/api/auth" ya "../services/auth")
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { signInWithPopup } from "firebase/auth"
import { auth,googleProvider } from "@/firebase"
import { useDispatch } from "react-redux"
import { setUserData } from "@/redux/userSlice"

export function LoginForm({
  className,
  ...props
}) {
  const dispatch = useDispatch()
  const handleGoogleLogin = async ()=>{
    try{
      const result = await signInWithPopup(auth,googleProvider)
      const token = await result.user.getIdToken()
      const data = await login(token)
      console.log(data)
      dispatch(setUserData(data))
    } catch(error){
      console.log(error)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className = "border-0 bg-transparent shadow-none">
        <CardHeader className="space-y-3 text-center">
          <CardTitle className="text-2xl font-semibold tracking-tight text-white">Welcome to Automate AI</CardTitle>
          <CardDescription className= "text-sm text-zinc-400">
            Sign in to build and manage your AI agents.
          </CardDescription>
        </CardHeader>
        <CardContent className= "pt-4">
          <form>
            <FieldGroup>
              <Field>
                <Button 
                onClick={handleGoogleLogin}
                variant="outline" type="button" className="h-12 w-full gap-3 rounded-xl border-white/15 bg-white/[0.04] text-sm font-medium text-white transition hover:border-violet-400/50 hover:bg-white/[0.08] hover:text-white">
                 <FcGoogle/>
                  Login with Google
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
