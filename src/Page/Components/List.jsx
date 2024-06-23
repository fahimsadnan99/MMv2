import React from 'react'

const List = ({Total}) => {


  let lastProfit = Number(Total[Total?.length - 1]?.amount)
  let initialAmount = Number(Total[0]?.amount) - Number(Total[0]?.profit)
  let profitPercentage = ((lastProfit - initialAmount) / initialAmount) * 100
  

  return (
    <div>
      <h4 className='border-3 border-bottom border-danger w-auto py-2'>Your Money Management List :-</h4>

      <table className="table table-striped">
        <thead>
            <tr>
                <td>Day</td>
                <td>SL</td>
                <td>TP</td>
                <td>Balance</td>
            </tr>
        </thead>
        <tbody className='fw-bold'>
            {
                Total?.map((item,ind)=>{
                    return (
                     <tr key={ind}>
                        <td className='text-info'>{ind + 1}</td>
                        <td className='text-danger'>${ind == 0 ? item?.profit : Total[ind-1]?.profit }</td>
                        <td className='text-success'>${item.profit}</td>
                        <td className='text-primary'>${item.amount}</td>
                    </tr>
                    )
                })
            
            }
           
        </tbody>
      </table>
      {
        Total?.length ? (<div>
          <h6>TOTAL EARNING : <span className='text-success'>${(lastProfit - initialAmount).toFixed(2)}</span></h6>
          <h6>TOTAL Percentage Gain : <span className='text-success'>{profitPercentage.toFixed(2)}%</span></h6>
        </div>) : ""
      }
          
    </div>
  )
}

export default List