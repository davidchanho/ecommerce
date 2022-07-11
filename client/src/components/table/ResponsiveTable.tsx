import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './ResponsiveTable.module.scss'

interface IUser {
    id: number
    first_name: string
    last_name: string
    username: string
    email: string
    city: string
    phone: string
}

function ResponsiveTable() {
    const [data, setData] = useState<IUser[]>([])

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')

            const data = res.data.map((d: any) => ({
                id: d.id,
                first_name: d.name.split(' ')[0],
                last_name: d.name.split(' ')[1],
                username: d.username,
                email: d.email,
                city: d.address.city,
                phone: d.phone.split(' ')[0]
            }))

            setData(data)

            localStorage.setItem('users', JSON.stringify(data))
        }

        const storedUsers = localStorage.getItem('users')

        if (storedUsers) {
            const users = JSON.parse(storedUsers)

            setData(users)
        } else {

            getData()
        }
    }, [])

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((d: IUser) => (
                    <tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.first_name}</td>
                        <td>{d.last_name}</td>
                        <td>{d.username}</td>
                        <td>{d.email}</td>
                        <td>{d.city}</td>
                        <td>{d.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ResponsiveTable