import React from 'react';
import List from '../../components/List/List';
import Panel from '../../components/Panel/Panel';

class Home extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      infoPanelIsOpen: false,
    };
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
    } catch (err) {
      console.log(err);
    }
  };

  callItemApi = async (endpoint, type) => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const jsonResp = await response.json();
        this.setState({ [type]: jsonResp });
      }
    } catch (err) {
      console.log(err);
    }
  };

  openInfoPanel = () => {
    this.setState((prevState) => ({
      infoPanelIsOpen: !prevState.infoPanelIsOpen,
    }));
  };

  handleListItemButtonClick = (e) => {
    const clickedItemId = e.currentTarget.id;
    this.callItemApi(`https://api.spacexdata.com/v3/dragons/${clickedItemId}`, 'individualItem');
    this.openInfoPanel();
  };

  render() {
    return (
      <div>
        <List onClick={this.handleListItemButtonClick} data={this.state.dragons} />
        <List onClick={this.handleListItemButtonClick} data={this.state.rockets} />
        {this.state.infoPanelIsOpen && <Panel data={this.state.individualItem} />}
      </div>
    );
  }
}

export default Home;
