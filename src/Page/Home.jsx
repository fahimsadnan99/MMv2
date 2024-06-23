import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaTelegram ,FaCloudDownloadAlt} from "react-icons/fa";


const Home = () => {
const navigate = useNavigate()

function redirectToWebsite() {
  window.location.href = "https://t.me/tradersadnan1";
}

function driveRedirect(){
  window.location.href = "https://drive.google.com/drive/folders/1HKlFgpLkI63XaUkVFbkbymKGjNuRzH38?usp=sharing"
}
    
  return (
    <div>
        
        <div className='container mt-2'>
          <h4 className='text-info'>ULTIMATE MONEY MANAGEMENT</h4>
              <div className='row row-cols-4 '>
                <div className='col-12 col-md-6 col-lg-3 mt-2'>
                   <div className='bg-primary text-white p-1 fs-5 text-center mt-md-3 mt-xs-3' role='button' 
                   onClick={()=>navigate("/moneyManagement")}
                   >Money Management</div>
                </div>
                <div className='col-12 col-md-6 col-lg-3 mt-2'>
                <div className='bg-primary text-white p-1 fs-5 text-center mt-md-3 mt-xs-3' 
                onClick={()=>navigate("/compounding")}
                role='button'>Compounding</div>
                </div>
                <div className='col-12 col-md-6 col-lg-3 mt-2'>
                <div className='bg-primary text-white p-1 fs-5 text-center mt-md-3 mt-xs-3'
                onClick={()=>navigate("/nonMtg")}
                role='button'>NoN MTG</div>
                </div>


                <div className='col-12 col-md-6 col-lg-3 mt-2'>
                <div className='bg-primary text-white p-1 fs-5 text-center mt-md-3 mt-xs-3'
                onClick={()=>redirectToWebsite()}
                role='button'>TG</div>
                </div>

                <div className='col-12 col-md-6 col-lg-3 mt-2'>
                <div className='bg-primary text-white p-1 fs-5 text-center mt-md-3 mt-xs-3'
                onClick={()=>navigate("/Mtg")}
                role='button'>MTG System</div>
                </div>


                <div className='col-12 col-md-6 col-lg-3 mt-2'>
                <div className='bg-primary text-white p-1 fs-5 text-center mt-md-3 mt-xs-3'
                onClick={()=>navigate("/mtg")}
                role='button'>Future Signal Maker</div>
                </div>

                <div className='col-12 col-md-6 col-lg-3 mt-2'>
                <div className='bg-primary text-white p-1 fs-5 text-center mt-md-3 mt-xs-3'
                onClick={()=>driveRedirect()}
                role='button'><FaCloudDownloadAlt className='mx-2'></FaCloudDownloadAlt>EXCEL Sheet</div>
                </div>
              </div>

              <button className='telegram' onClick={()=> redirectToWebsite()}><FaTelegram></FaTelegram><span className='fs-4'> Join Telegram Click</span></button>
        </div>
    </div>
  )
}

export default Home