import {Route, BrowserRouter} from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Homes from './Components/Homes';
import Speaker from './Components/Speaker';
import Courses from './Components/Courses';
import Gallery from './Components/Gallery';
import Donate from './Components/Donate';
import Seminar from './Components/Seminar';
import './Styles/style.css'


const Router = () => {
    return (
        <BrowserRouter>
            <Header className="header"></Header>
            <Route exact path="/" component={Homes} />
            <Route exact path="/contact" component={Contact} />
            {/* <Route exact path="/about/divine-shiksha" component={Homes} /> */}
            <Route exact path="/about/speaker" component={Speaker} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/donate" component={Donate} />
            <Route exact path="/seminar" component={Seminar} />
            <Footer class="footer"></Footer>
        </BrowserRouter>
    )
}

export default Router;