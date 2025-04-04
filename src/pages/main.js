import React from 'react'
import { UpperNav } from '../components/UpperString'
import { Nav } from '../components/Navigation'
import { SearchBar } from '../components/SearchBar'
import { Title } from '../components/Title'
import { Outlet } from 'react-router-dom'
import { PhotoLink } from '../components/PhotoLink'

export class MainComponent extends React.Component {
    render() {
        return (
            <>
                <section className="main-section">
                    <UpperNav />
                    <Nav />
                    <SearchBar />
                    <Title heading="ВСЕ ДЛЯ ДОМУ" />

                    <Outlet />
                </section>
                <div className="wrapper">
                    <section className="second-section">
                        <h3 id="second-section-header">
                            ЗНАЙДИ ТЕ, ЩО ШУКАЕШ!
                        </h3>
                        <div className="gallery">
                            <PhotoLink
                                text="НАША НОВА КОЛЕКЦІЯ"
                                url="./photolink1.jpg"
                                classspecific="photo-link-container"
                            />
                            <PhotoLink
                                text="НАШІ НАЙКРАЩІ ПРОПОЗИЦІЇ"
                                url="./pgotolink2.jpg"
                                classspecific="photo-link-container-small"
                            />
                            <PhotoLink
                                url="./photolink3.jpg"
                                classspecific="photo-link-container-side"
                            />
                        </div>
                    </section>
                </div>
            </>
        )
    }
}
