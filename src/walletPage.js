import React from 'react'
import WalletCards from './WalletCards'
import './WalletPage.css'
function walletPage() {
  return (
    <div className='wallet-page'>
        <WalletCards />
        <WalletCards />
        <WalletCards />
        <WalletCards />
        <WalletCards />
        <WalletCards />
    </div>
  )
}

export default walletPage