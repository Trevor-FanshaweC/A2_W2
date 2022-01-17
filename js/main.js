// this is a self-invoking anonymous function
// it is also called a module (my variation of the module pattern)
// it encapsulates all of your custom code and makes it private

(() => {
  // make associations (select) with elements in the HTML markup using CSS selectors
  let theHeading = document.querySelector(".main-heading");

  // script your behaviour with functions
  function logElement() {
    console.log('clicked on the heading');
  }

  // add event handling here (user "triggers")
  // assign the event you want to listen for, and the function that should be run
  theHeading.addEventListener("click", logElement);

})();
