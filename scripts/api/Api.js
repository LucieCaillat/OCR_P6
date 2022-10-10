// FISHEYE is a global variable to store the data
const FISHEYE = {

}
/* eslint-disable no-unused-vars */ 
async function getData() {
  const photographers = fetch("data/photographers.json")
      .then(function(res) {
          return res.json()
      })
      .then(function(value) {
        FISHEYE.photographers = value.photographers;
        FISHEYE.media = value.media;
          return value 
      })
      .catch(function(err) {
        console.log("An error occurred :", err)
      });
  return photographers
}
