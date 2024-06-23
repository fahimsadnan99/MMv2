import React, { useEffect, useState } from "react";
import ListOfCompounding from "./ListOfCompaunding"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Componding = () => {
    const navigate = useNavigate()
  const [data, setData] = useState({
    tp: "",
    comAmount: "",
    bp : "",
  });

  const [finalList,setFinalList] = useState([])
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  
const handleClick = ()=>{
  const initialInvestment = Number(data.comAmount);
const brokerPercentage = Number(data.bp);
const totalProfitTarget = Number(data.tp);

let currentInvestment = initialInvestment;
let profitHistory = [currentInvestment];

let i = 0;
do {
  const profit = currentInvestment * (brokerPercentage / 100) + initialInvestment;
  currentInvestment += profit;
  profitHistory.push(profit.toFixed(2));
  i++;
} while ((profitHistory[profitHistory.length-1] - initialInvestment)< totalProfitTarget && i<Infinity);

  setFinalList(profitHistory)
    
}





  
  return (
    <div className="container">
        <button onClick={()=> navigate("/")} className="px-2 text-white bg-primary my-2 border-1 fs-5">GO HOME</button>
      <div className="row mx-auto" style={{ maxWidth: "350px" }}>
        <div className="col">
          <div>
            <div>
              <p>Enter Profit Amount</p>
              <input
                type="number"
                value={data.tp}
                name="tp"
                className="form-control w-10"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div>
              <p>Enter Compounding amount</p>
              <input
                type="number"
                value={data.comAmount}
                name="comAmount"
                className="form-control w-10"
                onChange={handleChange}
                min={2}
                max={99}
                required
              ></input>
            </div>
            <div>
              <p>Broker % percentage</p>
              <input
                type="number"
                value={data.bp}
                name="bp"
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
            Get Componding List
          </button>
        </div>
      </div>
      <div className="row">
        <ListOfCompounding Total={finalList}></ListOfCompounding>
      </div>
    </div>
  );
};

export default Componding;
