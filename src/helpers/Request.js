class Request {

  get(url){
    return fetch(url).then((res) => res.json());
  }

  delete(){
  return fetch( {
    method: "DELETE",
    headers: {'Content-Type': 'application/json'}
  })
}

}

export default Request
