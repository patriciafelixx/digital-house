Vinculação externa - [links](https://getbootstrap.com/docs/4.3/getting-started/introduction)
```html
<head>
    <!-- link css -->
</head>
<body>
    
    <!-- links bibliotecas JS -->
</body>
```

Vinculação local - [download](https://getbootstrap.com/docs/4.3/getting-started/download/)
```html
<head>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
    
    <!-- link jQuery (https://code.jquery.com) -->
    <script src="js/bootstrap.min.js"></script>
</body>
```

Break Points

|    |               | Viewport  | Container width   |
|:--:| ------------- |----------:| -----------------:|
| -  | Extra Small   | < 576 px  | none (auto)       |
| sm | Small         | ≥ 576 px  | 540 px            |
| md | Medium        | ≥ 768 px  | 720 px            |
| lg | Large         | ≥ 992 px  | 960 px            |
| xl | Extra Large   | ≥ 1200 px | 1140 px           |

```html
<div class="container"> 
<!-- class="container" = width breakpoint; padding-left/right:15px; margin-left/right:auto; -->
<div class="container-fluid">
<!-- class="container-fluid" = width 100%; padding-left/right:15px; margin-left/right:auto; -->
```

Sistema de Grid
```html
<div class="container">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2">
<!-- ... -->
```