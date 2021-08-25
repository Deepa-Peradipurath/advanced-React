import React from 'react';
import { debounce } from '../utils/utils';
import { connect } from 'react-redux';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class AutoSearch extends React.Component{
    constructor(props){
        super(props);
        console.log("props",props);
        this.state = {
            myText : "",
            isLoading : false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    myDebounce = debounce(() => {
        // api call
        this.setState({
            ...this.state,
            isLoading: true
        })
        if(this.state.myText){
            this.props.getSearchResults(this.state.myText);
        } else {
            this.props.resetSearch();
        }
        
    },2000);

    handleChange = (e) => {
        this.setState({
            ...this.state,
            myText : e.target.value
        }, () => {
            console.log("myText",this.state.myText);
            this.myDebounce();
        });
    } 

    render(){
        
        return(
        <form>
            <input type="text" value={ this.state.myText } onChange={this.handleChange}/>
            <div className="ag-theme-alpine" style={{height : 400 , width: 400}}>
                {/* {
                    this.props.searchResults.length > 0 && this.state.myText ?
                    <ul className="my-list">
                        {
                            this.props.searchResults.map((item,i) => <li key={`list-${i}`}>{item.API}</li>)
                        }
                    </ul> : <p> No Results found</p>
                } */}
                {
                    this.props.searchResults.length > 0 && this.state.myText ?
                    <AgGridReact rowData={this.props.searchResults}>
                        <AgGridColumn field ="API" sortable={ true } filter={ true }></AgGridColumn>
                        <AgGridColumn field ="Auth" ></AgGridColumn>
                        <AgGridColumn field ="Category" ></AgGridColumn>
                        <AgGridColumn field ="Cors" ></AgGridColumn>
                        <AgGridColumn field ="Description" ></AgGridColumn>
                        <AgGridColumn field ="HTTPS" ></AgGridColumn>
                        <AgGridColumn field ="Link" ></AgGridColumn>
                    </AgGridReact> : <p> No Results found</p>
                }
                {
                    (this.state.isLoading || this.props.searchResults.length > 0) &&
                    <p>Loading ...</p>
                }
            </div>
            {
                this.props.searchKeyword &&
                <p>Searched key word is  {this.props.searchKeyword}</p>
            }
            
        </form>
        )
    }
}
function mapStateToProps (state) {
    console.log("state",state);
    return {
        searchResults : state.searchResult,
        searchKeyword: state.searchKeyword
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getSearchResults : (keyword) => dispatch({type :'GET_SEARCH_RESULTS', val: keyword }),
        resetSearch : () => { dispatch({ type:'RESET_SEARCH' })}
    }
}
export default connect( mapStateToProps, mapDispatchToProps )(AutoSearch);