import React from 'react';
import List from '../../components/List/List';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  
  componentDidMount() {
    this.callContentApi('https://api.spacexdata.com/v3/rockets', 'rockets');
    this.callContentApi('https://api.spacexdata.com/v3/dragons', 'dragons');
  }
  
  callContentApi = async (endpoint, type) => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const jsonResp = await response.json();
        this.setState({ [type]: jsonResp });
      }
    }
    catch(err) {
      console.log(err)
    }
  }
  
  render() {
    return (
      <>
        { this.state.dragons &&
          <List data={ this.state.dragons }  />
        }
      </>
    )
  }  
}

export default Home;
