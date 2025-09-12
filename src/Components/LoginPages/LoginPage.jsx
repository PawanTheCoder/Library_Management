import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";
import Logo from "../../assets/image.png";

function LoginPage() {


    return (
        <div className={styles.container}>
            <div className={styles.leftpanel}>
                <img src={Logo} alt="" width="100" />
                <h1>Welcome Back !!</h1>
                <p>Please enter your credentials to log in</p>
                <input type="text" placeholder="Username..." />
                <input type="text" placeholder="Password..." />
                <Link to="/resetPass">
                    <h2>Forgot password?</h2>
                </Link>
                <Link to="/hero" className={styles.ButtonB}>
                    Sign in
                </Link>
            </div>
            <div className={styles.rightpanel}>
                <img src={Logo} alt="" width="100" />
                <h1>Library Management</h1>
                <h3>New candidate to enroll ?</h3>
                <Link to="/signup" className={styles.ButtonW}>
                    Sign Up
                </Link>
            </div>
        </div>
    );
}

export default LoginPage;