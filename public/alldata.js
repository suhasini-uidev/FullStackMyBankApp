// import Card from "./card";

function AllData() {
  const [data, setData] = React.useState('');
  React.useEffect(() => {
    //fetch all accounts from API
    fetch(`/account/all`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(JSON.stringify(data));
      });
  }, []);
  
  return (

    <Card
      bgcolor="danger mx-auto"
      header="ALL DATA"
      body={
        <>
          <p> Bank user data :</p>
              <div className="table">
              <table className="table">
                     <thead>
                       <tr>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Password</th>
                         </tr>
                       </thead>
              <tbody>
              {data}
              {/* var parsedJSON = JSON.parse(data);
              for (int i=0;i<parsedJSON.length;i++){
                <tr key={parsedJSON.[i].password}>
                      <td>{parsedJSON.[i].name}</td>
                      <td>{parsedJSON.[i].email}</td>
                      <td>{parsedJSON.[i].password}</td>
              } */}
              </tbody>
            </table>
          </div>
        </>
      }
    />
  );
}
