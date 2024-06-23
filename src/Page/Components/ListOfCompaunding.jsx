import React from 'react'

const List = ({Total}) => {
    console.log(Total);
  return (
    <div>
      <h4 className='border-3 border-bottom border-danger w-auto py-2'>Your Compounding List :-</h4>

      <table className="table table-striped">
        <thead>
            <tr>
                <td>Trade No.</td>
                <td>Amount</td>
                <td>Profit</td>
                <td>Total</td>
            </tr>
        </thead>
        <tbody className='fw-bold'>
            {
                Total?.map((item,ind)=>{
                    return (
                     (Total[ind + 1]  === undefined) ? <></>:
                    (<tr key={ind}>
                        <td className='text-info'>{ind + 1}</td>
                        <td className='text-success'>${Total[ind]}</td>
                        <td className='text-primary'>${(Total[ind + 1] - Total[ind]).toFixed(2)}</td>
                        <td className='text-primary'>${Total[ind + 1]}</td>
                    </tr>)
                    )
                    
                })
            
            }
           
        </tbody>
      </table>
       {Total?.length ? (<h4 className='mb-5 mt-3'><b>Total Profit : <span className='text-success'> $ {(Number(Total[Total?.length - 1]) - Number(Total[0])).toFixed(2)}</span></b></h4> ) : ""}
      
    </div>
  )
}

export default List