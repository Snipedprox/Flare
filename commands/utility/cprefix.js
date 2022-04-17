module.exports = {
name: "cprefix",
code: `
$setGlobalUserVar[cprefix;$replaceText[$message; ;]]

$color[1;$getServerVar[color]]
$description[1;$getServerVar[check]  **Edited your global prefix**
<:right_arrow:961725419818745966> Old prefix: $getGlobalUserVar[cprefix]
<:right_arrow:961725419818745966> New prefix: $replaceText[$message; ;]]

$argsCheck[>0;$getservervar[error] **Correct usage: $getServerVar[prefix]$commandname < prefix >**]
`}