/* 
  This function is my frontend framework/library for rendering todos just like React.
  Devs simply need to call this function to render the todo list.
  They need to change the todos variable (state) with the right values and the 
  library handles the logic to update the DOM. 
*/

/*
  As this is my First Reconcilor it is not optimised as in line 24 we are completely 
  clearing the todos from the 'mainArea' and again doing creating new element and appending
  them. what if let's take a condition in which the state already had 5 todos and now gets a 
  new todo (total 6). According to this reconciler logic remove all the pre-existing todos form the 
  DOM and again append all the todos.

  Optimal way -> reconciler needs to compare and calcualte the difference between the 
  previous state and new state and should only reflect that change to the DOM.
*/

// Note -> This reconciler will be optimised in V2.


function createDomElements(data) { // reconciler function
    let parentElement = document.getElementById('mainArea');

    parentElement.innerHTML = ""; // Unoptimal step!

    for (let i = 0; i < data.length; i++) {
      let childElement = document.createElement('div');
      let lineBreak1 = document.createElement('br');
      let lineBreak2 = document.createElement('br');
      childElement.setAttribute("id", `${data[i].id}`);
  
      let grandChildElement1 = document.createElement('span');
      grandChildElement1.innerHTML = data[i].title;
      grandChildElement1.style.fontWeight = "bold";
  
      let grandChildElement2 = document.createElement('span');
      grandChildElement2.innerHTML = data[i].desc;
  
      let grandChildElement3 = document.createElement('button');
      grandChildElement3.innerHTML = "Delete";
      grandChildElement3.addEventListener("click", () => {
        alert("Todo Deleted!");
      });
  
      childElement.appendChild(grandChildElement1);
      childElement.appendChild(lineBreak2);
      childElement.appendChild(grandChildElement2);
      childElement.appendChild(grandChildElement3);
  
      parentElement.appendChild(childElement);
      parentElement.append(lineBreak1);
    }
}
  
/*
  todo is the JavaScript variable or the state that needs to changed by the developer
  (to simulate that we are randomly changing the length of the array by using thr for loop and then 
  calling our reconcilation framework/library function to translate the change in state to the DOM.
*/

  setInterval(() => {
    let todos = []; // State Variable

    // Changing todos state
    for (let i = 1; i < Math.floor(Math.random() * 100); i++) {
      todos.push({
        id: i,
        title: "Todo title",
        desc: "Todo description"
      });
    }
  
    createDomElements(todos); // Calling reconciler function
  
  }, 1000);