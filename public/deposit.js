// import Card from "./card";

function Deposit() {
  const [show, setShow] = React.useState(true);
  const [deposit, setDeposit] = React.useState("");
  const [status, setStatus] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validateDeposit(deposit) {
    if (deposit <= 0) {
      setStatus(
        "It shouldn't be negative"
      );
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (deposit > 0) {
      return true;
    }
    setStatus(
      "More than zero"
    );
    setTimeout(() => setStatus(""), 3000);
    return false;
  }

  function handleDeposit() {
    console.log(deposit);
    if (!validateDeposit(deposit, "deposit")) return;
    ctx.users[0].balance = Number(ctx.users[0].balance) + Number(deposit);
    const url= `/deposit/${deposit}`;
    (async() => {
      var res = await fetch(url);
      var data = await res.json();
      console.log(data);
    })();
    setShow(false);
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
            Balance: {ctx.users[0].balance}
            <br />
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
            />
            <br />
            <button
              type="submit"
              className="btn btn-light mx-auto d-block"
              disabled={deposit === "" ? true : false}
              onClick={handleDeposit}
            >
              Deposit
            </button>
            <br />
          </>
        ) : (
          <>
            <h5>Deposit Success</h5>
            New Balance: {ctx.users[0].balance}
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