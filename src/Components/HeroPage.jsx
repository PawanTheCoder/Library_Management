import { useState } from "react";
import Logo from "../assets/image.png";
import { MdDashboard } from "react-icons/md";
import { FaRecordVinyl } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { FaUsers } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { format } from "date-fns";
import styles from "./HeroPage.module.css";
import PieChart from "./DashBoardComponents/PieChart";

function HeroPage() {
    const now = new Date();
    const time = format(now, "HH:mm");
    const date = format(now, "dd-MM-yyyy");
    const [currentNav, setCurrentNav] = useState("Dashboard");

    // Dummy Data
    const books = ["Book A", "Book B", "Book C", "Book D"];
    const students = ["Student 1", "Student 2", "Student 3", "Student 4"];

    return (
        <div className={styles.hero}>
            {/* Sidebar */}
            <div className={styles.nav}>
                <div className={styles.navHead}>
                    <img src={Logo} alt="Book icon" width="50" />
                    <h2>Library Management</h2>
                </div>
                <div className={styles.navBar}>
                    <div className={styles.navItem}>
                        <MdDashboard />
                        <p >Dashboard</p>
                    </div>
                    <div className={styles.navItem}>
                        <FaRecordVinyl />
                        <p>Catalog</p>
                    </div>
                    <div className={styles.navItem}>
                        <GiOpenBook />
                        <p>Books</p>
                    </div>
                    <div className={styles.navItem}>
                        <FaUsers />
                        <p>Users</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className={styles.mainContent}>
                {/* Header */}
                <div className={styles.headerLine}>
                    <div className={styles.toFlexRow}>
                        <FaUserAlt className={styles.increaseFont} />
                        <div className={styles.toFlex}>
                            <h3>GuestUser</h3>
                            <p>Admin</p>
                        </div>
                    </div>
                    <div>
                        <h2>{time}</h2>
                        <p>{date}</p>
                    </div>
                </div>

                {/* Pie Chart Centered */}
                <div className={styles.pieChartWrapper}>
                    <PieChart borrowed={30} returned={70} />
                </div>

                {/* Lists Section */}
                <div className={styles.listsSection}>
                    <div className={styles.listCard}>
                        <h3>Books</h3>
                        <ul>
                            {books.map((book, i) => (
                                <li key={i}>{book}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.listCard}>
                        <h3>Students</h3>
                        <ul>
                            {students.map((student, i) => (
                                <li key={i}>{student}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HeroPage;
