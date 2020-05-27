O javascript nos permite ter acesso a todos os elementos da nossa janela, incluindo a url. 
Para trabalhar com ele, usamos o Object Location.
```
>> window.location
Location {href: "https://www.google.com.br/", ancestorOrigins: DOMStringList, origin: "https://www.google.com.br", …}
ancestorOrigins: DOMStringList {length: 0}
assign: ƒ assign()
fragmentDirective: FragmentDirective {}
hash: ""
host: "www.google.com.br"
hostname: "www.google.com.br"
href: "https://www.google.com.br/"
origin: "https://www.google.com.br"
pathname: "/"
port: ""
protocol: "https:"
reload: ƒ reload()
replace: ƒ replace()
search: ""
toString: ƒ toString()
valueOf: ƒ valueOf()
Symbol(Symbol.toPrimitive): undefined
__proto__: Location
fragmentDirective: (...)
constructor: ƒ Location()
Symbol(Symbol.toStringTag): "Location"
get fragmentDirective: ƒ fragmentDirective()
__proto__: Object
```
```
>> location = 'https://www.youtube.com'
>> location.href
https://www.youtube.com/
```
```
>> location = 'https://www.youtube.com/results?search_query=best+games'
>> location.origin
"https://www.youtube.com"
>> location.protocol
"https:"
>> location.search
"?search_query=best+games"
```

```
>> location = 'https://www.youtube.com/results?search_query=best+games&variavel=teste123'
>> let urlSearch = new URLSearchParams(location.search)
undefined
>> urlSearch.has('search')
false
>> urlSearch.has('search_query')
true
>> urlSearch.get('variavel')
"teste123"
>> urlSearch.get('search_query')
"best games"
```