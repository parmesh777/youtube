import axios from 'axios'

const KEY = 'AIzaSyBx1qRBFdMUQwntwzqu3ugH6Y2l43ruGPo'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
      part:'snippet',
      maxResults:10,
      key:KEY

  }
});