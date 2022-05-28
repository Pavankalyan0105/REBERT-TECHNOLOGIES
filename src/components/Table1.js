import { useContext } from 'react'
import { Context } from '../Contexts/Context';
import '../styles/table.css'


const Table1 = () => {

  const { table1 , setTable1 }  = useContext(Context)

  const handleChange = name => event => {
    setTable1({ ...table1, error: false, [name]: event.target.value });
  };

  return (
    <div>

      <h2  style={{ marginLeft:"10rem" }} >SUMMARY OF VALUATIONS</h2>

      <table>
      <tbody>

        <tr>  
            <th> SR.NO   </th>
            <th> PARTICULARS </th>
            <th> DETAILS </th>
        </tr>
        <tr>
          <td>1.</td>
          <td> Name & Address of  Client </td>
           <td>
             <textarea 
             value={table1.nameAddress} 
              onChange={handleChange("nameAddress")}
              rows={6}
              required
            />
            </td>
        </tr>

        <tr>
          <td>2.</td>
          <td> Carpet Area of Flat </td>
          <td>  <input type="number"  value={table1.carpetArea}  onChange = { handleChange("carpetArea") } required  /> </td>
        </tr>

        <tr>
          <td> 3. </td>
          <td> B/up Area of Flat </td>
          <td>  <input type="number"  value={table1.bupArea}  onChange = { handleChange("bupArea") } required /> </td>
        </tr>

        <tr>
          <td> 4. </td>
          <td>Year of Construction </td>
          <td>  <input type="number"  value={table1.yearOfConstruction} onChange = { handleChange("yearOfConstruction") } required/> </td>
        </tr>

        <tr>
          <td> 5. </td>
          <td>Fair Market Value   </td>
          <td>  <input type="nymber"  value={table1.marketValue}  onChange = { handleChange("marketValue") } required/> </td>
        </tr>

        <tr>
          <td> 6. </td>
          <td>Realizable Value    </td>
          <td>  <input type="number"  value={table1.realizedValue}  onChange = { handleChange("realizedValue") } required/> </td>
        </tr>

        <tr>
          <td> 7. </td>
          <td>Distressed Sale Value    </td>
          <td>  <input type="number"  value={table1.saleValue}  onChange = { handleChange("saleValue") } required/> </td>
        </tr>

        <tr>
          <td> 8. </td>
          <td>GOVT VALUE </td>
          <td>  <input type="number"  value={table1.govtValue}  onChange = { handleChange("govtValue") } required/> </td>
        </tr>

        </tbody>

      </table>

    </div>
  )
}

export default Table1;
