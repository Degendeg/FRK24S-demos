import Layout from "@/components/Layout"
import Navbar from "@/components/Navbar"

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  const post = await res.json()

  return {
    props: { post }, // Skickar datan som props
    revalidate: 60, // (Optional) Regenererar sidan var 60:e sekund
  }
}

export default function SSGPage({ post }) {
  return (
    <>
      <Navbar />
      <Layout title="Static Site Generation (SSG)">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="text-gray-700 mt-2">{post.body}</p>
      </Layout>
    </>
  )
}
