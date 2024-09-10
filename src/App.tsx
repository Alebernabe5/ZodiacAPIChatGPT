import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

const Home = lazy (() =>import('./views/Home'))
const Details = lazy (() =>import('./views/Details'))

function App() {

  return (
      
    <div className="overflow-y-auto max-h-full ">
        <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:zodiac" element={<Details />} />
          </Routes>
        </Suspense>
        </BrowserRouter>
    </div>
  )
}

export default App
