##  REDUCE

```javascript
const arr = ['migue', 'eugim', 'wilson']

const reducer = arr.reduce((acc, el, index) => {
  return acc.concat({ [index+1]: el })
}, [])

console.log(reducer)


/* OUTPUT: 
  { '1': 'migue' },
  { '2': 'eugim' },
  { '3': 'wilson' }
]
*/
```


## MAP

```javascript
const arr = ['migue', 'eugim', 'wilson']

const map=arr.map((e, index)=>{
  return {
    indice: index + 1,
    nombre: e
  }
})

console.log(map)

/* OUTPUT: 
[
  { indice: 1, nombre: 'migue' },
  { indice: 2, nombre: 'eugim' },
  { indice: 3, nombre: 'wilson' }
]
*/
```


## FILTER

```javascript

const filter = arr.filter(e=>e.length>5 && typeof e === 'string')

console.log(filter)


/* OUTPUT: 
[ 'wilson' ]
*/
```