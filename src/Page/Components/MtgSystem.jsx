import React, { useEffect, useState } from "react";
import ListOfCompounding from "./ListOfCompaunding"
import { useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import NonMtgList from "./NonMtgList";
import SvgImg from "../../f.svg"


const Mtg = () => {
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

  
let handleClick = ()=>{
    let finalArray = [Number(data?.tAmount)];
    let init = Number(data?.tAmount);
    
    let loopInit = init * 2 ;
    let multiNumber = 0;
    
   if(multiNumber => loopInit){
          finalArray.push(multiNumber)
          loopInit =loopInit * 2
   }else{
    for (let i = 1; i < 100; i++) {
            if(multiNumber > loopInit){
                multiNumber = (i+loopInit + loopInit  * (Number(data?.bp)/100)).toFixed(2)
            }
    }
   }
   console.log(finalArray);

}





  
  return (
    <div className="container ">
        
        <button className="px-3 py-1 my-3 text-white bg-primary" onClick={()=> navigate('/')}>Go Back</button>
  

  <p><b className="text-danger">Page Locked By OWNER... </b></p>
  <div className="w-30 h-30 mx-auto item-center text-center">
  <img src={SvgImg} alt="down" style={{maxWidth : "450px" , maxHeight : "450px" }} />
  </div>
        


        {/* <button onClick={()=> navigate("/")} className="px-2 text-white bg-primary my-2 border-1 fs-5">GO HOME</button>
      <div className="row mx-auto" style={{ maxWidth: "350px" }}>
        <div className="col">
          <div>
            <div>
              <p>Enter Main Balance</p>
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
            Get Mtg List
          </button>
        </div>
      </div>
      {/* <div className="row">
        <NonMtgList Total={{finalList : finalList, initialAmount : data?.tAmount}}></NonMtgList>
      </div> */} 
    </div>
  );
};

export default Mtg;
