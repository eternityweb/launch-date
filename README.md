Adds a launch date counter to a website


## Internal Initialize ##
```html
<script id="launch-date-init" data-date="May 25, 2019" src="js/launch-date.js" type="text/javascript"></script>
```


## External Initialize ##
```html
<script id="launch-date-init" data-date="May 25, 2019" src="https://cdn.jsdelivr.net/gh/eternityweb/launch-date@latest/launch-date.js" type="text/javascript"></script>
```


## Admin Internalize ##
```html
[[!+modx.user.username:is=`admin`:then=`
<script id="launch-date-init" data-date="" src="https://cdn.jsdelivr.net/gh/eternityweb/launch-date@latest/launch-date.js" type="text/javascript"></script>
`]]
```
