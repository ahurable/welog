import React, {createRef} from 'react';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

class PostForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      checkFile: false
    };

    this.fileRef      = createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    document.title = "dispatch a post";
    console.log(this.fileRef);
    this.fileSection.style.display = "none"
  }

  async handleChange(e) {
    const target = e.target;
    await this.setState({
      [target.name]: target.type === "checkbox" ? target.checked : target.value
    });
    if (this.state.checkFile === true) {
      this.fileSection.style.display = "block"
    } else {
      this.fileSection.style.display = "none"
    }
  }

  handleSubmit(e) {
    console.log(this.state.title)
  }

  render() {
    return (
      <div className="container-lg container-md container-fluid">
        <div className="d-flex justify-content-center">
          <div className="form-container col-lg-4 col-md-8 col-12">
            <h1 style={{fontWeight: 200}}>Dispatch a post on site</h1>
            <form onSubmit={this.handleSubmit}>
              <input type="text" className="form-input form-control w-100" placeholder="Enter your post title" onChange={this.handleChange} value={this.state.title} name="title" id="titleInput" />
              <textarea className="form-input form-control w-100" placeholder="Insert descriptions of your post" onChange={this.handleChange} value={this.state.description} name="description" id="desInput" ></textarea>
              <div className="d-flex">
                <input type="checkbox" onChange={this.handleChange} name="checkFile" id="checkFile"  style={{width: "20px", marginTop: "16px"}} />
                <label htmlFor="checkFile">Do you wanna attach a file?</label>
              </div>
              <div ref={fileSection => this.fileSection = fileSection}>
                <label htmlFor="fileInput" style={{fontSize: "19px"}}>Select a file: </label>
                <input type="file" ref={this.fileRef} className="form-input form-control w-100" placeholder="Insert Your File"  name="fileInput" id="fileInput" />
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default PostForm;