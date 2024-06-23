import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Page/Home"
import MoneyManagement from "./Page/Components/MoneyManagement";
import Compounding from "./Page/Components/Compounding";
import NotMtg from "./Page/Components/NonMtg"
import Mtg from "./Page/Components/MtgSystem";

export const Router = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        children : [
            {
            path : "/",
            element : <Home></Home>
        },
        {
            path:"/moneyManagement",
            element : <MoneyManagement></MoneyManagement>
        },
        {
            path:"/compounding",
            element : <Compounding></Compounding>
        },
        {
            path:"/nonMtg",
            element : <NotMtg></NotMtg>
        },
        {
            path:"/Mtg",
            element : <Mtg></Mtg>
        },
    ]
    }
])