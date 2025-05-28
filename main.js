import { PREFIXES, SUFFIXES } from './dictionary.js'

class Name {
  constructor(type) {
    this.type = type
    this.getPrefix()
    this.getSuffix()
    this.validate()
    this.name = this.prefix + this.suffix
  }

  getPrefix() {
    let i = Math.floor(Math.random() * PREFIXES.length)
    this.prefix = PREFIXES[i]
  }

  getSuffix() {
    let allSuffixes = [...SUFFIXES.one, ...SUFFIXES.two]
    let i = Math.floor(Math.random() * allSuffixes.length)
    this.suffix = allSuffixes[i]
  }

  validate() {
    this.checkDuplicate()
  }

  checkDuplicate() {
    if (this.prefix.toLowerCase() == this.suffix) {
      console.log("This is a duplicate name:")
      console.log(this.prefix + this.suffix)
      this.getPrefix()
    }
  }
}

let example_name = new Name(0)

console.log(example_name.name)
