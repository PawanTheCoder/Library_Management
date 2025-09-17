

function Dashboard() {
    return (
        <>
            <div className={styles.addBook}>

            </div>
            {/* Pie Chart Centered */}
            <div className={styles.pieChartWrapper}>
                <PieChart borrowed={30} returned={70} />
            </div>

            {/* Lists Section */}
            <div className={styles.listsSection}>
                <div className={styles.listCard}>
                    <h3 className={styles.toStick}>Books</h3>
                    <ul>
                        {books.map((book, i) => (
                            <li key={i}>{book}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.listCard}>
                    <h3 className={styles.toStick}>Students</h3>
                    <ul>
                        {students.map((student, i) => (
                            <li key={i}>{student}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Dashboard;