import React from 'react';
import List from '../../components/List/List';
import Panel from '../../components/Panel/Panel';
import Toggle from '../../components/Toggle/Toggle';
import moon from '../../assets/images/moon.png';

import { Title, Image, TitleWrapper } from './styles';

class Home extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      infoPanelIsOpen: false,
      typeToggle: true,
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

  handleToggle = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      this.setState((prevState) => ({ typeToggle: !prevState.typeToggle }));
    }
  };

  openInfoPanel = () => {
    this.setState({ infoPanelIsOpen: true });
  };

  handleListItemButtonClick = (e) => {
    const clickedItemId = e.currentTarget.id;
    const { type } = e.currentTarget;
    if (e.key === 'Enter' || e.type === 'click') {
      this.callContentApi(`https://api.spacexdata.com/v3/${type}/${clickedItemId}`, 'individualItem');
      this.openInfoPanel();
    }
  };

  handleClosePanel = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      this.setState({ infoPanelIsOpen: false });
    }
  };

  render() {
    const { typeToggle, dragons, rockets, infoPanelIsOpen, individualItem } = this.state;
    return (
      <div>
        <TitleWrapper>
          <Image id="moon" src={moon} alt="moon" />
          <Title id="title">Rockets & Dragons</Title>
        </TitleWrapper>
        <Toggle onClick={this.handleToggle} onKeyPress={this.handleToggle} select={typeToggle} />
        {typeToggle && (
          <List
            onClick={this.handleListItemButtonClick}
            onKeyPress={this.handleListItemButtonClick}
            data={dragons}
            type="dragons"
          />
        )}
        {!typeToggle && (
          <List
            onClick={this.handleListItemButtonClick}
            onKeyPress={this.handleListItemButtonClick}
            data={rockets}
            type="rockets"
          />
        )}
        {infoPanelIsOpen && (
          <Panel onClick={this.handleClosePanel} onKeyPress={this.handleClosePanel} data={individualItem} />
        )}
      </div>
    );
  }
}

export default Home;
