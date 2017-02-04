import React from 'react';
import {FormControl} from 'react-bootstrap';	
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
export default class App extends React.Component {

  constructor(){
    super();
	this.state = {
		testList : [
		{id:1,name:"A"},
		{id:2,name:"B"},
		{id:3,name:"C"},
		{id:4,name:"D"},
		{id:5,name:"E"},
		{id:6,name:"F"},
		],
		searchStr: ''
	};
  }

  componentWillMount(){

  }
  onSearch(e) {
	this.setState({searchStr: e.target.value});
	}

  render() {
		var listItem = this.state.testList;
	    var searchStr = this.state.searchStr.trim();
		const cellEditProp = {
		  mode: 'dbclick',
		  blurToSave: true
		};
        if (searchStr != '') {
            listItem = listItem.filter(function(item) {
                return item.name.toLowerCase().indexOf(searchStr.toLowerCase())!=-1;
            });
        }
		var itemToRender =
				<div>
					<div className="row panel-actions">
						<FormControl className="col-xs-6 col-sm-6 col-md-3 offset-md-6" type="text" value={this.state.searchStr} placeholder="Search" onChange={this.onSearch.bind(this)} />
					</div>
					<div className="row">
						<BootstrapTable ref='table' data={ listItem } cellEdit={ cellEditProp }>
							<TableHeaderColumn className="col-xs-12 col-sm-6 col-md-6" dataField='id' isKey={ true } dataSort={ true }>Item ID</TableHeaderColumn>
							<TableHeaderColumn className="col-xs-12 col-sm-6 col-md-6" dataField='name' dataSort={ true }>Item Name</TableHeaderColumn>
						</BootstrapTable>
					</div>
				</div>;
    return (
	<div>
		{itemToRender}
	</div>
    );
  }
};