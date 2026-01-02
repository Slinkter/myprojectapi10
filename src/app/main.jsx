import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter } from "react-router-dom";
import App from "@/app/App.jsx";
import "@/app/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter basename="/myprojectapi10/">
            <App />
        </BrowserRouter>
    </Provider>
);
