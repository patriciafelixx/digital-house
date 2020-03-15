Flexbox
```css
flex-container {
    display: flex;

    flex-wrap: nowrap;
    flex-wrap: wrap;

    flex-direction: row;
    flex-direction: row-reverse;
    flex-direction: column;
    flex-direction: column-reverse;

    justify-content: flex-start;
    justify-content: center;
    justify-content: flex-end;
    justify-content: space-between;
    justify-content: space-around;

    align-items: stretch;
    align-items: flex-start;
    align-items: center;
    align-items: flex-end;
}
```

```css
flex-items {
    order: 0;
    
    flex-grow: 0;

    align-self: stretch;
    align-self: flex-start;
    align-self: center;
    align-self: flex-end;
}
```