module.exports = {
name: "setgender",
code: `
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] Your gender has been set to **$message**]
$setGlobalUserVar[gender;$message]


$onlyIf[$message!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < gender >**]
$onlyIf[$tolowercase[$checkContains[$message;male;female;boy;girl;man;woman;women;men]]==true;$getServerVar[error] You provided an **invalid** gender]`}