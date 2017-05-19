import React from 'react'
import TreeView from '../../../../src/deni-react-treeview/deni-react-treeview';

class AutoLoad extends React.Component {

  constructor(props) {
  	super(props);
  }

  dataLoad() {
    this.refs.treeview.api.load();
  }

  render() {
  	return (
      <div>
        <button onClick={this.dataLoad.bind(this)}>Clique to Load</button>
        <TreeView
          ref="treeview"
          autoLoad={false}
          json="https://denimar.github.io/static-data/countries.json"
        />
      </div>
    )
  }
}

export default AutoLoad