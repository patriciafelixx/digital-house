### Objeto Window

Todos os objetos, funções e variáveis ​​globais do JavaScript se tornam automaticamente membros do objeto window. Variáveis ​​globais são propriedades do objeto window. Funções globais são métodos do objeto window. Até o objeto document (do HTML **DOM**) é uma propriedade do objeto window. Alguns exemplos:

* `window.location` - objeto pode ser gravado sem o prefixo da janela (`location.href`, `location.hostname` , `location.pathname`...);
* `window.innerHeight` - a altura interna da janela do navegador (em pixels)
* `window.innerWidth` - a largura interna da janela do navegador (em pixels)
* `window.open()` - abre uma nova janela
* `window.close()` - fecha a janela atual
* `window.moveTo()` - move a janela atual
* `window.resizeTo()` - redimensionar a janela atual
* `window.document` - retorna a referência para o documento contido na janela

### DOM - Document Object Model

O objeto window representa uma janela que contém um elemento DOM; a propriedade `document` aponta para o documento DOM carregado naquela janela. Uma janela para um dado documento pode ser obtido usando a propriedade `document.defaultView`.

 | Propriedades e Métodos  | Descrição |
 | --------------- | ---------- |
 | .accessKey | Define ou retorna o atributo accesskey de um elemento | 
 | .addEventListener () | Anexa um manipulador de eventos ao elemento especificado | 
 | .appendChild () | Adiciona um novo node filho a um elemento como o último node filho | 
 | .attributes | Retorna um NamedNodeMap dos atributos de um elemento | 
 | .blur () | Remove o foco de um elemento | 
 | .childElementCount  | etorna o número de elementos filho que um elemento possui |
 | .childNodes | Retorna uma coleção de nodes filhos de um elemento (incluindo nodes de texto e comentário) | 
 | .children | Retorna uma coleção do elemento filho de um elemento (excluindo nodes de texto e comentário) | 
 | .classList | Retorna o (s) nome (s) da classe de um elemento | 
 | .className | Define ou retorna o valor do atributo de classe de um elemento | 
 | .click () | Simula um clique do mouse em um elemento | 
 | .clientHeight | Retorna a altura de um elemento, incluindo preenchimento | 
 | .clientLeft | Retorna a largura da borda esquerda de um elemento | 
 | .clientTop | Retorna a largura da borda superior de um elemento | 
 | .clientWidth | Retorna a largura de um elemento, incluindo preenchimento | 
 | .cloneNode () | Clona um elemento | 
 | .compareDocumentPosition () | Compara a posição do documento de dois elementos | 
 | .contains () | Retorna true se um node é um descendente de um node, caso contrário false | 
 | .contentEditable Define ou | retorna se o conteúdo de um elemento é editável ou não | 
 | .dir | Define ou retorna o valor do atributo dir de um elemento | 
 | .exitFullscreen () | Cancela um elemento no modo de tela cheia | 
 | .firstChild | Retorna o primeiro node filho de um elemento | 
 | .firstElementChild | Retorna o primeiro elemento filho de um elemento | 
 | .focus () | Dá foco a um elemento | 
 | .getAttribute () | Retorna o valor do atributo especificado de um node do elemento | 
 | .getAttributeNode () | Retorna o node do atributo especificado | 
 | .getBoundingClientRect () | Retorna o tamanho de um elemento e sua posição em relação à viewport | 
 | .getElementsByClassName () | Retorna uma coleção de todos os elementos filhos com o nome da classe especificado | 
 | .getElementsByTagName () | Retorna uma coleção de todos os elementos filhos com o nome da marca especificada | 
 | .hasAttribute () | Retorna true se um elemento tiver o atributo especificado, caso contrário false | 
 | .hasAttributes () | Retorna true se um elemento tiver algum atributo, caso contrário false | 
 | .hasChildNodes () | Retorna true se um elemento tiver algum node filho, caso contrário false | 
 | .id | Define ou retorna o valor do atributo id de um elemento | 
 | .innerHTML | Define ou retorna o conteúdo de um elemento | 
 | .innerText | Define ou retorna o conteúdo de texto de um node e seus descendentes | 
 | .insertAdjacentElement () | Insere um elemento HTML na posição especificada em relação ao elemento atual | 
 | .insertAdjacentHTML () | Insere um texto formatado em HTML na posição especificada em relação ao elemento atual | 
 | .insertAdjacentText () | Insere texto na posição especificada em relação ao elemento atual | 
 | .insertBefore () | Insere um novo node filho antes de um node filho especificado, existente | 
 | .isContentEditable | Retorna true se o conteúdo de um elemento for editável, caso contrário false | 
 | .isDefaultNamespace () | Retorna true se um namespaceURI especificado for o padrão, caso contrário false | 
 | .isEqualNode () | Verifica se dois elementos são iguais | 
 | .isSameNode () | Verifica se dois elementos são o mesmo node | 
 | .isSupported () | Retorna true se um recurso especificado for suportado no elemento | 
 | .lang | Define ou retorna o valor do atributo lang de um elemento | 
 | .lastChild | Retorna o último node filho de um elemento | 
 | .lastElementChild | Retorna o último elemento filho de um elemento | 
 | .namespaceURI | Retorna o URI do namespace de um elemento | 
 | .nextSibling | Retorna o próximo node no mesmo nível de árvore de nodes | 
 | .nextElementSibling | Retorna o próximo elemento no mesmo nível de árvore de nodes | 
 | .nodeName | Retorna o nome de um node | 
 | .nodeType | Retorna o tipo de node de um node | 
 | .nodeValue | Define ou retorna o valor de um node | 
 | .normalize () | Une nodes de texto adjacentes e remove nodes de texto vazios em um elemento | 
 | .offsetHeight | Retorna a altura de um elemento, incluindo preenchimento, borda e barra de rolagem | 
 | .offsetWidth | Retorna a largura de um elemento, incluindo preenchimento, borda e barra de rolagem | 
 | .offsetLeft | Retorna a posição de deslocamento horizontal de um elemento | 
 | .offsetParent | Retorna o contêiner de deslocamento de um elemento | 
 | .offsetTop | Retorna a posição de deslocamento vertical de um elemento | 
 | .outerHTML | Define ou retorna o conteúdo de um elemento (incluindo a tag inicial e a tag final) | 
 | .outerText | Define ou retorna o conteúdo de texto externo de um node e seus descendentes | 
 | .ownerDocument | Retorna o elemento raiz (objeto de documento) para um elemento | 
 | .parentNode | Retorna o node pai de um elemento | 
 | .parentElement | Retorna o node do elemento pai de um elemento | 
 | .previousSibling | Retorna o node anterior no mesmo nível da árvore de nodes | 
 | .previousElementSibling | Retorna o elemento anterior no mesmo nível de árvore de nodes | 
 | .querySelector () | Retorna o primeiro elemento filho que corresponde aos seletores CSS especificados de um elemento | 
 | .querySelectorAll () | Retorna todos os elementos filhos que correspondem aos seletores CSS especificados de um elemento | 
 | .remove () | Remove o elemento do DOM | 
 | .removeAttribute () | Remove um atributo especificado de um elemento | 
 | .removeAttributeNode () | Remove um node de atributo especificado e retorna o node removido | 
 | .removeChild () | Remover | 
 | removeEventListener () | Remove um manipulador de eventos que foi anexado ao método addEventListener () | 
 | replaceChild () | Substitui um nó filho em um elemento | 
 | requestFullscreen () | Mostra um elemento no modo de tela cheia | 
 | scrollHeight | Retorna toda a altura de um elemento, incluindo preenchimento | 
 | scrollIntoView () | Rola o elemento especificado na área visível da janela do navegador | 
 | scrollLeft | Define ou retorna o número de pixels que o conteúdo de um elemento é rolado horizontalmente | 
 | scrollTop | Define ou retorna o número de pixels que o conteúdo de um elemento é rolado verticalmente | 
 | scrollWidth | Retorna toda a largura de um elemento, incluindo preenchimento | 
 | setAttribute () | Define ou altera o atributo especificado, para o valor especificado | 
 | setAttributeNode () | Define ou altera o nó do atributo especificado | 
 | style | Define ou retorna o valor do atributo de estilo de um elemento | 
 | tabIndex | Define ou retorna o valor do atributo tabindex de um elemento | 
 | tagName | Retorna o nome da tag de um elemento | 
 | textContent | Define ou retorna o conteúdo textual de um nó e seus descendentes | 
 | title | Define ou retorna o valor do atributo title de um elemento | 
 | toString () | Converte um elemento em uma string | 