import {useLocation, useNavigate } from 'react-router-dom';
import {useAuth} from '../hook/useAuth'


const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const userEmail = 'standWithUkraine@gmail.com';
    const userPassword = 'ILoveUkraine';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.email.value && form.password.value;

        if (form.email.value === userEmail && form.password.value === userPassword) {
            localStorage.setItem('isLoggedIn', JSON.stringify('true'))
            signIn(user, () => navigate(fromPage, {replace: true}));
        }
    }

    return (
        <div>
            <h1>Login Page</h1>
            <div>
            <p>You can log in using test login and password</p>
            <p>Login: {userEmail}</p>
            <p>Password: {userPassword}</p>
            </div>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="">
                    Login: <input type="text" name="email"/>
                </label>
                <label htmlFor="">
                    Password: <input type="text" name="password"/>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}


export {LoginPage};










