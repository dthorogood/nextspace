import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import styles from './page.module.css'

export default async function Home() {

  return (
      <p>Main content</p>
  )
}
