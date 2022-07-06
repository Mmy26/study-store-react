import logo from "./logo.svg";
import "./App.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton.jsx";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton.jsx";
import { SearchInput } from "./components/moleucules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

const user = {
  name: "じゃけえ",
  image: "https://source.unsplash.com/lFmuWU0tv4M",
  email: "aaaa@1111.com",
  phone: "000 - 000 - 1234",
  company: {
    name: "テスト株式会社",
  },
  website: "https://google.com",
};
function App() {
  return (
    <div className="App">
      <PrimaryButton children={"検索"}></PrimaryButton>
      <SecondaryButton></SecondaryButton>
      <br />
      <SearchInput />
      <br />
      <UserCard user={user} />
    </div>
  );
}

export default App;
