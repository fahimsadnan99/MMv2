import React, { useEffect, useState } from "react";
import List from "./List";
import { useNavigate } from "react-router-dom";

const MoneyManagement = () => {
    const navigate = useNavigate()
  const [data, setData] = useState({
    amount: "",
    percentage: "",
    day: "",
  });


  const [totalList,setTotalList] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = ()=>{
    const {amount, percentage, day} = data;
    if(amount !== 0 || percentage !==0 || day !== 0){
         let total =   compoundInterest(Number(amount),Number(percentage),Number(day));
         setTotalList(total)
    
    }
  }

  function compoundInterest(initialAmount, dailyRate, days) {
    let currentAmount = initialAmount;
    let dailyInterest = 0;
    let list = []
    
    for (let day = 1; day <= days; day++) {
        dailyInterest = currentAmount * dailyRate / 100;
        currentAmount += dailyInterest;
        
        list.push({
            amount :  currentAmount.toFixed(2),
            profit : dailyInterest.toFixed(2),
        })
    }
    
    return list;
}


compoundInterest()

  return (
    <div className="container">
        <button onClick={()=> navigate("/")} className="px-2 text-white bg-primary my-2 border-1 fs-5">GO HOME</button>
      <div className="row mx-auto" style={{ maxWidth: "350px" }}>
        <div className="col">
          <div>
            <div>
              <p>Enter Amount</p>
              <input
                type="number"
                value={data.amount}
                name="amount"
                className="form-control w-10"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div>
              <p>Enter Daily % (percentage)</p>
              <input
                type="number"
                value={data.percentage}
                name="percentage"
                className="form-control w-10"
                onChange={handleChange}
                min={2}
                max={99}
                required
              ></input>
            </div>
            <div>
              <p>Days</p>
              <input
                type="number"
                value={data.day}
                name="day"
                className="form-control w-10"
                onChange={handleChange}
                min={2}
                max={99}
                required
              ></input>
            </div>
          </div>
          <button className="mt-3 bg-primary text-white px-3 fs-5 rounded border-1 "
          onClick={handleClick}
          >
            Get List
          </button>
        </div>
      </div>
      <div className="row">
        <List Total={totalList}></List>
      </div>
    </div>
  );
};

export default MoneyManagement;
