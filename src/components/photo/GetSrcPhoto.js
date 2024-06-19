export default function GetSrcPhoto(url) {
    let srcPhoto
  if(process.env.REACT_APP_NODE_ENV === 'development'){
    srcPhoto = `http://localhost:8000/${url}`
  }else{
    srcPhoto = url
  }
  return srcPhoto
}