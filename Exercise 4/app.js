new Vue({
  el: '#exercise',
  data: {
    isHighLight: false,
    userclass: 'font',
    c4: 'shrink',
    enabled: "false"
  },
  computed: {
    isShrink : function () {
      return this.enabled;
    }
  },
  methods: {
    startEffect: function() {
      const vm = this;
      console.log("inteval")
      setInterval(function () {
        vm.isHighLight = !vm.isHighLight;
      }, 1000)
    }
  }
});
