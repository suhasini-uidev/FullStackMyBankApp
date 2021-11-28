// import Card from "./card";

function Deposit() {
  const [show, setShow] = React.useState(true);  
  const [status, setStatus] = React.useState("");
  const [deposit, setDeposit] = React.useState("");

  function validateUser(user){
    if (user === ""){
      setStatus("You are not authorized. please login");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function validateDeposit(deposit) {
    if (deposit <= 0) {
        setStatus("It shouldn't be negative");
        setTimeout(() => setStatus(""), 3000);
        return false;
    } else if (deposit > 0) {
        return true;  
    }
    setStatus("More than zero");
    setTimeout(() => setStatus(""), 3000);
    return false;
  }

  function handleDeposit() {
    console.log(deposit);
    if (!validateUser(user, "user")) return;
    if (!validateDeposit(deposit, "deposit")) return;
    fetch(`/account/update/${user}/${deposit}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            acBalance = data.value.balance;
            setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            setStatus('Deposit failed')
            console.log('err:', text);
        }
    });
  }

  function clearForm() {
    setDeposit("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="warning mx-auto"
      header="DEPOSIT"
      status={status}
      body={
        show ? (
            <>
            User Name (Email): {user}
            <br />
            Current Balance: ${acBalance}
            <br />
            Deposit Amount
            <br />
            <input
              type="input"
              className="form-control"
              id="deposit"
              placeholder="Deposit Amount"
              value={deposit}
              onChange={(e) => setDeposit(e.currentTarget.value)}
            /><br />
            <button
              type="submit"
              className="btn btn-light mx-auto d-block"
              disabled={deposit === "" ? true : false}
              onClick={handleDeposit}>Deposit
            </button>
            <br />
          </>
        ) : (
          <>
            <h5>Deposit Success</h5>
            New Balance: ${acBalance}
            <br />
            <br />
            <button
              type="submit"
              className="btn btn-light mx-auto d-block"
              onClick={clearForm}
            >
              New Deposit
            </button>
          </>
        )
      }
    />
  );
}