import { PREFIXES, SUFFIXES } from './dictionary.js'

class Name {
  constructor(type) {
    this.type = type
    this.getPrefix()
    this.getSuffix()
    this.name = this.prefix + this.suffix
  }

  getPrefix() {
    let i = Math.floor(Math.random() * PREFIXES.length)
    this.prefix = PREFIXES[i]
  }

  getSuffix() {
    let i = Math.floor(Math.random() * PREFIXES.length)
    this.suffix = SUFFIXES[i]
  }
}

let example_name = new Name(0)

console.log(example_name.name)
