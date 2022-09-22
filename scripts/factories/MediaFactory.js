function MediaFactory(medium) {
    if(medium.video === undefined){
      return displayPicture(medium)
    }else {
      return displayVideo(medium)
    }
}
