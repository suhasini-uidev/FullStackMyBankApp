// import Card from "./card";

function Balance(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState("");
    const [balance, setBalance] = React.useState('');

    function validateUser(user){
        if (user === ""){
          setStatus("You are not authorized. please login");
          setTimeout(() => setStatus(""), 3000);
          return false;
        }
        return true;
    }

    function handleInput(){
        if (!validateUser(user, "user")) return;
        fetch(`/account/findOne/${user}`)
        .then(response => response.text())
        .then(text => {
            try {
                const data = JSON.parse(text);
                setStatus(text);
                setShow(false);
                setBalance(data.balance);
                acBalance=data.balance
                console.log('JSON:', data);
            } catch(err) {
                setStatus(text)
                console.log('err:', text);
            }
        });
      }

    return (
        <Card
            bgcolor = "info mx-auto"
            header="Balance"
            body = {
                show ? (
                <>
                <div>
                User Name (Email)
                <br />
                {user}
                <br />
                <button
                    type="submit"
                    className="btn btn-light  mx-auto d-block"
                    onClick={handleInput}>
                    Check Balance
                </button>
                <br />
                <p>{status}</p>
                </div>
             </>
            ) : (
                <>
                    Hello {user},   <br />
                    your Available Balance is: ${balance} 
                </>   
            )
            }        
        />
    );
  }