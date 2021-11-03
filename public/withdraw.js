// import Card from "./card";

function Withdraw(props) {
  const [show, setShow] = React.useState(true);
  const [withdraw, setWithdraw] = React.useState("");
  const [status, setStatus] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validateWithdraw(withdraw) {
    if (withdraw < 0) {
      setStatus(
        " Greater than zero"
      );
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (ctx.users[0].balance - withdraw < 0) {
      setStatus(
        "Amount equal to your balance"
      );
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (ctx.users[0].balance - withdraw >= 0) {
      return true;
    } else
      setStatus(
        " More than zero"
      );
    setTimeout(() => setStatus(""), 3000);
    return false;
  }

  function handleWithdraw() {
    if (!validateWithdraw(withdraw, "withdraw")) return;
    ctx.users[0].balance = Number(ctx.users[0].balance) - Number(withdraw);
    setShow(false);
  }

  function clearForm() {
    setWithdraw("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="info mx-auto"
      header="WITHDRAW"
      status={status}
      body={
        show ? (
          <>
            Balance: {ctx.users[0].balance}
            <br />
            <br />
            Withdraw Amount
            <br />
            <input
              type="input"
              className="form-control"
              id="withdraw"
              placeholder="Withdraw Amount"
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light  mx-auto d-block"
              disabled={withdraw === "" ? true : false}
              onClick={handleWithdraw}
            >
              Withdraw
            </button>
            <br />
          </>
        ) : (
          <>
            <h5>Withdraw Success</h5>
            New Balance: {ctx.users[0].balance}
            <br />
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