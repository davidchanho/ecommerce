import React, { ChangeEvent, MouseEvent, useState } from 'react'

/**
 * Form should have
 * - password reveal.
 * - explicit password hints.
 * 
 */
function Register() {
    const [reveal, setReveal] = useState(false)
    const [form, setForm] = useState({
        email: '',
        password: '',
        first_name: '',
        last_name: ''
    })

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value
        })
    }

    const onReveal = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setReveal(!reveal)
    }

    return (
        <form className='d-grid' noValidate>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type={reveal ? "text" : "password"} className="form-control" id="password" name="password" value={form.password} onChange={onChange} />
                <button onClick={onReveal}>Reveal</button>
            </div>

            <ul>
                <li className={form.password.length >= 8 ? 'text-success' : 'text-secondary'}>
                    More than 8 characters
                </li>
                <li className={form.password.match(/[!^@#$%]/g) ? 'text-success' : 'text-secondary'}>
                    Include special characters
                </li>
            </ul>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Register