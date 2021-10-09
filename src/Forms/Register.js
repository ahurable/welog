import React, {createRef} from "react";
import loginImg from "../assets/img/login.jpg";
import {Link} from "react-router-dom";
import {compose} from "lodash/fp";

const trim = str => str.trim();
const toLower = str => str.toLowerCase();
const setUserVal = compose(trim, toLower);

class RegisterForm extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      repassword: '',
      rpColor: '#ffffff',
      showPwd: false,
      count: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.btnSubmit = createRef()
  }

  componentDidMount(){
    
    console.log(this.props.formAction)
    document.title = "Sign up in site";
    
  }

  handleChange(event){
    const target = event.target;
    this.setState({[event.target.name] : event.target.type === "checkbox" ? event.target.checked : event.target.value});
    
    // if password and repassword values are same return green color for background else return red
    if (target.name === "repassword"){
      if (target.value === this.state.password){
        this.setState({rpColor: "#22d6af"})
      } else {this.setState({rpColor: "#ff5266"})}
      if (this.state.password != target.value){
        document.getElementById("errorContainer").style.display = 'block';
        document.getElementById("errorContainer").innerHTML = `<div class="alert alert-danger"><span style="font-weight: 900">Submit Error: </span>Password and repassword are not match!</div>`;
        this.btnSubmit.current.disabled = true;
      } 
      else {
        document.getElementById("errorContainer").style.display = 'none';
        this.btnSubmit.current.disabled = false;
      }
    }

    
  }
  
  handleSubmit(event){
    event.preventDefault()
    setTimeout(this.setState({username: setUserVal(this.state.username)}), 500);
    alert(`your data is : username --> ${this.state.username} || password --> ${this.state.password}`);
    
  }

  render() {
    
    return (
      <div className="container-lg container-md container-fluid">
        <div className="d-flex justify-content-center">
          <div className="form-container col-lg-4 col-md-8 col-12">
            <h1 style={{fontWeight: 200}}>Sign up into site</h1>
            <div className="img-contianer"><img src={loginImg} alt="" /></div>
            <div className="errors-container" id="errorContainer">

            </div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Enter your name" className="form-input form-control w-100" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
              <input type="text" placeholder="Enter Username" className="form-input form-control w-100" name="username" id="username" value={this.state.username} onChange={this.handleChange} />
              <input type={this.state.showPwd ? "text" : "password"} ref={this.pwdRef} placeholder="Enter Password" className="form-input form-control w-100" name="password" id="password" style={{backgroundColor: this.state.rpColor}} value={this.state.password} onChange={this.handleChange}/>
              <input type={this.state.showPwd ? "text" : "password"} placeholder="Re-enter Password" className="form-input form-control w-100" name="repassword" id="repassword" style={{backgroundColor: this.state.rpColor}} value={this.state.repassword} onChange={this.handleChange}/>
              <div className="d-flex">
                <input type="checkbox" style={{width: "20px", marginTop: "16px"}} onChange={this.handleChange} name="showPwd" id="showPwd" />
                <label htmlFor="showPwd" ref={this.showPwdCheckRef}>Show password</label>   
              </div>             
              <button type="submit" ref={this.btnSubmit} id="btnAuth" className="btn btn-primary">Submit</button>
            </form>
            <span>already you have an account? <Link to="/login">Sign in here</Link></span>
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterForm;