
//SyntaxError: "use strict" not allowed in function 
//with non-simple parameters

'use strict';
function sum(a = 1, b = 2) {
  return a + b;
}//====this right

//===========

function sum(a = 1, b = 2) {
  return a + b;
  'use strict';
}//==this is wrong

//============
'use strict';
function myFunction(){
    alert(this);
}
myFunction();