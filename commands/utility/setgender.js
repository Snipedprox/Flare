module.exports = {
name: "setgender",
code: `
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] Your gender has been set to **$message**]
$setGlobalUserVar[gender;$message]


$onlyIf[$message!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < gender >**]
$onlyIf[$tolowercase[$checkContains[$message;agender;androgyne;androgynous;bigender;cis female;cis feminine;cis male;cis masculine;cis woman;demigirl;demiguy;female;feminine;femme;genderqueer;genderweird;gender fluid;intergender;intersex;male;man;masculine;neutrois;nonbinary;other;pangender;third gender;trans female;trans male;trans man;trans feminine;trans femme;trans woman;woman]]==true;$getServerVar[error] You provided an **invalid** gender]`}