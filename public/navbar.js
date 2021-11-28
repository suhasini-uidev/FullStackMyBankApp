
function NavBar(){
  const mystyle = { textAlign:"center",color:"blue",fontSize:"20px"}
  const mybrand = { textAlign:"center",color:"white",fontSize:"20px"}
  return(
    // <>
    // <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-content-center">
    //   <a className="navbar-brand" id="bank" href=" ">SecureBank</a>
    //   <br/>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNav">
    //     <ul className="navbar-nav">
    //      <li className="nav-item">
    //         <a className="btn btn-outline-primary"  href="#/CreateAccount/"  data-tip data-for="createAccTip" title="Create a Account">CREATE ACCOUNT</a>
    //         <ReactTooltip id="createAccTip" place="right" effect="solid">
    //           Create new accounts
    //         </ReactTooltip>
    //       </li>

    //       <br/>
    //       <li className="nav-item">
    //         <a className="btn btn-outline-primary"  href="#/deposit/" data-tip data-for="depositTip"  >DEPOSIT</a>
    //         <ReactTooltip id="depositTip" place="right" effect="solid">
    //           Deposit your Money
    //         </ReactTooltip>
    //       </li>
    //       <br/>
    //       <li className="nav-item">
    //         <a className="btn btn-outline-primary"  href="#/withdraw/" data-tip data-for="withdrawTip" >WITHDRAW</a>
    //         <ReactTooltip id="withdrawTip" place="right" effect="solid">
    //           Take your Money
    //         </ReactTooltip>
    //       </li>
    //       <li className="nav-item">
    //         <a className="btn btn-outline-primary"  href="#/alldata/" data-tip data-for="allDataTip" >ALL DATA</a>
    //         <ReactTooltip id="allDataTip" place="right" effect="solid">
    //           Shows all the data
    //         </ReactTooltip>
    //         </li>
    //         </ul>
    //   </div>
    // </nav>
    // </>
   <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-content-center">
      <a className="navbar-brand" style={mybrand}id="bank"  href=" ">SecureBank</a>
      <br/>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
         <li className="nav-item">
            <a className="btn btn-outline-primary"   href="#/CreateAccount/" >Create Account</a>
          </li>
          <br/>
          <li className="nav-item" style={mystyle}>
            <a className="btn btn-outline-info"  href="#/login/">Login</a>
            </li>
            <br/>
          <li className="nav-item">
            <a className="btn btn-outline-warning"  href="#/deposit/">Deposit</a>
          </li>
          <br/>
          <li className="nav-item">
            <a className="btn btn-outline-info"  href="#/withdraw/">Withdraw</a>
          </li>
          <br/>
          <li className="nav-item">
            <a className="btn btn-outline-info"  href="#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-outline-danger"  href="#/alldata/">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>

  );
}
