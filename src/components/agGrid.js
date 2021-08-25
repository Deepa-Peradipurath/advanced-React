import React, { useEffect } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import { connect } from 'react-redux';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class AgGrid extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            rowData : [
                {make: "Toyota", model: "Celica", price: 35000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Porsche", model: "Boxter", price: 72000}
           ]
        }
    }
    componentDidMount(){
        this.props.getList();
    }

    render(){
        return (
            <div className="ag-theme-alpine" style={{height : 400 , width: 400}}>
                <AgGridReact rowData={ this.props.mylist }>
                    <AgGridColumn field="make" sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field="model"></AgGridColumn>
                    <AgGridColumn field="price"></AgGridColumn>
                </AgGridReact>
            </div>
        )
    }
}

const mapStatesToProps = (state) => {
    return{
        mylist : state.ListforAg
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getList : () => { dispatch({ type : "GET_COMBINED_LIST_RESULTS" })}
    }
}

export default connect( mapStatesToProps, mapDispatchToProps ) (AgGrid);