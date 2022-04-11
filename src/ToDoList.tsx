import { useState } from "react";
import { RefactorActionInfo } from "typescript";
import { useForm } from "react-hook-form";

/* 
 function ToDoList() {
   const [toDo, setToDo] = useState("");
   const [toDoError, setToDoError] = useState("");
    const onChange = (event:React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setToDoError("");
        setToDo(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (toDo.length < 10) {
        return setToDoError("To do should be longer");
        }
        console.log("submit");
    };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChage={onChange} placeholder="Write a to do" />
        <button>Add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
} 
 */
/*
 {...register("toDO")} : spread (ES6 문법)
  -> register function이 반환하는 객체를 가져다가 input에 props로 주는 것
  watch : form의 모든 값들을 주시한다.
     -> 입력값을 추적할 수 있다.

  register는 state를 만들어 준다. 
    -> onChange이벤트 함수를 만들고, input에 porps를 줄 수도 있다.
*/

function ToDoList() {
  const { register, watch } = useForm();

  return (
    <div>
      <form>
        <input {...register("toDo")} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
