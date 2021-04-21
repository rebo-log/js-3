let fruits = prompt('Enter the string ') ;

switch(fruits) {
    case 'red':
      text = 'apple';
    break;
    case 'yellow':
    text = 'banana';
    break;
    case 'green':
    text = 'grass';
    break;
    case 'circle':
   case 'rectangle':
   case 'square': 
    text = 'shape';
    break;
    default:
    text = "i don't know";
  }
alert(text);
