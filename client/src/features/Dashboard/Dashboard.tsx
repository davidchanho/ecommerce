import React from 'react'
import { useAppSelector } from '../app/hooks'
import { selectUser } from '../app/user'

function Dashboard() {
    const {name} = useAppSelector(selectUser)

    return (
        <h1>Welcome Back! {name}</h1>
    )
}

export default Dashboard
