import React from 'react';

function GenerateList(WrappedComponent, getData){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                list : []
            }
        }

        componentDidMount(){
            getData().then((res) => {
                console.log(res);
                return res.entries ? this.setState({
                    ...this.state,
                    list : res.entries
                }) : [];
            })
        }

        render(){
            return (
                <WrappedComponent data={ this.state.list } {...this.props}/>
            )
        }
    }
}

export default GenerateList;