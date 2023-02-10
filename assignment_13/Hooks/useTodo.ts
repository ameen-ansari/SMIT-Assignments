import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, getData, updateData } from "@/store/reducers";
// import { doDelete } from "@/store/reducers";

const useTodo = () => {
  let data: any = useSelector((store: any): any => store.reducers.slice1);
  const dispatch: any = useDispatch();
  const [updateRef, setUpdateRef] = useState({});
  const [input, setInput] = useState<any>({
    value: "",
  });
  const addTodoH = () => {
    dispatch(addData(input));
    setInput({ value: "" });
  };

  useEffect(() => {
    dispatch(getData());
  }, []);
  const inputH = (e: any) => {
    setInput({
      ...input,
      value: e.target.value,
    });
  };
  const goGithub = () => {
    window.open("https://github.com/ameen-ansari/AppFromRedux", "_blank");
  };

  const deleteH = (e: any) => {
    dispatch(deleteData(e));
  };
  const updateH = (e: any) => {
    setInput({ value: e.value });
    setUpdateRef( e );
    let adder = document.getElementById("adder") as HTMLSpanElement;
    let updater = document.getElementById("updater") as HTMLSpanElement;
    adder.style.display = "none";
    updater.style.display = "block";
  };
  let updateTodoH = () => {
    setUpdateRef( {...updateRef, value: input.value });
    dispatch(updateData(updateRef));
  };

  return { input, updateTodoH, addTodoH, inputH, goGithub, deleteH, updateH };
};
export default useTodo;
