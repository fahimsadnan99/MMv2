import React, { useEffect, useState } from "react";
import ListOfCompounding from "./ListOfCompaunding"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NonMtgList from "./NonMtgList";

const NonMtg = () => {
    const navigate = useNavigate()
  const [data, setData] = useState({
    tp: "",
    tAmount: "",
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
    let initialInvestment = Number(data.tAmount);
    const brokerPercentage = Number(data.bp);
    const totalProfitTarget = Number(data.tp);
    
    let firstProfit = initialInvestment * (brokerPercentage / 100);
    let arrayList = [firstProfit.toFixed(2)]; // format firstProfit to 2 decimal places
    
    if (totalProfitTarget > arrayList[arrayList.length - 1]) {
      let i = 1;
      while (true) {
        let addProfit = (arrayList[i - 1] * 1) + (initialInvestment * (brokerPercentage / 100)); // convert string to number
        arrayList.push(addProfit.toFixed(2)); // format addProfit to 2 decimal places
        if (addProfit >= totalProfitTarget) {
          break;
        }
        i++;
      }
    }
    let lastOne = Number(arrayList[arrayList?.length-1]) + Number( firstProfit)
    setFinalList([...arrayList,lastOne])

    
}





  
  return (
    <div className="container">
        <button onClick={()=> navigate("/")} className="px-2 text-white bg-primary my-2 border-1 fs-5">GO HOME</button>
      <div className="row mx-auto" style={{ maxWidth: "350px" }}>
        <div className="col">
          <div>
            <div>
              <p>Enter Profit Target</p>
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
              <p>Enter Trade amount</p>
              <input
                type="number"
                value={data.tAmount}
                name="tAmount"
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
            Get NonMtg List
          </button>
        </div>
      </div>
      <div className="row">
        <NonMtgList Total={{finalList : finalList, initialAmount : data?.tAmount}}></NonMtgList>
      </div>
    </div>
  );
};

export default NonMtg;
