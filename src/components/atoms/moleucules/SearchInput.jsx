import styled from "styled-components";
import { PrimaryButton } from "../button/PrimaryButton";
import { Input } from "../input/Input";

export const SearchInput = () => {
  return (
    <div>
      <SContaniner>
        <Input placeholder="検索条件を入力" />
        <SButtonWrapper>
          <PrimaryButton>検索</PrimaryButton>
        </SButtonWrapper>
      </SContaniner>
    </div>
  );
};

const SContaniner = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
