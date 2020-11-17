import React, { Component } from 'react';
import Search from './Search';
//import youtube from './apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import axios from 'axios'


export class App extends Component {

  state={
    videos: [],
    selectedVideo: null
  }

  componentDidMount(){
    this.onTextSubmit('brad traversy react')
  }

  onTextSubmit= async term =>{
     const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=7&key=AIzaSyD_eIeL330eapAs1x6dSOIhBv3EXbRK5e8&q=${term}`)
     
    //  youtube.get('/search',{
    //   params:{
    //     q: term
        
    //   }
    // })
    this.setState({
      videos:res.data.items,
      selectedVideo: res.data.items[0]
    })
  };

  onVideoSelect = video =>{
   this.setState({
     selectedVideo:video
   })
};


  render() {
    return (
      <div  className="ui container">
        <Search onTextSubmit={this.onTextSubmit} />
        <div className="ui grid">
          <div className='ui row'>
          <div className="twelve wide column"><VideoDetail video={this.state.selectedVideo}/></div>
          <div className="four wide column"><VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/></div>
        </div>
          </div>
      </div>
     
    )
  }
}

export default App
