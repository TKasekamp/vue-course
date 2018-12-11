new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
          showAlert: function () {
            alert("Button clicked");
          },
          onKeyDown: function (event) {
            this.value = event.target.value;
          }
        }
    });
