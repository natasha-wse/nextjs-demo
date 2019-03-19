import SomeType from './SomeType'

const someValue: SomeType = { a: 11, b: 22 }

export {
  someValue,

  // If we would not export SomeType
  // the demo would work fine - very strange...
  SomeType
}
