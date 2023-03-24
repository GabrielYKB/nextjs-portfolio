import React from "react";
import Navbar from "./components/Navbar/Navbar";
import styles from "@/styles/home.module.css";

export default function index() {
    return (
        <div className={styles.body}>
            <Navbar />
        </div>
    );
}
