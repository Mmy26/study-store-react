import styled from "styled-components";
import { SearchInput } from "../moleucules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
export const Users = () => {
  const users = [...Array(10).keys()].map((val) => {
    return {
      id: val,
      name: `じゃけえ-${val}`,
      image: "https://source.unsplash.com/lFmuWU0tv4M",
      email: "aaaa@1111.com",
      phone: "000 - 000 - 1234",
      company: {
        name: "テスト株式会社",
      },
      website: "https://google.com",
    };
  });
  return (
    <SContainer>
      <h2>User一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
