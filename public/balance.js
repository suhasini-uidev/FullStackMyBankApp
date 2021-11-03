// import Card from "./card";

function Balance(){
    const ctx = React.useContext(UserContext);
    const [balance, setBalance] = React.useState(ctx.users[0].balance);
    const [activeuser, setActiveUser] = React.useState(ctx.users[0].name);
    return (
        <Card
            bgcolor = "secondary"
            header="Balance"
            body = {
                <>
                    Hello {activeuser}, your Available Balance is:<br/> 
                    ${balance} 
  
                    
                </>            
  
            }
  
  
  
  
        />
    );
  }