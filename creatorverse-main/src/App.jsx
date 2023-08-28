import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'

import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import Error from './pages/Error'
import HomepageHeader from "./pages/HomepageHeader"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomepageHeader />}>
            <Route index={true} element={<ShowCreators />} />
            <Route index={false} path="/:id" element={<ViewCreator />} />
            <Route index={false} path="/new" element={<AddCreator />} />
            <Route index={false} path="/edit/:id" element={<EditCreator />} />
            <Route index={false} path="*" element={ <Error /> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
