import './App.css';
function App() {
return (

<div className="table1">
   <h2 className = "h2">list of people</h2>
    <table>
        <thead>
            <tr>
                <th>userId</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
           </tr>
        </thead>
        <tr className = "row">
            <td>101</td>
            <td>vipin</td>
            <td>19</td>
            <td>Male</td>
        </tr>
        <tr>
            <td>102</td>
            <td>Megha</td>
            <td>32</td>
            <td>Female</td>
        </tr>
        <tr>
            <td>103</td>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
        </tr>
    </table>
</div>
);
}

export default App;
