// import Card from "./card";

function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [withdraw, setWithdraw] = React.useState("");

  function validateUser(user){
    if (user === ""){
      setStatus("You are not authorized. please login");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function validateWithdraw(withdraw){
    if (withdraw < 0) {
      setStatus(
        " Greater than zero"
      );
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (acBalance - withdraw < 0) {
      setStatus(
        "Amount equal to your balance"
      );
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (acBalance - withdraw >= 0) {
      return true;
    } else
      setStatus(
        " More than zero"
      );
    setTimeout(() => setStatus(""), 3000);
    return false;
  }
  

  function handleWithdraw() {
    if (!validateUser(user, "user")) return;
    if (!validateWithdraw(withdraw, "withdraw")) return;
    fetch(`/account/update/${user}/-${withdraw}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            acBalance=data.value.balance;
            // setStatus(JSON.stringify(data.value));
            setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            setStatus('Withdrawal failed')
            console.log('err:', text);
        }
    });
  }

  function clearForm() {
    setWithdraw("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="warning mx-auto"
      header="WITHDRAW"
      status={status}
      body={
        show ? (
            <>
            User Name (Email): {user}
            <br />
            Current Balance: ${acBalance}
            <br />
            Withdraw Amount
            <br />
            <input
              type="input"
              className="form-control"
              id="withdraw"
              placeholder="Withdraw Amount"
              value={withdraw}
              onChange={(e) => {setWithdraw(e.currentTarget.value);}}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light  mx-auto d-block"
              disabled={withdraw === "" ? true : false}
              onClick={handleWithdraw}
            >Withdraw
            </button>
            <br />
          </>
        ) : (
          <>
            <h5>Withdraw Success</h5>
            New Balance: ${acBalance}
            <br />
            <button
              type="submit"
              className="btn btn-light  mx-auto d-block"
              onClick={clearForm}
            >
              New Withdraw
            </button>
          </>
        )
      }
    />
  );
}