// import Card from "./card";

function Login(props) {
  const [status, setStatus] = React.useState("");
  const [show, setShow] = React.useState(true);
  const [username, setUsername] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");

  function handleInput() {
    fetch(`/account/login/${username}/${userPassword}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            setStatus('');
            setShow(false);
            console.log('JSON:', data);
            user = username;
            acBalance=data.balance;
            userBool = false;
        } catch(err) {
            setStatus(text+"Username or password are incorrect. Give it another try.")
            console.log('err:', text);
        }
    });
  }

  function clearForm() {
    setUsername("");
    setUserPassword("");
    setStatus("");
    setShow(true);
    user = "";
    userBool = true;
    props.history.push("/Login");
  }

  return (
    <Card
      bgcolor="primary mx-auto"
      header="LOGIN"
      body={
       (show & userBool )? (
          <>
            <div>
              User Name (Email)
              <br />
              <input
                className="form-control"
                value={username}
                name="username"
                placeholder="Enter User Name or Email"
                onChange={(e) => setUsername(e.currentTarget.value)}
              />
              <br />
              Password
              <br />
              <input type="password"
                className="form-control"
                value={userPassword}
                name="userPassword"
                placeholder="Enter Password"
                onChange={(e) => setUserPassword(e.currentTarget.value)}
              />
              <br />
              <button
                disabled={username === "" || userPassword === "" ? true : false}
                type="submit"
                className="btn btn-light  mx-auto d-block"
                onClick={handleInput}
              >
                Log In
              </button>
              <br />
              <p>{status}</p>
            </div>
          </>
        ) : (
          <>
            <h5>Logged In</h5>
            <button
              type="submit"
              className="btn btn-light  mx-auto d-block"
              onClick={clearForm}
            >
              Log Out
            </button>
          </>
        )
      }
    />
  );
}
