
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@/config/firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";

export let addData = createAsyncThunk("addData/Todo", async (arg1: any) => {
  let data = await addDoc(collection(db, "TODOS_BY_REDUX"), arg1);
  let docRef = doc(db, "TODOS_BY_REDUX", data.id);
  await updateDoc(docRef, {
    id: data.id,
  });
  let payload = {
    ...arg1,
    id: data.id,
  };
  return payload;
});

export let getData = createAsyncThunk("getData/Todo", async () => {
    try{
        let docs = await getDocs(collection(db, "TODOS_BY_REDUX"));
        let ToDo_Data: any = [];
        docs.forEach((doc) => {
            ToDo_Data.push(doc.data());
        });
        return ToDo_Data;
    }catch(err){
        alert(err)
    }finally{
        console.log('xyz');
        
    }
});

export let deleteData = createAsyncThunk("deleteData/Todo", async (e: any) => {
  let docRef = doc(db, "TODOS_BY_REDUX", e.id);
  try {
    await deleteDoc(docRef);
  } catch (error) {
    alert(error);
  }
  return e;
});

export let updateData = createAsyncThunk("updateData/Todo", async (e: any) => {
  let docRef = doc(db, "TODOS_BY_REDUX", e.id);
  try{
 await updateDoc(docRef, {
      value: e.value,
    });
    let adder = document.getElementById('adder') as HTMLSpanElement
    let updater = document.getElementById('updater') as HTMLSpanElement
    adder.style.display = 'block'
    updater.style.display = 'none'
  }catch(error){
    alert(error)
  }
  return e
});
