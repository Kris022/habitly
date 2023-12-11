import "./HabitView.css"

const HabitView = () => {
    return ( 
        <div className="table-container">

       <table>
        <tr>
            <th>HABIT</th>
            <th>MON</th>
            <th>TUE</th>
            <th>WED</th>
            <th>THU</th>
            <th>FRI</th>
            <th>SAT</th>
            <th>SUN</th>
        </tr>
        <tr>
            <td>habit #1</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
        </tr>
        <tr>
            <td>habit #2</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
        </tr>
        <tr>
            <td>habit #3</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
        </tr>
       </table>
       </div>
     );
}
 
export default HabitView;