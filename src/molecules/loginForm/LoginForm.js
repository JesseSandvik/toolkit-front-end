import { useState } from 'react';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordMatch: ''
    });

    return (
        <form>
            <label htmlFor='username'>username</label>
            <input
                required
                id='username'
                autoComplete='off'
                aria-describedby='uidnote'
                name='username'
                type='text'
                value={formData.username}
            />
            <label htmlFor='email'>email</label>
            <input
                required
                id='email'
                autoComplete='off'
                name='email'
                type='text'
                value={formData.email}
            />
            <label htmlFor='password'>password</label>
            <input
                required
                id='password'
                autoComplete='off'
                aria-describedby='passwordnote'
                name='password'
                type='password'
                value={formData.email}
            />
            <label htmlFor='confirmPassword'>confirm password</label>
            <input
                required
                id='confirmPassword'
                autoComplete='off'
                aria-describedby='confirmnote'
                name='confirmPassword'
                type='password'
                value={formData.email}
            />
        </form>
    );
}

export default LoginForm;