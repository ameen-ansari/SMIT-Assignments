import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, getData, updateData } from "@/store/reducers";
import { doDelete } from "@/store/reducers";

const useTodo = () => {
  let data: any = useSelector((store: any): any => store.reducers.slice1);
  const [TodoData, setTodoData] = useState([])
  const dispatch: any = useDispatch();
  const [input, setInput] = useState<any>({
    value: "",
  });
  const addTodoH = () => {
    dispatch(addData(input));    
    // setInput({ value: "" });
  };

  useEffect(() => {
   let mydata =  dispatch(getData());
   console.log(mydata);
   
  }, []);
  const inputH = (e: any) => {
    setInput({
      ...input,
      value: e.target.value,
    });
  };
  const goGithub = () => {
    // window.open("https://github.com/ameen-ansari/AppFromRedux", "_blank");
    console.log(data); 
  };

  const deleteH = (e:any) => {
dispatch(deleteData(e))
dispatch(doDelete(e))
}
const updateH = (e:any) => {
    dispatch(updateData(e))

  }

  return { input, addTodoH, inputH, goGithub , deleteH , updateH };
};
export default useTodo;
