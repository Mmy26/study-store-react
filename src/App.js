import logo from "./logo.svg";
import "./App.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton.jsx";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton.jsx";
import { SearchInput } from "./components/atoms/moleucules/SearchInput";

function App() {
  return (
    <div className="App">
      <PrimaryButton children={"検索"}></PrimaryButton>
      <SecondaryButton></SecondaryButton>
      <br />
      <SearchInput />
    </div>
  );
}

export default App;
