<script>
export default {
  name:'LogOut',
  data: function () {
    return {
      events: ['click', 'mousemove', 'mousedown', 'scroll', 'keypress', 'load'],
      logoutTimer: null
    }
  },
  methods: {
    setTimer() {
      this.logoutTimer = setTimeout(this.logout, 60 * 25 * 1000); // 25 * 60 sec = 25 minutes
    },
    logout() {
      localStorage.clear();
      this.$router.push({name: 'LoginPage'})
    },
    resetTimer() {
      clearTimeout(this.logoutTimer);
      this.setTimer();
    }
  },
  mounted() {
    this.events.forEach(function (event) {
      window.addEventListener(event, this.resetTimer);
    }, this)
  }
}
</script>
