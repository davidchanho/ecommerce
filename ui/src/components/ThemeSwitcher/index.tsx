import React from 'react'
import { useSelector } from 'react-redux'
import { changeTheme, selectTheme } from '../../app/slices/theme'
import { useAppDispatch } from '../../app/store'

/**
 * When there's 3 to 5 options, use radio tabs instead of dropdown.
 */
const ThemeSwitcher = () => {
    const { theme } = useSelector(selectTheme)
    const dispatch = useAppDispatch()

    return (
        <div className='w-25 p-4'>
            <h3 className='text-center'>App Theme</h3>
            <p className='text-center text-secondary text-opacity-10'>Which theme would you like to use?</p>
            <form className='d-grid gap-3'>
                <label className='form-check-label cursor-pointer p-3 fw-bold border rounded'>
                    <input className='form-check-input me-2' type='radio' name='theme' value='light' checked={theme === 'light'} onChange={() => dispatch(changeTheme('light'))} /> Light mode
                </label>
                <label className='form-check-label cursor-pointer p-3 fw-bold rounded bg-secondary bg-opacity-10'>
                    <input className='form-check-input me-2' type='radio' name='theme' value='auto' checked={theme === 'auto'} onChange={() => dispatch(changeTheme('auto'))} /> Automatic
                </label>
                <label className='form-check-label cursor-pointer p-3 fw-bold bg-dark text-white rounded'>
                    <input className='form-check-input me-2' type='radio' name='theme' value='dark' checked={theme === 'dark'} onChange={() => dispatch(changeTheme('dark'))} /> Dark mode
                </label>
            </form>
        </div>
    )
}

export default ThemeSwitcher