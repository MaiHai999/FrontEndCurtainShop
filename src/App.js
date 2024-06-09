import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {routes} from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import NoHeadComponent from './components/DefaultComponent/NoHeadComponent'
import { useQuery } from '@tanstack/react-query'
function App() {


  return (
    <div>
        <Router>
          <Routes>
            {routes.map((route) => {
              const Page = route.page
              let Layout = Fragment; // Mặc định sử dụng Fragment
              if (route.isShowHeader && route.isShowFooter) {
                Layout = DefaultComponent;
              } else if (!route.isShowHeader && route.isShowFooter) {
                Layout = NoHeadComponent;
              }
              return (
                <Route key={route.path} path={route.path} element={
                  <Layout>
                    <Page />
                  </Layout>
                } />
              )
            })}
          </Routes>
        </Router>
    </div>
  )
}
export default App  