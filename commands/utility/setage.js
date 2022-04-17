module.exports = {
name: "setage",
code: `
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] Your age has been set to **$messagey**]
$setGlobalUserVar[age;$message]

$onlyIf[$isNumber[$message]!=false;$getServerVar[error] You provided an **invalid** number]
$onlyIf[$message!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < age >**]

$onlyIf[$message<101;$getServerVar[error] You can't be older than **100**]`}