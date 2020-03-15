Tags Semânticas
``` html
<strong></strong>
<em> </em>
<mark></mark> 
<cite></cite> 
<abbr></abbr>

<section></section>
<article></article>
<header></header>
<footer></footer>

```
Formulários
``` html
<form action="" method="">
    <label for="xyz">
    <input type="text" name="" id="xyz">
    <!-- types: email, tel. nymber ...-->

    <input type="submit" value="Enviar">
</form>
```
``` html
<form>
    <input type="radio" name="xyz" value="Sim" >
    <input type="radio" name="xyz" value="Não" >

    <input type="chechbox" name="xyz" value="Esse">
    <input type="chechbox" name="xyz" value="Esse também">
    <input type="chechbox" name="xyz" value="E mais esse">
</form>
```
``` html
<textarea name="caixa de texto"></textarea>
```
``` html
<select>
    <option></option>
    <option></option>
</select>
```
``` html
<button type="submit">Enviar</button>
<button type="reset">Resetar</button>
<button type="button">Outra ação</button>
```

Pseudo-seletores
``` css
seletor:hover {}
seletor:focus {}
seletor:nth-child(x) {}
```

Propriedades
``` css 
display {
    display: block;
    display: inline;
    display: inline-block;
    display: none;
}    
_ {
    width: 10px;
    height: 10px;
    padding: 10px;
    margin: 10px;
    border: 1px solid white;
    box-sizing: border-box;
}

float {
    float: left;
    float: right;
} container {overflow: hidden;} 

position {
    position: relative;
    position: absolute;
    position: fixed;
    z-index: 10;
}

viewport {
    width: 100vw;
    height: 50vh;
}
```

Media Queries
``` css 
@media (min-width: 900px) {} /* Mobile First */
@media (max-width: 460px) {} /* Mobile Last */
@media (max-width: 900px) and (orientation: landscape) {}
/* 
Break Points
Mobile site: 320x480, 480x320
iPad Apps: 768x1024, 1024x768
Website: 1680px1050
*/