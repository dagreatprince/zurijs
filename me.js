function convertFahrToCelcius (fahr){
    let fahrenheit = fahr;
    let celcius = (fahrenheit - 32) / 1.8;
    let myOutput = celcius.toFixed(4);
   
    if( typeof fahr === "object") {
      myOutput = `${JSON.stringify(fahr)} is not a valid number but a/an ${typeof fahr}.`
    };
    
    if (isNaN(fahr)) {
      myOutput = `${fahrenheit} is not a valid number but a/an ${typeof fahr}.`
      
    if (Array.isArray(fahr)) {
      myOutput = `${fahr} is not a valid number but a/an Array.`
    };
    };
    return myOutput;
 };
 console.log(convertFahrToCelcius("0"));

 function checkYuGiOh(n) {

  const arrayFromOneToN = Array.from({length: n}, (_, index) => {  

    let indexPlusOne = index + 1;

    if (indexPlusOne % 2 === 0) {
      indexPlusOne = 'yu';
    }

    if (indexPlusOne % 3 === 0) {
      indexPlusOne = 'gi';
    }

    if (indexPlusOne % 5 === 0) {
      indexPlusOne = 'oh';
    }

    let divByTwo = (index + 1)/2;
    let divByThree = (index + 1)/3;

    if (divByTwo % 3 === 0) {
      indexPlusOne = "yu-gi";
    }

    if (divByTwo % 5 === 0) {
      indexPlusOne = "yu-oh";
    }

    if (divByThree % 5 === 0) {
      indexPlusOne = "gi-oh";
    }

    if (divByTwo % 3 === 0 && divByTwo % 5 === 0 && divByThree % 5 === 0) {
      indexPlusOne = "yu-gi-oh";
    }

    return indexPlusOne;
  });
  
  return arrayFromOneToN;
}

console.log(checkYuGiOh(30));