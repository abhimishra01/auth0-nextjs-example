import Image from "next/image";
import styles from "./page.module.css";
import AuthProvider from "./provider";

export default function Home() {
  return (
    <AuthProvider>
      <main className={styles.main}>
        <div>
          <h3>Abhishek's Webapp</h3>
        </div>
      </main>
    </AuthProvider>
  );
}
