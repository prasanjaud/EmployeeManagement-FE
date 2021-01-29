import React,{ Component } from "react";



class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      items:[],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('http://localhost:9090/retrieveData')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });

  }

  render() {

    var { isLoaded, items } = this.state;

    if(!isLoaded){
      return <div>Loading...</div>;
    }

    else {

      return (
        
        <div className = "App">
          
            <h1 className = "text-center">Employees Details</h1>

            <table className = "table table-striped">
                <thead>
                    <tr>
                        <td>Employee ID</td>
                        <td>Employee Photo</td>
                        <td>Employee Name</td>
                        <td>Employee Email</td>
                        <td>Branch Name</td>
                        <td>Bank Name</td>
                    </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                  <tr key={item.emp_id}>
                      <td> {item.emp_id}</td>
                      <td> <img src={item.emp_photo} roundedCircle width="50" height="50" alt="image" /></td>
                      <td> {item.emp_name}</td>
                      <td> {item.emp_email}</td>
                      <td> {item.branch_name}</td>
                      <td> {item.bank_name}</td>
                  </tr>
              ))};
                </tbody>
            </table>

            

            {/* <div>
              <button>Login</button>
            </div> */}


        </div>
        
      );

    }

  }
}

export default App;
