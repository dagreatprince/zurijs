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