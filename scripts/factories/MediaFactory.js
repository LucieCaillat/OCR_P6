class MediaFactory {
  constructor(data, type){
    if(type === 'picture'){
      return picturesFactory(data)
    }else if (type === 'movie'){
      return moviesFactory(data)
    }else{
      throw 'Unknown format type'
    }
  }
}
