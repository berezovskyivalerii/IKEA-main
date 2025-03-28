import React from 'react'
import './App.css'
import { MainComponent } from './pages/main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Page2 } from './pages/Registration'
import { Products } from './pages/Products'
import { Rooms } from './pages/Rooms'
import { Design } from './pages/Design'
import { MainPage } from './pages/MainPage'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainComponent />}>
                        <Route index element={<MainPage />} />
                        <Route path="main" element={<MainPage />} />
                        <Route path="products" element={<Products />} />
                        <Route path="rooms" element={<Rooms />} />
                        <Route path="design" element={<Design />} />
                    </Route>
                    <Route path="register" element={<Page2 />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
export default App
