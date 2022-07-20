import React, { useEffect, useState } from 'react'
import './Entry.css'
function Entry() {

    const [type, setType] = useState("");
    const [wallet, setWallet] = useState("");

    useEffect(() => {
      
        console.log(type)
    }, [type])
    

  return (
    <div className='entry'>
        <div className="entry-input-box">
            <select id='transaction-type' className='entry-input-box-select' value={type} onChange={e => setType(e.target.value)}>
                <option value="" disabled selected>Income / Expanse</option>
                <option value="Income" >Income</option>
                <option value="Expanse">Expanse</option>
                <option value="Transfer">Transfer</option>
            </select>

            <input type="text" placeholder='Reason'/>
            <input type="number" placeholder='Amount' />
            <input type="date" placeholder={new Date()}/>

            <select id='transaction-wallet' className='entry-input-box-select' value={wallet} onChange={e => setWallet(e.target.value)}>
                <option value="" disabled selected >From : Wallet</option>
                <option value="Income" >Cash</option>
                <option value="Expanse">Paytm</option>
                <option value="SBI">SBI</option>
            </select>

            <select id='transaction-wallet' className='entry-input-box-select' value={wallet} onChange={e => setWallet(e.target.value)}>
                <option value="" disabled selected >To : Wallet</option>
                <option value="Income" >Cash</option>
                <option value="Expanse">Paytm</option>
                <option value="SBI">SBI</option>
            </select>

            <input type="text" placeholder='Remarks (Optional)' />
            <button >Add Record</button>
        </div>

    </div>
  )
}

export default Entry