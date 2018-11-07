function verificarEntero(raiz){
      if(raiz % 1 == 0){
        return(1);
      }    
      else{
        return(0);
      }
  }

function findNextSquare(sq) {
  var raiz = Math.sqrt(sq);
  
  if(verificarEntero(raiz) == 1){
    var cuadradoP= ((raiz+1)*(raiz+1)) //Math.pow(raiz+1,2);
    return cuadradoP;
  }
  else{
    return -1;
  }
}