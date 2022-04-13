import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atoms";

const Container = styled.div`
  width: 85%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Form = styled.form`
  padding: 0;
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    padding: 5px 0;
  }
`;
const Input = styled.input`
  width: 90%;
  height: 40px;
  border-radius: 20px;
  font-size: 18px;
  padding: 10px;
  outline-color: ${(props) => props.theme.focusColor};
  color: ${(props) => props.theme.focusColor};
  background: ${(props) => props.theme.textColor};
  &::placeholder {
    padding: 10px;
    opacity: 0.3;
    color: ${(props) => props.theme.focusColor};
  }
`;
const Button = styled.button`
  width: 60px;
  height: 40px;
  border-radius: 20px;
  font-size: 20px;
  color: ${(props) => props.theme.bgColor};
  background: ${(props) => props.theme.textColor};
  &:hover {
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.bgColor};
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-left: 5px;
  }
`;

interface IForm {
  toDo: string;
}

export function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    // console.log("add to do", toDo.toDo);
    //toDos.push() // 기존의 toDOs를 nutate하고 있기때문에 사용할 수 없고, 새로운 toDos를 만들어야한다.
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(handleValid)}>
        <Input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
          placeholder="Write a to do..."
        />
        <Button>Go</Button>
      </Form>
    </Container>
  );
}
