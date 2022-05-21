function Greet(name){
  // console.log(`is it an array?: ${Array.isArray(name)}`);
  if(Array.isArray(name) == false){
      if(name == null){ return "Hello there!"; } 
      else if(name == name.toUpperCase()){ return `HELLO ${name}!`; }
      else {return `Hello, ${name}`; }
  } else { return `Hello, ${name.join(', ')}`; }
}