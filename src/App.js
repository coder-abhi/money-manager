import React, { useEffect, useState } from 'react'
import {db} from './firebase'
import {addDoc, collection, deleteDoc, doc, getDocs, Transaction, updateDoc} from "firebase/firestore"
import { async } from '@firebase/util';
function App() {
  const [transactions, setTransactions] = useState([]);
  const transCollections = collection(db, "Transactions")

  const [newName, setNewName] = useState("");
  const [newValue, setNewValue] = useState("");

  const addTransaction = async() => {
    console.log(newName)
    await addDoc(transCollections, {Name : newName, Value : newValue});
  }

  const updateTransaction = async (id, Value) => {
    const userTransation = doc(db,"Transactions",id);
    const newFields = {Value : Value+10};
    await updateDoc(userTransation , newFields);

  };
  const deleteTransaction = async (id) => {
    const userTransation = doc(db,"Transactions",id);

    await deleteDoc(userTransation)

  };

  useEffect(() => {

    const getTransaction = async () => {
      const data = await getDocs(transCollections);
      console.log(data);
      setTransactions(data.docs.map((item) => ({...item.data(), id:item.id})));
    }

    getTransaction()
  }, [])
  
  return (
    <div className='App'>
      <input type="text"  placeholder='Reason...' onChange={(event)=>{setNewName(event.target.value)}}/>
      <input type="number"  placeholder='Value...' onChange={(event)=>{setNewValue(event.target.value)}}/>
      <button onClick={addTransaction}>Add Transacion </button>
      <h1>Hello, World</h1>
      {transactions.map((item) => {
        return (
          <div> 
            {" "}
            <h3>Name : {item.Name}</h3>
            <h3>Value : {item.Value}</h3>
            <button onClick={() => {updateTransaction(item.id,item.Value)}}>Increase Value</button>
            <button onClick={() => {deleteTransaction(item.id)}}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default App