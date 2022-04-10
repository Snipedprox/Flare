module.exports = {
name: "setprofilecolor",
code: `
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] Your bio color has been set to **$message**]
$setGlobalUserVar[pcolor;$message]


$onlyIf[$message!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < hex >**]
$onlyIf[$isValidHex[$message]==true;$getServerVar[error] You provided an **invalid** hex]`}