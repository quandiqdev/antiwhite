import AppRoute from "./components/util/routes/routes";
import {BrowserRouter} from "react-router-dom";
import "./assets/css/style.css"

function App() {
    return (
        <BrowserRouter>
            <AppRoute/>
        </BrowserRouter>
    );
}

export default App;
