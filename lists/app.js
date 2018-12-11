// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
  el: '#app',
  data: {
    show: true,
    ingredients: ['a', 'b', 'c'],
    persons: [
      {name: 'max', age: 27, color: 'red'},
      {name: 'anna', age: 35, color: 'blue'},
    ]
  }
})
