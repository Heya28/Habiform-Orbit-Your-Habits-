addEventListener("keydown", function(event){
    if(event.key=="Enter"){
        const planetName=document.querySelector("#planetName").value;
        const planetMeaning=document.querySelector("#planetMean").value;
    }   
});

// addEventListener("keydown", function (event) {
//     const val = str.value;
//     const num = parseInt(document.querySelector("#num").value); 
//     let holder = document.querySelector("#oconcat");
  
//     if (event.key == "Enter") {
//       let arr = [];
  
//       for (let i = 0; i < num; i++) {
//         let element = document.createElement("input");
//         element.setAttribute("type", "text");
//         element.setAttribute("id", "concatin");
//         element.setAttribute("placeholder", `Enter string ${i + 1}`);
//         document.body.appendChild(element);
//         arr.push(element.value); 
//       }
  
//       let concatButton = document.createElement("button");
//       concatButton.textContent = "Concatenate Strings";
//       document.body.appendChild(concatButton);
  
//       concatButton.addEventListener("click", function (event) {
//         let newstr = val; 
  
//         for (let input of arr) {
//           newstr = newstr.concat(input);
//         }
  
//         holder.innerHTML = `The string obtained after concatenation is "${newstr}".`;
//       });
//     }
//   });