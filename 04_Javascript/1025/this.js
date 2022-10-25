const body = document.querySelector('body')
const obj = {
  logThis: function () {
    console.log(this)
  },
  setTime: function() {
    setTimeout(this.logThis, 2000)
  },
  addEvent: function () {
    body.addEventListener('click', this.logThis)
  }
}

obj.logThis()
obj.setTime()
obj.addEvent()

const obj2 = {
  method: function() {
    [1, 2, 3].forEach(function() {
      console.log(this)
    }, this)
  }
}

obj2.method()