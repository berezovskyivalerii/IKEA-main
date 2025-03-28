import { LoginForm2 } from '../components/LoginForm'
import { Image } from '../components/Image'

export function Page2(props) {
    return (
        <div className="page1-container">
            <div className="image-column">
                <h1 className="header-image">заповніть вхід до
                облікового запису</h1>
                <Image url="image2.png" alt="pic" className="image-left2"/>
            </div>

            <div className="form-column2">
                <LoginForm2 />
            </div>
        </div>
    )
}
