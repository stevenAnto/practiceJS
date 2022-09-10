//closure es la capacidad que tiene un fucnion de tomar variables del entorno en este caso 
//la function anonima dentro de multiplier toma la variable factor y retorna otra funcion
//la funcion que retorna es anonima number => number*2
function multiplier(factor){
  return number => number*factor;
}

let twice  = multiplier(2);
console.log(twice(5));
