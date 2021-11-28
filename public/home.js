// import Card from "./card";
 
function Home() {
  const [data, setData] = React.useState('');
  //One Dummy call at the start of the session to fill the users
  //.map doesn't work as it expects the data to there in the div.
  //hack but should solve the purpose.
  React.useEffect(() => {
        
    // fetch all accounts from API
    fetch('/account/all')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(JSON.stringify(data));
            users=data;                
        });

  }, []);
  return (
    <Card
      bgcolor="secondary mx-auto"
      txtcolor="white"
      header="WELCOME to the  SECUREBANK"
      title="The Largest bank in  the town!"
      text="We provide a safe and secure banking by taking care of your money"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}

