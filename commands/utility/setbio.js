module.exports = {
name: "setbio",
code: `
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] Your bio has been set to: $message]
$setGlobalUserVar[bio;$message]


$onlyIf[$message!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < bio >**]
`}