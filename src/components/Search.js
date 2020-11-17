import React, { Component } from 'react'


 class Search extends Component {
     state={
         term:''
     }

     textClick=(e)=>{
         this.setState({
             term:e.target.value
         })
     }
     onSubmit=(e)=>{
      e.preventDefault();
       this.props.onTextSubmit(this.state.term)
     }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onSubmit} className="ui form">
                    <div className="field">
                        <label>YT Search</label>
                        <input type="text" onChange={this.textClick} value={this.state.term} />
                        
                    </div>
                   
                </form>
            </div>
        )
    }
}

export default Search
