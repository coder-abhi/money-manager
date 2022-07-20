import React, { useState,useEffect } from 'react'
import WalletCards from './WalletCards'
import { db } from './firebase';
import './WalletPage.css'
import {getDocs, collection} from 'firebase/firestore'
function WalletPage() {

  const [walletList, setWalletList] = useState([]);
  const walletCollections = collection(db, "Wallets");

  useEffect(() => {

    const getWalletList = async () => {
      const data = await getDocs(walletCollections);
      setWalletList(data.docs.map((item) => ({...item.data(), id:item.id})));
      // console.log(walletList);
    }

    getWalletList()
  }, [])

  return (
    <div className='wallet-page'>
      {
        walletList.map((item)=>{
          return <WalletCards amount={item.amount} name={item.name}/>
        })
      }
        {/* <WalletCards />
        <WalletCards />
        <WalletCards />
        <WalletCards />
        <WalletCards /> */}
    </div>
  )
}

export default WalletPage