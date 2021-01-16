# hyper63/Either

Either ADT

* Left
* Right
* of
* fromNullable
* tryCatch

## Usage

``` js
tryCatch(myfunc)
  .fold(
    e => console.log(e),
    r => console.log(r)
  )
```

## Test

Install denon

```
deno install -qAf --unstable https://deno.land/x/denon/denon.ts
```

```
deno test mod_test.js
```


