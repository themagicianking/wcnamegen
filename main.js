import { PREFIXES, SUFFIXES } from './dictionary.js'

class Name {
  constructor(type) {
    this.type = type
    this.getPrefix()
    this.getSuffix()
    this.validate()
    this.name = this.prefix + this.suffix
  }

  getPrefix(exclude = []) {
    let prefixes = [...PREFIXES.one, ...PREFIXES.two]
    if (exclude.length != 0) {
      prefixes = prefixes.filter(
        (prefix) => !exclude.includes(prefix.toLowerCase())
      )
    }
    let i = Math.floor(Math.random() * prefixes.length)
    this.prefix = prefixes[i]
  }

  getSuffix() {
    let allSuffixes = [...SUFFIXES.one, ...SUFFIXES.two]
    let i = Math.floor(Math.random() * allSuffixes.length)
    this.suffix = allSuffixes[i]
  }

  validate() {
    let passedChecks = { duplicate: this.checkDuplicate() }
    if (Object.values(passedChecks).includes(false)) {
      console.log('revalidating!')
      this.validate()
    }
  }

  checkDuplicate() {
    if (this.prefix.toLowerCase() == this.suffix) {
      console.log('This is a duplicate name:')
      console.log(this.prefix + this.suffix)
      this.getPrefix([this.suffix])
      return false
    } else {
      return true
    }
  }
}

function getTenNames() {
  for (let i = 0; i < 10; i++) {
    console.log(new Name(0).name)
  }
}

function getName() {
  return new Name(0).name
}

// getTenNames()

const generate = document.getElementById('generate')
const name = document.getElementById('name')
generate.addEventListener('click', () => {
  name.textContent = getName()
})
