module.exports = {
name: "uprefix",
code: `
$setUserVar[uprefix;$replaceText[$message; ;]]

$color[1;$getServerVar[color]]
$description[1;$getServerVar[check]  **Edited your local prefix**
$getServerVar[rdot] Old prefix: $getUserVar[uprefix]
$getServerVar[rdot] New prefix: $replaceText[$message; ;]]

$argsCheck[>0;$getservervar[error] **Correct usage:**
\`\`\`js
$getServerVar[prefix]$commandname < prefix >\`\`\`**]
`}