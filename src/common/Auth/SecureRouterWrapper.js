import React, { useEffect } from 'react'
import { useLocation, useHistory } from "react-router-dom";


const SecureRouterWrapper = props => {

    const { pathname } = useLocation()

    const History = useHistory()

    const isAuth = !!sessionStorage.getItem("ok");


    useEffect(() => {
        if (!isAuth && pathname !== "/login") {
            History.push("/login")
        }
        if (isAuth && pathname === "/login") {
            History.push("/")
        }
    }, [isAuth, pathname])

    return (
        <>
            {props.children}
        </>
    )
}



export default SecureRouterWrapper
