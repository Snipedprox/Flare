module.exports = {
name: "sav",
code: `

$author[1;Avatar updated;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **$username** Avatar has been succesfully updated]
$image[1;$message]
$setBotAvatar[$message]

$onlyIf[$isValidLink[$message]==true;$getServerVar[error] **$username** You provided an **invalid** image link]
$onlyForIds[852908598664364082;896846485805744168;696698254770831421;$botownerid;]`}