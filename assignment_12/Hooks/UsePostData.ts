import logincss from "/styles/posttodo.module.css";
import axios from "axios";
import react, { useState } from "react";
import { useRouter } from "next/router";

export default function UsePostdata() {
  const [loader, setloader] = useState(false);
  const [values, setvalues] = useState<any>({
    title: "",
    price: " ",
    description: "",
    image: "",
    category: "",
  });
  let register = (e: any) => {
    let inputs = { [e.target.name]: e.target.value };
    setvalues({ ...values, ...inputs });
  };
  let Router = useRouter();
  let submit = async (e: any) => {
    e.preventDefault();
    try {
      setloader(true);
      let res = await axios.post("https://fakestoreapi.com/products", values, {
        headers: {
          ContentType: "application/json",
        },
      });
      // let res2 =await axios.get('https://fakestoreapi.com/products')
      Router.push("/");
      console.log(res.data);
      // console.log(res2.data);
    } catch (error) {
      alert(error);
    } finally {
      setloader(false);
    }
  };
  return{
    loader ,
    setloader ,
    values ,
    setvalues ,
    submit ,
    register
  }
}
