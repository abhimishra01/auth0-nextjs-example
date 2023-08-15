import Image from "next/image";
import { useAuth0 } from "@auth0/auth0-react";

import styles from "../page.module.css";
import Login from "./Login";

export default function Home() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log({ isAuthenticated });

  return (
    <main className={styles.main}>
      {isLoading && <h2>Loading...</h2>}
      {isAuthenticated ? (
        <div>
          <h3>Abhishek's Webapp</h3>
          {/* @ts-ignore */}
          <Image src={user.picture} alt={user.name} width="150" height="150" />
          {/* @ts-ignore */}
          <h2>{user.name}</h2>
          {/* @ts-ignore */}
          <p>{user.email}</p>
        </div>
      ) : (
        <Login />
      )}
    </main>
  );
}
