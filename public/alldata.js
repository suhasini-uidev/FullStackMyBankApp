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
        users = data;
      });
  }, []);
  
  return (

    <Card
      bgcolor="info mx-auto"
      header="ALL DATA"
      body={
        <>
          <p> Bank user data :</p>
          <div className="table-responsive">
            <table className="card-table table">
              <thead className="table-info">
                  <tr>
                  <th>Name</th>
                  <th>Email</th>
                  </tr>
              </thead>
              <tbody>
                { users.map((user) => {
                    return (
                      <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                      </tr>
                    );}
                  )}
              </tbody>
          </table>
          </div>
        </>
      }
    />
  );
}
