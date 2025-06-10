import { useState, useEffect } from 'react'
import DOMPurify from 'dompurify'
import TopSection from './TopSection'
import MiddleSection from './MiddleSection'
import BottomSection from './BottomSection'

function App() {
  const [sectionData, setSectionData] = useState(null)
  const query = `
      query {
      test {
        topSection
        middleSection
        bottomSection
        products
      }
    }
  `

  useEffect(() => {
    fetch(import.meta.env.VITE_CMS_API_URL, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_CMS_API_KEY
      },
      body: JSON.stringify({ query })
    })
      .then(res => res.json())
      .then(res => {
        setSectionData(res.data.test)
      })
      .catch((err) => console.error("Error fetching from DatoCMS", err))
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-6 p-4">
      {!sectionData ? (
        <p className="text-white text-center mt-10 animate-pulse">Laddar...</p>
      ) : (
        <>
          <TopSection content={DOMPurify.sanitize(sectionData.topSection)} />
          <MiddleSection content={DOMPurify.sanitize(sectionData.middleSection)} />
          <BottomSection content={DOMPurify.sanitize(sectionData.bottomSection, { FORBID_TAGS: ['p'] })} />
        </>
      )}
    </div>
  )
}

export default App
