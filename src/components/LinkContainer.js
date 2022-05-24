import React from 'react'
import Form from './Form';
import Table from './Table';


class LinkContainer extends React.Component {
  constructor(props) {
    super(props)
    /* TODO - Create state object for storing favLinks  */
    this.state = {
      favLinks: [] }
  }

  handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
       const removeLink = this.state.favLinks;
       removeLink.splice(index, 1);
       this.setState ({favLinks : removeLink});
  }

  handleSubmit = (favLink) => {
    /*
            TODO - Create logic to setState and add new favLink to favLinks array in state!
        */
       this.setState({favLinks: this.state.favLinks.concat([favLink])})
  }

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        {/*TODO - Add Table Component */}
        
        <Table linkData= {this.state.favLinks} removeLink= {this.handleRemove} />
        <br />
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default LinkContainer
