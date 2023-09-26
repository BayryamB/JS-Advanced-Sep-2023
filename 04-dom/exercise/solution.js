function solve() {
  const input = document.getElementById("text").value.toLowerCase();
  const currentCase = document.getElementById("naming-convention").value;
  let result = ``;
  let inputAsArr = input.split(` `);
  if(currentCase == "Camel Case"){
    result += inputAsArr.shift();
    for (const word of inputAsArr) {
      result += word[0].toUpperCase() + word.substring(1);
    }
  }else if(currentCase == "Pascal Case"){
    for (const word of inputAsArr) {
      result += word[0] + word.substring(1);
    }
  }else{
    result = "Error!";
  }
  document.getElementById("result").textContent = result;
}
