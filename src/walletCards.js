import React from 'react'
import './walletCards.css'
function walletCards() {
    return (
        <div class="wallets">
            <div class="cards">
                <div class="cards-circle">circle</div>
                <div class="cards-right">
                    <h3 class="cards-title">Title</h3>
                    <div class="cards-balance">$100</div>
                </div>
            </div>
        </div>
    )
}

export default walletCards