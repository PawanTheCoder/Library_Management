import React from "react";
import styles from "./PieChart.module.css";

const PieChart = ({ borrowed, returned }) => {
    const total = borrowed + returned;
    const borrowedPercent = total > 0 ? (borrowed / total) * 100 : 0;
    const returnedPercent = 100 - borrowedPercent;

    // Convert percentages → degrees
    const borrowedDeg = (borrowedPercent / 100) * 360;

    // Build conic gradient
    const gradient = `conic-gradient(
        #000 0deg ${borrowedDeg}deg,
        #fff ${borrowedDeg}deg 360deg
    )`;

    return (
        <div className={styles.pieWrapper}>
            <div
                className={styles.pie}
                style={{ background: gradient }}
                role="img"
                aria-label={`Books borrowed: ${borrowed}, Books returned: ${returned}`}
            >
                <div className={styles.pieCenter}>
                    <span></span>
                </div>
            </div>
            <div className={styles.legend}>
                <div className={styles.legendItem}>
                    <span className={`${styles.color} ${styles.borrowed}`}></span> Borrowed: {borrowed}
                </div>
                <div className={styles.legendItem}>
                    <span className={`${styles.color} ${styles.returned}`}></span> Returned: {returned}
                </div>
            </div>
        </div>
    );
};

export default PieChart;
