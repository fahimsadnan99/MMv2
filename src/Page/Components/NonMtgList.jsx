import React from 'react'

const NonMtgList = ({Total}) => {


  console.log(Total);
  

  return (
    <div>
      <h4 className='border-3 border-bottom border-danger w-auto py-2'>Your  NonMtg List :-</h4>

      <table className="table table-striped">
        <thead>
            <tr>
                <td>Trade</td>
                <td>Amount</td>
                <td>Profit</td>
                <td>Total</td>
            </tr>
        </thead>
        <tbody className='fw-bold'>
            {
                Total?.finalList?.map((item,ind)=>{
                    return (
                     <tr key={ind}>
                        <td className='text-info'>{ind + 1}</td>
                        <td className='text-danger'>${Total?.initialAmount}</td>
                        <td className='text-success'>${Total?.finalList[0]}</td>
                        <td className='text-primary'>${item}</td>
                    </tr>
                    )
                })
            
            }
           
        </tbody>
      </table>
      {
        Total?.finalList?.length ? (<div>
          <h5>TOTAL EARNING : <span className='text-success pb-5 pt-3'>${(Total?.finalList[Total?.finalList?.length - 1] - Total?.initialAmount).toFixed(2)}</span></h5>
          
        </div>) : ""
      }
          
    </div>
  )
}

export default NonMtgList