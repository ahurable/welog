import React from "react";
import loginImg from "../assets/img/login.jpg";
import {Link} from "react-router-dom";
import {compose} from "lodash/fp";

const trim = str => str.trim();
const toLower = str => str.toLowerCase();
const setUserVal = compose(trim, toLower);

class LoginForm extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      showPwd: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    document.title = "Login in site"
  }

  handleChange(event){
    this.setState({[event.target.name] : event.target.type === "checkbox" ? event.target.checked : event.target.value})
  }
  
  async handleSubmit(event){
    await this.setState({username: setUserVal(this.state.username)})
    await alert(`your data is : username --> ${this.state.username} || password --> ${this.state.password}`);
  }

  render() {
    return (
      <div className="container-lg container-md container-fluid">
        <div className="d-flex justify-content-center">
          <div className="form-container col-lg-4 col-md-8 col-12">
            <h1 style={{fontWeight: 200}}>First Log into site</h1>
            <div className="img-contianer"><img src={loginImg} alt="" /></div>
            <form method="post" onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Enter Username" className="form-input form-control w-100" name="username" id="username" value={this.state.username} onChange={this.handleChange} />
              <input type={this.state.showPwd ? "text" : "password"} placeholder="Enter Password" className="form-input form-control w-100" name="password" id="password" value={this.state.password} onChange={this.handleChange}/>
              <div className="d-flex">
                <input type="checkbox" style={{width: "20px", marginTop: "16px"}} onChange={this.handleChange} name="showPwd" id="showPwd" />
                <label htmlFor="showPwd">Show password</label>   
              </div>             
              <button type="submit" id="btnAuth" className="btn btn-primary">Submit</button>
            </form>
            <span>you haven't already a account? <Link to="/register">Sign up here</Link></span>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;