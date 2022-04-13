import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, IToDo, toDoState } from "../atoms";

const Container = styled.div`
  padding: 5px;
  width: 100%;
`;
const Content = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;
const Icon = styled.div`
  font-size: 20px;
  padding: 0 5px;
`;
const TextBox = styled.span`
  height: 35px;
  font-size: 25px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;
const BtnBox = styled.div`
  padding: 5px 0;
  width: 170px;
  display: flex;
  justify-content: space-around;
`;
const Button = styled.button`
  padding: 5px;
  font-size: 14px;
  border-radius: 20px;
  color: ${(props) => props.theme.bgColor};
  &:hover {
    border: 2px solid ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.bgColor};
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: Number(name) };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const DeleteClick = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <Container>
      <Content>
        <TextBox>
          <Icon>🍑</Icon>
          {text}
        </TextBox>
        <BtnBox>
          {category !== Categories.TO_DO && (
            <Button name={Categories.TO_DO + ""} onClick={onClick}>
              To Do
            </Button>
          )}
          {category !== Categories.DOING && (
            <Button name={Categories.DOING + ""} onClick={onClick}>
              Doing
            </Button>
          )}
          {category !== Categories.DONE && (
            <Button name={Categories.DONE + ""} onClick={onClick}>
              Done
            </Button>
          )}
          <Button onClick={DeleteClick}>Delete</Button>
        </BtnBox>
      </Content>
    </Container>
  );
}
