import { Link } from "react-router-dom";
import styles from "./NewLogin.module.css";
import Logo from "../assets/image.png";

function NewLogin() {
    return (
        <div className={styles.container}>
            <div className={styles.leftpanel}>
                <img src={Logo} alt="" width="100" />
                <h1>Library Management</h1>
                <h3>Already Have Account ?</h3>
                <Link to="/" className={styles.ButtonW}>
                    Sign In
                </Link>
            </div>

            <div className={styles.rightpanel}>
                <img src={Logo} alt="" width="100" />
                <h1>Sign up</h1>
                <p>Please provide your information to sign up.</p>
                <div className={styles.inputContainer}>
                    <div className={styles.con}>
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div className={styles.con}>
                        <input type="text" placeholder="Contact NO" />
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className={styles.con}>
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Password" />
                    </div>
                </div>
                <Link to="/hero" className={styles.ButtonB}>
                    Sign UP
                </Link>
            </div>
        </div>
    );
}

export default NewLogin;
