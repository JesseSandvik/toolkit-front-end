import { useEffect, useRef, useState } from 'react';

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');

    useEffect(() => {
        console.log(username);
    }, [username]);

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
                value={username}
                onChange={(event) => setUsername(username => username = event.target.value)}
            />
            <label htmlFor='email'>email</label>
            <input
                required
                id='email'
                autoComplete='off'
                name='email'
                type='text'
                value={email}
                onChange={(event) => setEmail(email => email = event.target.value)}
            />
            <label htmlFor='password'>password</label>
            <input
                required
                id='password'
                autoComplete='off'
                aria-describedby='passwordnote'
                name='password'
                type='password'
                value={password}
                onChange={(event) => setPassword(password => password = event.target.value)}
            />
            <label htmlFor='confirmPassword'>confirm password</label>
            <input
                required
                id='confirmPassword'
                autoComplete='off'
                aria-describedby='confirmnote'
                name='confirmPassword'
                type='password'
                value={passwordMatch}
                onChange={(event) => setPasswordMatch(passwordMatch => passwordMatch = event.target.value)}
            />
            <button type='submit'>sign up</button>
        </form>
    );
}

export default LoginForm;