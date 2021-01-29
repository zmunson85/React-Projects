import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";//after npm i bootstrap, this is the second requirement to use bootstrap styling

//import all the components for the blocks
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import SubContents from "./components/SubContents";
import Advertisement from "./components/Advertisement";

function App() {
    return (
        <div className="p-2" style={{ backgroundColor: "#dddddd" }}>
            <Header />
            <div className="d-flex col-12 p-0 my-4 justify-content-right">
                <Navigation />
                <Main>
                    <SubContents />
                    <SubContents />
                    <SubContents />
                    <Advertisement />
                </Main>
            </div>

        </div>
    );
}

export default App;