import { Link } from "react-router-dom";
import styles from "./ResetPass1.module.css";
import Logo from "../../assets/image.png";

function ResetPass1() {
    return (
        <div className={styles.container}>
            <div className={styles.leftpanel}>
                <img src={Logo} alt="" width="100" />
                <h1>Library Management</h1>
                <h3>"Your premier digital library for borrowing and reading books</h3>
            </div>


            <div className={styles.rightpanel}>

                <img src={Logo} alt="" width="100" />
                <h1>Forgot Password</h1>
                <p>Please enter your username</p>
                <div>
                    <input type="text" placeholder="Username" />
                </div>
                <Link to="/hero" className={styles.ButtonB}>
                    RESET PASSWORD
                </Link>
            </div>
            <Link to="/signup">
                <button className={styles.back}>Back</button>
            </Link>
        </div>
    );
}

export default ResetPass1;