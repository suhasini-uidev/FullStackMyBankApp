// import Card from "./card";

function CreateAccount() {
  const [data, setData] = React.useState('');
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function validate(field, label) {
    if (!field) {
      setStatus(
        "Just a second... " + label + " field must be completed please"
      );
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function validatePassword(password) {
    if (password.length < 8) {
      setStatus(
        "Your password should be more than 8 characters"
      );
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name,email,password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validatePassword(password, "password")) return;
    const url= `/account/create/${name}/${email}/${password}`;
    (async() => {
      var res = await fetch(url);
      var data = await res.json();
      console.log(data);
      //hack to make .map work in alldata.js
      fetch('/account/all')
      .then(response => response.json())
      .then(data => {
          console.log(data);
          setData(JSON.stringify(data));
          users=data;                
      });
      setShow(false);
    })();
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary mx-auto"
      header="CREATE ACCOUNT"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            Email Address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="input"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              disabled={
                name === "" && email === "" && password === "" ? true : false
              }
              type="submit"
              className="btn btn-light  mx-auto d-block"
              onClick={handleCreate}
            >
              Create Account
            </button>
            <br />
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button
              type="submit"
              className="btn btn-light  mx-auto d-block"
              onClick={clearForm}
            >
              Add another account
            </button>
          </>
        )
      }
    />
  );
}

