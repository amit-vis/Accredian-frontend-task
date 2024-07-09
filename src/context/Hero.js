import { createContext, useContext, useState } from "react";
import * as Yup from 'yup';
import {toast} from 'react-toastify'

const HeroContext = createContext();
export const useHero = ()=>{
    const value = useContext(HeroContext);
    return value
}

export const HeroProvider = ({children})=>{
    const [open , setOpen] = useState(false);
    const [referalDetails, setReferalDetails] = useState({referrerName:'', referrerEmail:"", refereeName:"", refereeEmail:""})
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);
    const validationSchema = Yup.object({
        referrerName: Yup.string().required('Required'),
        referrerEmail: Yup.string().email('Invalid email address').required('Required'),
        refereeName: Yup.string().required('Required'),
        refereeEmail: Yup.string().email('Invalid email address').required('Required'),
      });
      const handleSubmitDetails = async () => {
        try {
            const { referrerName, referrerEmail, refereeName, refereeEmail } = referalDetails;
            const response = await fetch('https://accredian-backend-task-x6sa.onrender.com/create-referal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    referrerName,
                    referrerEmail,
                    refereeName,
                    refereeEmail
                })
            });
            console.log("response", response)
            if (response.status === 200) {
                const data = await response.json();
                toast.success("Your friend reffered successfully!");
                setReferalDetails({
                    referrerName:"",
                    referrerEmail:"",
                    refereeEmail:"",
                    refereeName:""
                })
                handleClose();
            } else {
                const errorData = await response.json();
                toast.error(errorData.message)
            }
        } catch (error) {
            console.error("Network Error:", error);
        }
    };
    
    return (
    <HeroContext.Provider value={{open, handleOpen, handleClose,validationSchema,referalDetails, setReferalDetails,handleSubmitDetails}}>
        {children}
    </HeroContext.Provider>)
}