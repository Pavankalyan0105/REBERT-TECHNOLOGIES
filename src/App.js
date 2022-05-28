import { useState } from "react"
import Table1 from "./components/Table1"
import Table2 from "./components/Table2"

import {Context} from "./Contexts/Context"

function App() {

  const [table1 , setTable1] = useState({
    nameAddress:"",
    contact:"",
    carpetArea:"",
    bupArea:"",
    yearOfConstruction:"",
    marketValue:"",
    realizedValue:"",
    saleValue:"",
    govtValue:""
  })

  const [table2 , setTable2] = useState({
    nameAddress:"",
    purpose:"",
    carpetArea:"",
    propertyType:"",
    propertyNature:"",
    carpetArea:"",
    lattitudeLongitude:"",
    documents:"",
    towardsWest:"",
    towardsEast:"",
    towardsNorth:"",
    towardsSouth:""
  })

  const handleSubmit = (e) => {
      e.preventDefault();
      alert("Details submitted successfully");

      console.log("table1 "+ table1);
      console.log("table2 "+ table2);

      setTable1({
        nameAddress:"",
        contact:"",
        carpetArea:"",
        bupArea:"",
        yearOfConstruction:"",
        marketValue:"",
        realizedValue:"",
        saleValue:"",
        govtValue:""
      })

      setTable2({
        nameAddress:"",
        purpose:"",
        carpetArea:"",
        propertyType:"",
        propertyNature:"",
        carpetArea:"",
        lattitudeLongitude:"",
        documents:"",
        towardsWest:"",
        towardsEast:"",
        towardsNorth:"",
        towardsSouth:""
      })

  }

  return (
    <div className="App">
      <Context.Provider value={{
        table1 ,  setTable1 ,
        table2 ,  setTable2 
      }}>
        <form onSubmit={handleSubmit}>

        <Table1/>
        <Table2/>
        <button type="submit">Submit</button>

        </form>
       


      </Context.Provider>
    </div>
  );
}
export default App;
