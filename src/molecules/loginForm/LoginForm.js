import { useState } from 'react';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordMatch: ''
    });

    return (
        <form>
            <input
                name='name'
                type='text'
                value={formData.name}
            />
        </form>
    );
}

export default LoginForm;