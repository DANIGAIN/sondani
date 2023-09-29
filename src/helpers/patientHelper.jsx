

export const hendelDateTime = async (date ,setPatientData) => {
    const parsedDate = new Date(date);
    if(parsedDate.getHours() < 10 || parsedDate.getHours() >= 17 )
    {
       setPatientData((perv)=>({...perv, app_Time:''}))
       toast.error("sorry ! our clinic in close this time")
    }else 
    {
       setPatientData((perv)=>({...perv, app_Time:date}))
    }    
}