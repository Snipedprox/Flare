module.exports = {
name: "setprofileimage",
aliases: ['setbanner','setbannerimage','setprofilebanner'],
code: `
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] Your profile banner has been set]
$image[1;$message]
$setGlobalUserVar[pimage;$message]


$onlyIf[$message!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < image link >**]
$onlyIf[$isValidLink[$message]==true;$getServerVar[error] You provided an **invalid** image link]`}