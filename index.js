const person = Object.create({
  calculateAge() {
    console.log(new Date().getFullYear() - this.birthvalue)
  }

}, {
  name: {
    value: 'Nazar',
    enumerable: true,
    writable: true,
    configurable: true
  },
  birthvalue: {
    value: 2000,
    enumerable: true
  },
  age: {
    get() {
      return new Date().getFullYear() - this.birthvalue
    },
    set(value) {
      document.body.style.background = "red"
    }
  }
})
// person.name = 'Maxim'

for (let key in person) {
  if (person.hasOwnProperty(key))
    console.log(person[key])
}
