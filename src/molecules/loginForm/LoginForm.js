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
            <label htmlFor='username'>Username</label>
            <input
                required
                id='username'
                aria-label='username'
                name='username'
                type='text'
                value={formData.username}
            />
        </form>
    );
}

export default LoginForm;