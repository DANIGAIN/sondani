import React from 'react'
// import {useUserConext} from './../hooks/useUserContext'
// import { useEffect } from 'react';
export default function Loading() {

    // const {user ,  setUser} = useUserConext();
    // useEffect(()=>{

    //   console.log(user);
    // },[])


    return (
            <div className=" d-flex  align-items-center justify-content-center m-5 ">
                <div className=" spinner-border w-5 " role="status">
                    <span className=" sr-only">Loading.........</span>
                </div>
            </div>

    )
}
