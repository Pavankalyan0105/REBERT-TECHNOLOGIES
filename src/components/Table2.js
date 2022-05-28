import React,{useContext} from 'react'
import { Context } from '../Contexts/Context';

import '../styles/table.css'


const Table2 = () =>  {
  
  const { table2 , setTable2 }  = useContext(Context)
  

  const handleChange = name => event => {
    setTable2({ ...table2, [name]: event.target.value });
  };

  

  return (
    <div>

        <h2>VALUATION  REPORT  OF  RESIDENTIAL FLAT & PREMISE</h2>
        <table>
          <tbody>
        <tr>  
            <th> SR.NO   </th>
            <th> PARTICULARS </th>
            <th> DETAILS </th>
        </tr>

        <tr>
          <td>1.</td>
          <td> Name of & Address of Unit</td>
          <td>
             <textarea 
              onChange={handleChange("nameAddress")}
              value={table2.nameAddress} 
              rows={6}
            />
            </td>
        </tr>

        <tr>
          <td>2.</td>
          <td> Defined Purpose </td>
          <td>  <input type="text" value={table2.purpose  }  onChange = { handleChange("purpose") } required /> </td>
        </tr>


        <tr>
          <td>3.</td>
          <td> Brief Particulars of Unit  </td>
        </tr>

        <tr>
          <td></td>
          <td> *  &nbsp; &nbsp; Type of Property  </td>
          <td>  <input type="text" value={table2.propertyType}  onChange = { handleChange("propertyType") } required/>  </td>
        </tr>

        <tr>
          <td></td>
          <td> * &nbsp; &nbsp; Type of Property  </td>
          <td>  <input type="text" value={table2.propertyNature}  onChange = { handleChange("propertyNature") } required/>  </td>
        </tr>

        <tr>
          <td></td>
          <td> *  &nbsp; &nbsp; Carpet Area 	  </td>
          <td>  <input type="number" value={table2.carpetArea}  onChange = { handleChange("carpetArea") } required/>  </td>
        </tr>

        <tr>
          <td></td>
          <td> * &nbsp; &nbsp; Latitude &Longitude  	  </td>
          <td>  <input type="text" value={table2.lattitudeLongitude}  onChange = { handleChange("lattitudeLongitude") } required/>  </td>
        </tr>

        

        
        <tr>
          <td>4.</td>
          <td>  The brief details of location of Resi. Flat .  </td>
        </tr>

        <tr>
          <td></td>
          <td>  Direction	  </td>
          <td>  Details </td>
        </tr>    

       

        <tr>
          <td></td>
          <td>  Towards East     	  </td>
          <td>  <input type="text" value={table2.towardsEast}  onChange = { handleChange("towardsEast") }/>  </td>
        </tr>

        <tr>
          <td></td>
          <td>  Towards West     	  </td>
          <td>  <input type="text" value={table2.towardsWest}  onChange = { handleChange("towardsWest") }/>  </td>
        </tr>

        <tr>
          <td></td>
          <td>  Towards North     	  </td>
          <td>  <input type="text" value={table2.towardsNorth}  onChange = { handleChange("towardsNorth") }/>  </td>
        </tr>

        <tr>
          <td></td>
          <td>  Towards South     	  </td>
          <td>  <input type="text" value={table2.towardsSouth}  onChange = { handleChange("towardsSouth") }/>  </td>
        </tr>
          </tbody>

        </table>

    </div>
  )
}

export default Table2;
