import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {
    
    const searchQuery = useSearchParams()[0]
    const refNum = searchQuery.get("reference")

  return (
    <div style={{textAlign:"center",marginTop:"10%"}}>
        <h1>Payment Successfull!</h1>
        <p>Reference No.{refNum}</p>
    </div>
  )
}

export default PaymentSuccess