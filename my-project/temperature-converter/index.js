document.getElementById('convert').onclick = function(){
    let temp = parseFloat(document.getElementById("temp").value);
    let unit = document.getElementById("unit").value;

  let ConvertedTemp =  unit === 'C' 
                       ? (temp * 9/5) + 32 //convert C to F
                       :(temp - 32) * 5/9 //convert F to C

 document.getElementById("converted").textContent = ConvertedTemp.toFixed(2);              
}