import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <h2>Gabriel Yakoub</h2>
            <div className={styles.navlinks}>
                <Link href="https://github.com/GabrielYKB">
                    <img src="github.svg" alt="" />
                </Link>
                <Link href="https://www.linkedin.com/in/gabriel-yakoub-65ab74185/">
                    <img src="linkedin.svg" alt="" />
                </Link>
            </div>
        </div>
    );
}
