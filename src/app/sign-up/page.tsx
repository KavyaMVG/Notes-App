import Authform from "@/components/Authform"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

const SignUpPage = () => {
    return(
        <div className="mt-20 flex flex-col items-center">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>SignUp</CardTitle>
                </CardHeader>
                <Authform type="signUp" />
            </Card>
        </div>
    )
}


export default SignUpPage