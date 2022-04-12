import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { Categories, categoryState, toDoSelector } from "../atoms";
import { CreateToDo } from "./CreateToDo";
import { ToDo } from "./ToDo";

const Container = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
`;
const InnerContainer = styled.div`
  width: 1025px;
`;
const Content = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Header = styled.div`
  display: flex;
`;
const Title = styled.h1`
  font-size: 40px;
  padding: 10px;
`;
const Main = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 3px solid ${(props) => props.theme.textColor};
  padding: 10px 0;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;
const Select = styled.select`
  width: 120px;
  height: 40px;
  font-size: 20px;
  border-radius: 10px;
  padding: 5px;
  color: ${(props) => props.theme.bgColor};
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(Number(event.currentTarget.value as any));
  };
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);
  return (
    <Container>
      <InnerContainer>
        <Content>
          <Header>
            <Title>To Do List</Title>
          </Header>
          <Main>
            <Select value={category} onInput={onInput}>
              <option value={Categories.TO_DO}>To Do</option>
              <option value={Categories.DOING}>Doing</option>
              <option value={Categories.DONE}>Done</option>
            </Select>
            <CreateToDo />
          </Main>
        </Content>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </InnerContainer>
    </Container>
  );
}

export default ToDoList;
