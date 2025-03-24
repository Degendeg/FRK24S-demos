import Layout from "@/components/Layout"
import Navbar from "@/components/Navbar"

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  const post = await res.json()

  return {
    props: { post }, // Skickar datan som props
  }
}

export default function SSRPage({ post }) {
  return (
    <>
      <Navbar />
      <Layout title="Server-Side Rendering (SSR)">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="text-gray-700 mt-2">{post.body}</p>
      </Layout>
    </>
  )
}
