import React, { useState } from 'react'
import styled from 'styled-components'

export default function SignUp() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    const handleLogout = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    const LoggedIn = () => {
        if (isLoggedIn) {
            return (
                <Button onClick={handleLogout}>Logout </Button>
            )
        } else {
            return (
                <Button onClick={handleLogin}>Login </Button>
            )
        }
    }

    return (
        <div>
            <h1>Sign up</h1>
            <LoggedIn />
        </div>
    )
}


const Button = styled.button`
    padding: 1rem;
    margin: 1rem;
    font-weight: bold;
    color: white;
    background: grey;
    box-shadow: 0;
    border-radius: 10%;

`