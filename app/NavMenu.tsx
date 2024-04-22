import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css";
import {SignInButton, SignOutButton} from "@/components/buttons";
import AuthCheck from "@/components/AuthCheck";

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src="/logo.svg" width={100} height={30} alt="NextSpace Logo" />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
        <li>
          <SignInButton />
        </li>
        <AuthCheck>
          <li>
            <SignOutButton />
          </li>
        </AuthCheck>
      </ul>
    </nav>
  );
}
