export default function GetSrcPhoto(url) {
    let srcPhoto
  if(process.env.REACT_APP_NODE_ENV === 'development'){
    srcPhoto = `https://doterra-essentials-oils-2fbd0f7ae026.herokuapp.com/${url}`
  }else{
    srcPhoto = url
  }
  return srcPhoto
}