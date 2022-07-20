import React from 'react'
import './WalletCards.css'
// import WalletOfficial from './images/WalletOfficial.png'
function walletCards() {
    return (
        <div class="wallet-cards">
            <div class="dashboard-number-card">

                <img className='wallet-cards-img' src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/07.Wallet-256.png" alt="" />
                <div className="dashboard-number-right">
                    <div className='wallet-cards-title'>Title</div>
                    <div class="dashboard-number-value">$20,000</div>
                    <div>
                        <p class="dashboard-number-delta">
                            {/* {{ if (flag) }} */}
                            <i class="fa fa-arrow-up" aria-hidden="true"></i>
                            {/* {{ else}} */}
                            {/* {{ if (flag) }} */}
                            <i class="fa fa-arrow-down" aria-hidden="true"></i>
                            {/* {{if}} */}
                            {/* {{if}} */}
                            $3000(10%)
                        </p>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default walletCards