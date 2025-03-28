import React from 'react'
import { UpperNav } from '../components/UpperString'
import { Nav } from '../components/Navigation'
import { SearchBar } from '../components/SearchBar'
import { Title } from '../components/Title'
import { Outlet } from 'react-router-dom';

export class MainComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            backgroundImage: '/back1.png',
        }
    }

    render() {
        return (
            <section
                style={{
                    backgroundImage: `url(${this.state.backgroundImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}>
                <UpperNav />
                <Nav />
                <SearchBar />
                <Title heading="ВСЕ ДЛЯ ДОМУ" />
                
                <Outlet />
            </section>
        )
    }
}
