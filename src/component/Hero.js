import SecondContainer from "./childComponent/Container"
import SimpleContainer from "./childComponent/Image"
import { NavBar } from "./childComponent/NavBar/Nav"
import { ReferalForm } from "./childComponent/ReferalForm"

export const Hero = ()=>{
    return(
        <>
        <NavBar/>
        <SimpleContainer/>
        <SecondContainer/>
        <ReferalForm/>
        </>
    )
}