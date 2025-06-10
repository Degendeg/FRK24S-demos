const TopSection = ({ content }) => {
  return (
    <div className="border border-gray-500 rounded p-4 w-full max-w-2xl">
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
    </div>
  )
}
export default TopSection