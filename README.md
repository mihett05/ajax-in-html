# Ajax In HTML (jim(aJax In htMl))
Implementation ajax's requests in html tags.

In `<head>` you need to add `<ajax>` tag with attributes `from` and `tag`.

`from` - attribute, from that script will get link to ajax's request.

`tag` - attribute that will used to put result of ajax's request.

Example:
```
<head>
    <meta charset="utf-8"/>
    <title>Ajax in HTML</title>
    <ajax from="http://localhost:3000/comp/" tag="hello"></ajax>
    <ajax from="http://localhost:3000/name/" tag="login"></ajax>
</head>
<body>
    <hello></hello>
    <h1>Hey, it's you, <login></login>!</h1>
    <script src="jim.js"></script>
</body>
```