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
import Catlog from "./Catlog";
import BookData from "./BookData.json";
import StudentData from "./StudentData.json";

function HeroPage() {
    const now = new Date();
    const time = format(now, "HH:mm");
    const date = format(now, "dd-MM-yyyy");
    const [currentNav, setCurrentNav] = useState("Dashboard");

    // Dummy Data
    const books = ["Book A", "Book B", "Book C", "Book D", "Book E"];
    const students = ["Student 1", "Student 2", "Student 3", "Student 4", "Student 5"];

    return (
        <div className={styles.hero}>
            {/* Sidebar */}
            <div className={styles.nav}>
                <div className={styles.navHead}>
                    <img src={Logo} alt="Book icon" width="50" />
                    <h2>Library Management</h2>
                </div>
                <div className={styles.navBar}>
                    <div
                        onClick={() => setCurrentNav("Dashboard")}
                        className={`${styles.navItem} ${currentNav === "Dashboard" ? styles.Active : ""}`}
                    >
                        <MdDashboard />
                        <p>Dashboard</p>
                    </div>

                    <div
                        onClick={() => setCurrentNav("Catalog")}
                        className={`${styles.navItem} ${currentNav === "Catalog" ? styles.Active : ""}`}
                    >
                        <FaRecordVinyl />
                        <p>Catalog</p>
                    </div>

                    <div
                        onClick={() => setCurrentNav("Books")}
                        className={`${styles.navItem} ${currentNav === "Books" ? styles.Active : ""}`}
                    >
                        <GiOpenBook />
                        <p>Books</p>
                    </div>

                    <div
                        onClick={() => setCurrentNav("Users")}
                        className={`${styles.navItem} ${currentNav === "Users" ? styles.Active : ""}`}
                    >
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

                {/* Main Dynamic Section */}
                {currentNav === "Dashboard" && (
                    <>
                        {/* Pie Chart Centered */}
                        <div className={styles.pieChartWrapper}>
                            <PieChart borrowed={30} returned={70} />
                        </div>
                        {/* Lists Section */}
                        <div className={styles.listsSection}>
                            <div className={styles.listCard}>
                                <h3 >Books</h3>
                                <ul className={styles.nameList}>
                                    {BookData.map((book) => (
                                        <li key={book.id}>{book.title}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.listCard}>
                                <h3 >Students</h3>
                                <ul className={styles.nameList}>
                                    {StudentData.map((student) => (
                                        <li key={student.id}>{student.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </>
                )}

                {currentNav === "Catalog" && (
                    <Catlog />
                )}

                {currentNav === "Books" && (
                    <div className={styles.contentBox}>
                        <center><h1 className={styles.BookHeading}>Books Page</h1></center>
                        <ul>
                            {BookData.map((book) => (
                                <div className={styles.BookList}>
                                    <li key={book.id}>{book.id}</li>
                                    <li>{book.title}</li>
                                    <li>{book.Author}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                )}

                {currentNav === "Users" && (
                    <div className={styles.contentBox}>
                        <h2>Users Page</h2>
                        <ul>
                            {students.map((student, i) => (
                                <li key={i}>{student}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
export default HeroPage;