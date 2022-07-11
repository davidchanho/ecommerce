import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { IRegister, registerUserAsync, selectUser } from '../../app/user'
import styles from './AuthForm.module.css'

function AuthForm() {
    const dispatch = useAppDispatch()
    const { isAuth } = useAppSelector(selectUser)
    const navigate = useNavigate()

    const [form, setForm] = useState<IRegister>({
        email: '',
        password: '',
        first_name: '',
        last_name: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await dispatch(registerUserAsync(form))
        navigate('/me')
        if (isAuth) {
            
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
                Email
                <input className={styles.input} type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
            </label>
            <label className={styles.label}>
                Password
                <input className={styles.input} type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />
            </label>
            <label className={styles.label}>
                First Name
                <input className={styles.input} type="text" name="first_name" value={form.first_name} onChange={handleChange} placeholder="First Name" />
            </label>
            <label className={styles.label}>
                Last Name
                <input className={styles.input} type="text" name="last_name" value={form.last_name} onChange={handleChange} placeholder="Last Name" />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AuthForm
