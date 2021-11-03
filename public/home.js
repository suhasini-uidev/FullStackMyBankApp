// import Card from "./card";
 
function Home() {
  return (
    <Card
      bgcolor="secondary"
      txtcolor="white"
      header="WELCOME to the  SECUREBANK"
      title="The Largest bank in  the town!"
      text="We provide a safe and secure banking by taking care of your money"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}


