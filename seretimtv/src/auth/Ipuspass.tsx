import './restpass.css';

function Ipuspass() {
    return (
        <>
        <div className='formrest '>
        <div className="row justify-content-center wrapper ipuspass" id="forgot-box">
        <div className="col-lg-10 my-auto myShadow">
          <div className="row">
            <div className="col-lg-7 bg-white p-4">
              <h1 className="text-center font-weight-bold text-primary">Forgot Your Password?</h1>
              <hr className="my-3" />
              <p className="lead text-center text-secondary">To reset your password, enter the registered e-mail adddress and we will send you password reset instructions on your e-mail!</p>
              <form action="#" method="post" className="px-3" id="forgot-form">
                <div id="forgotAlert"></div>
                <div className="input-group input-group-lg form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text rounded-0"><i className="far fa-envelope fa-lg"></i></span>
                  </div>
                  <input type="email" id="femail" name="email" className="form-control rounded-0" placeholder="E-Mail" required />
                </div>
                <div className="form-group">
                  <input type="submit" id="forgot-btn" value="Reset Password" className="btn btn-primary btn-lg btn-block myBtn" />
                </div>
              </form>
            </div>
            <div className="col-lg-5 d-flex flex-column justify-content-center myColor p-4">
              <h1 className="text-center font-weight-bold text-white">Reset Password!</h1>
              <hr className="my-4 bg-light myHr" />
              <button className="btn btn-outline-light btn-lg font-weight-bolder myLinkBtn align-self-center" id="back-link">Back</button>
            </div>
          </div>
        </div>
      </div>
        </div>
     
    
        </>
      );
}

export default Ipuspass;