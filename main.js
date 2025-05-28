import { PREFIXES, SUFFIXES, BLACKLIST } from './dictionary.js'

class Name {
  constructor(type) {
    this.type = type
    this.getPrefix()
    this.getSuffix()
    this.validate()
    this.name =
      (this.prefix + this.suffix).charAt(0).toUpperCase() +
      (this.prefix + this.suffix).slice(1)
  }

  getPrefix(exclude = []) {
    let prefixes = [...PREFIXES.one, ...PREFIXES.two]
    if (exclude.length != 0) {
      prefixes = prefixes.filter((prefix) => !exclude.includes(prefix))
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
    let passedChecks = {
      duplicate: this.checkDuplicate(),
      doubleAnimal: this.checkDoubleAnimal(),
      blacklist: this.checkBlackList(),
      tripleLetters: this.checkTripleLetters()
    }
    if (Object.values(passedChecks).includes(false)) {
      console.log('revalidating!')
      this.validate()
    }
  }

  checkDuplicate() {
    if (this.prefix == this.suffix) {
      console.log('This is a duplicate name:')
      console.log(this.prefix + this.suffix)
      this.getPrefix([this.suffix])
      return false
    } else {
      return true
    }
  }

  checkDoubleAnimal() {
    if (
      PREFIXES.animals.includes(this.prefix) &&
      SUFFIXES.animals.includes(this.suffix)
    ) {
      console.log('Double animal: ' + this.prefix + this.suffix)
      this.getPrefix(PREFIXES.animals)
      return false
    } else {
      return true
    }
  }

  checkTripleLetters() {
    let regex = new RegExp('([a-z])\\1\\1')
    if ((this.prefix + this.suffix).match(regex)) {
      console.log('Triple letter detected.')
      console.log(this.prefix + this.suffix)
      this.getPrefix()
      return false
    } else {
      return true
    }
  }

  checkBlackList() {
    if (BLACKLIST.includes(this.prefix + this.suffix)) {
      this.getPrefix()
      return false
    } else {
      return true
    }
  }
}

function getName() {
  return new Name(0).name
}

// getTenNames()

const generate = document.getElementById('generate')
const generateTen = document.getElementById('generateTen')
const name = document.getElementById('name')
const nameList = document.getElementById('nameList')
generate.addEventListener('click', () => {
  nameList.textContent = ''
  name.textContent = getName()
})
generateTen.addEventListener('click', () => {
  nameList.textContent = ''
  name.textContent = ''
  for (let i = 0; i < 10; i++) {
    let nameItem = document.createElement('li')
    nameItem.textContent = getName()
    nameList.appendChild(nameItem)
  }
})
