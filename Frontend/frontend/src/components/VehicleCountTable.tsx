const VehicleCountTable = () => (
    <div className="widget col-span-2">
      <h2 className="text-lg font-semibold mb-4">Vehicle Count Table</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Vehicle Type</th>
            <th>Count</th>
            <th>Time Stamp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Car</td>
            <td>120</td>
            <td>12:30 PM</td>
          </tr>
          <tr>
            <td>Bike</td>
            <td>85</td>
            <td>12:32 PM</td>
          </tr>
          <tr>
            <td>Truck</td>
            <td>40</td>
            <td>12:35 PM</td>
          </tr>
          <tr>
            <td>Bus</td>
            <td>10</td>
            <td>12:40 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  
  export default VehicleCountTable;
  