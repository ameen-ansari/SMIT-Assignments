import styles from "@/styles/Home.module.css";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Home() {
  let dataFromRedux :any= useSelector((store:any)=>console.log(store))
 
  const [loader, setloader] = useState(false);
  const [loader2, setloader2] = useState(false);
  const [data, setData] = useState<any>([]);
  let getData = async () => {
    try{
      setloader2(true)
      let res = await axios.get("https://fakestoreapi.com/products");
      let arr = [...res.data];
            setData(arr);
    }catch(e){
      alert(e)
    }finally{
      setloader2(false)
    }
  };
  let Router = useRouter();
  let postData = async () => {
    Router.push("/postdata");
  };
  let updateData = () => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 3000);
  };
  let deleteData = () => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 3000);
  };

  return (
    <div>
      <h1
        style={{
          position: "absolute",
          overflowY: "hidden",
          top: "50vh",
          left: "20vw",
        }}
      >
        {loader ? "Comming Soon..." : ""}
      </h1>
      <h1
        style={{
          position: "absolute",
          overflowY: "hidden",
          top: "50vh",
          left: "40vw",
        }}
      >
        {loader2 ? "Wait..." : ""}
      </h1>

      <h2 className={styles.ass}>Assignment #12</h2>
      <div className={styles.btns}>
        <button className={styles.getbtn} onClick={getData}>
          GetData
        </button>
        <button className={styles.getbtn} onClick={postData}>
          PostData
        </button>
        <button className={styles.getbtn} onClick={updateData}>
          Update
        </button>
        <button className={styles.getbtn} onClick={deleteData}>
          Delete
        </button>
      </div>
      <div className={styles.dataparent}>
        {data.map((doc: any, i: number) => {
          return (
            <div key={doc.id}>
              <h2 className={styles.color}>Item {doc.id}</h2>
              <h3 className={styles.color}>{doc.category}</h3>
              <img src={doc.image} alt="" width={225} height={225} />
              <h3 className={styles.color}>
                <span style={{ fontWeight: 1000 }}>Price</span>{" "}
                <strong>{doc.price} $</strong>
              </h3>
              <p className={styles.color} style={{ width: 250 }}>
                {doc.title}
              </p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
