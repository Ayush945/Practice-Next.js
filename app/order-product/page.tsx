"use client"
import { useRouter } from "next/navigation";
export default function page() {
    const router=useRouter();

    const handleClick=()=>{
        console.log("Placing Order...");
        router.replace("/");//removes browser history stack
        //router.push("/");//add a new to browser history stack
        //router.back();//navigates to previous page on history stack
        //router.forward();//navigate to front page in history stack
    }
    return (
    <>
    <h1>Order Product</h1>
    <button onClick={handleClick}>Place Order</button>
    </>
  )
}
