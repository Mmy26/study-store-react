import logo from "./logo.svg";
import "./App.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton.jsx";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton.jsx";
import { SearchInput } from "./components/moleucules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templetes/HeaderOnly";
import { BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./components/templetes/DefaultLayout";
import { Router } from "./router/Router";

function App() {
  return <Router />;
}

export default App;
