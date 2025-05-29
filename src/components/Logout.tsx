"use client"
import { useState } from "react"
import { Button } from "./ui/button"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"



const Logout = () => {
   
    const[loading, setLoading] = useState(false)
    const router = useRouter();

    const handleLogout = async() =>{
      setLoading(true)  
      await new Promise((res, err) => setTimeout(res, 2000))

      const errorMsg = null;
      if(!errorMsg){
        toast("Logged out successfully")
        router.push("./")
      }else{
        toast("Error while logging out")
      }
     setLoading(false) 
    }
    return(
        <Button onClick={handleLogout} className="w-24" variant="outline">{loading ? <Loader2 className="animate-spin"></Loader2> : "Log out"}</Button>
    )

}

export default Logout