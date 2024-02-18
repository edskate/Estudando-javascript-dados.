

// 
 var myVariable = 'global';
 myOtherVariable = 'global';
 function myFunction() {
    var myVariable = 'local';
    return myVariable;
 }
 function myOtherFunction() {
    myVariable = 'local';
    return myVariable; 
 }
 console.log(myVariable);//{1}
 console.log(myFunction);//{2}
 console.log(myOtherVariable);//{3}
 console.log(myFunction);//{4}
 console.log(myOtherVariable);//{5}


 //A linha {1} exibirá global   porque estamos referenciando uma variável global.
 // A linha {2} exibirá local porque declaramos a variável myVariable dentro da chamada myFunction como uma variável local, portanto o escopo  está apenas no interior de myFunction.
 //A linha {3} exibirá global porque estamos referenciando a variável global chamada myotherVariable, inicializada na segunda linha  do exemplo.
 // A linha {4} exibirá Local. Na Função myOtherFunction, referenciamos a variáveis  global myOtherVariable e lhe atribuimos o valor local, pois declaramos a variável usando a palavra reservada var.
 // Porque esse motivo, a linha {5} exibirá local (pois alteramos o valor da variável em myOtherFunction).



