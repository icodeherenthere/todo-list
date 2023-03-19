document.querySelector('#submitBtn').addEventListener('click', moreThings)
document.querySelector('#clearAll').addEventListener('click', gone)
document.querySelector('#clearCompleted').addEventListener('click', goneDone)

function moreThings(e){

  e.preventDefault()
  // console.log(e)
  const putSomething = document.querySelector('#putSomething').value
  console.log(putSomething)
  console.log('#putSomething')
  // to make sure no text can be put in the input bar
  if(putSomething ==  ''){
    return
  }

  // make value into an li
  const ul = document.querySelector('#startOfList')
  console.log(ul)

  // made li element in javascript
  const li = document.createElement('li')
  // take text and put into li
  const text = document.createTextNode(putSomething)

  // adds what i want inside the element
  li.appendChild(text)
  // li going into ul
  ul.appendChild(li)


  li.addEventListener('click', strike)
}

function gone(){
  document.querySelectorAll('li').forEach(li => li.remove())

}

function goneDone(){
  document.querySelectorAll('.lineThru').forEach(li => li.remove())
}

function strike(e){

  e.target.classList.toggle('lineThru')
}


  // Get the input element
  let form = document.querySelector('form');

  // Add event listener to input field
  form.addEventListener("submit", function(event) {
    // If Enter key is pressed (key code 13), execute the desired function
    if (event.preventDefault() === 13) {
      // Replace the code below with your own function or code
      console.log("Form was Submitted");
    }
  });
  const inputValue = input.value;
      console.log("Input value: " + inputValue);
