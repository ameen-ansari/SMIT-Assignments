import logincss from "/styles/posttodo.module.css";
import axios from "axios";
import react, { useState } from "react";
import { useRouter } from "next/router";
import UsePostdata from "../Hooks/UsePostData";
export default function postdata() {
  const { loader, setloader, values, setvalues, submit, register } =
    UsePostdata();
  return (
    <>
      <h1
        style={{
          position: "absolute",
          overflowY: "hidden",
          top: "50vh",
          left: "25vw",
        }}
      >
        {loader ? "Posting..." : ""}
      </h1>
      <div className={logincss.container}>
        <div className={logincss.login}>
          <div className={logincss.head}>
            <p>
              <span style={{ color: "#F46A06" }}> Post Requist </span>
            </p>
          </div>
          <div></div>
          <div className="w-100">
            <form className="w-100">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter Title"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="title"
                  value={values.title}
                  onChange={register}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Price"
                  name="price"
                  value={values.price}
                  onChange={register}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Description
                </label>
                <input
                  placeholder="Enter Description"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="description"
                  value={values.description}
                  aria-describedby="emailHelp"
                  onInput={register}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Cetagory
                </label>
                <input
                  placeholder="Enter Cetagory"
                  name="category"
                  type="text"
                  className="form-control"
                  value={values.category}
                  id="exampleInputPassword1"
                  onChange={register}
                />
                <label htmlFor="formFile" className="form-label">
                  Choose File
                </label>
                <input
                  onChange={(e: any) => {
                    setvalues({ ...values, image: e.target.files[0].name });
                  }}
                  className="form-control"
                  type="file"
                  id="formFile"
                />
              </div>
              <button
                onClick={submit}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
