import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <Layout title="Next.js Demo">
        <p className="mb-4">Testa olika renderingstekniker:</p>
        <Link href="/ssr" className="text-blue-500 hover:underline mb-2">
          ➡️ Server-Side Rendering (SSR)
        </Link>
        <br />
        <Link href="/ssg" className="text-blue-500 hover:underline">
          ➡️ Static Site Generation (SSG)
        </Link>
      </Layout>
    </>
  )
}
