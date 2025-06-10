const BottomSection = ({ content }) => {
  return (
    <div className="border border-gray-500 rounded p-4 w-full max-w-2xl">
      <div className="grid grid-cols-3 gap-4" dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  )
}
export default BottomSection