module.exports = {
name: "sav",
code: `

$color[1;$getServerVar[color]]
$author[1;Server list]
$description[1;**<:xelawholesome:952139611746992178> Avatar has been changed**]
$image[1;$message]
$setBotAvatar[$message]

$onlyIf[$isValidLink[$message]==true;<:xelamhm:952137241336102912> **$username** Invalid image link]

$onlyForIds[852908598664364082;896846485805744168;696698254770831421;$botownerid;]`}