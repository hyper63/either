<h1 align="center">either</h1>
<p align="center">Either is a ADT that can return one of two types a left or right. Useful for error handling, specifically handling nulls and exceptions in your pure application workflow.</p>
</p>
<p align="center">
  <a href="https://github.com/hyper63/either/tags/"><img src="https://img.shields.io/github/tag/hyper63/either" alt="Current Version" /></a>
  <img src="https://github.com/hyper63/either/workflows/.github/workflows/deno.yml/badge.svg" />
  
  </p>

---

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Features](#features)
- [Methods](#methods)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

```js
import { Either } from 'https://x.nest.land/either/mod.ts'
const { fromNullable } = Either

fromNullable(null)
  .fold(
    e => console.log('Is Null'),
    r => console.log(r)
  )
```

## Installation

This is a Deno module available to import from https://x.nest.land/either

deps.js

```
export { Either } from 'https://x.nest.land/either'
```

## Features

* fromNullable
* tryCatch

## Methods

TODO

## Contributing

Pull Requests are welcome

## License

MIT

## Acknowledgements

The core code for this library was initiated from code shared by Brian Londorf in a course from frontend masters. If you want to learn more about functional programming in javascript check it out: https://frontendmasters.com/courses/hardcore-js-v2/



