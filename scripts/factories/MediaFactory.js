class MediaFactory {
  constructor(data, type){
    if(type === 'picture'){
      return picturesTemplate(data)
    }else if (type === 'movie'){
      return moviesTemplate(data)
    }else{
      throw 'Unknown format type'
    }
  }
}
