module.exports = {
name: "setheight",
code: `
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] Your height has been set to **$message**]
$setGlobalUserVar[height;$message]


$onlyIf[$message!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < height >**]
$onlyIf[$tolowercase[$checkContains[$message;1;2;3;4;5;6;7;8;9;0;';ft;f;t]]==true;$getServerVar[error] You provided an **invalid** height]
`}