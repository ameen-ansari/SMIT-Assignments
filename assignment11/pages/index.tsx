import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../config/Firebase";

export default function Home() {
  const [data, setdata] = useState<string[]>([]);
  const [input, setinput] = useState<A>({
    dt: new Date(),
    todo: "",
  });
  const [doneTodos, setDoneTodos] = useState<string[]>([]);
  type A = {
    todo?: string;
    dt: object;
  };
  const save = async () => {
    // console.log(input);
    // if (input.todo) {
    //   try {
    //     await addDoc(collection(db, "todos"), input);
    //     alert("saved");
    //     setinput({ ...input, todo: "" });
    //   } catch (error) {
    //     alert(error);
    //   }
    // } else {
    //   alert("Invalid");t
    // }
  };
  useEffect(() => {
    let getData = async () => {
      let arr:any = [];
      let QS = await getDocs(collection(db, "todos"));
      QS.forEach((doc) => {
        arr.push(doc.data());
      });
      setdata(arr)
    };
    getData();
console.log(data);
    
  }, []);

  let checked = (e: string) => {
    //   let donedata: string[] = [...doneTodos, e];
    //   setDoneTodos(donedata);
    //   let filteredarr = data.filter((item) => {
    //     return item != e;
    //   });
    //   setdata(filteredarr);
  };

  let cancel = (e: string) => {
    //   let filteredarr = data.filter((item) => {
    //     return item != e;
    //   });
    //   setdata(filteredarr);
  };

  let reset = () => {
    setDoneTodos([]);
  };

  return (
    <div className={styles.parent}>
      <div className={styles.todo}>
        <div className={styles.manager}>
          <input
            onChange={(e) => {
              setinput({ ...input, todo: e.target.value });
            }}
            value={input.todo}
            type="text"
            placeholder="Add A Task Here..."
          />
          <span onClick={save}>+</span>
        </div>
        <div className={styles.todos}>
          {data.map((item, i) => {
            return (
              <div key={i}>
                <p>{item?.dt}</p>
                <p>{item?.todo}</p>
                <div>
                  <span onClick={() => checked(item)}>&#10004;</span>
                  <span onClick={() => cancel(item)}>&#10006;</span>
                </div>
              </div>
            );
          })}
          {data.length === 0 ? <p>Add Some Task Now...</p> : <p></p>}
          {/* <hr className={styles.hr} />

          {doneTodos.map((item, i) => {
            return (
              <div
                key={i}
                style={{
                  backgroundColor: "rgb(92, 133, 217)",
                  color: "#FFFFFF",
                }}
              >
                <p>{item}</p>
                <div>
                  <span
                    style={{
                      backgroundColor: "#FFFFFF",
                      color: "rgb(92, 133, 217)",
                    }}
                  >
                    &#10004;
                  </span>
                </div>
              </div>
            );
          })}
          {doneTodos.length !== 0 ? (
            <button onClick={reset}>Clear</button>
          ) : (
            <p></p>
          )} */}
        </div>
      </div>
    </div>
  );
}
