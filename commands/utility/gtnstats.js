module.exports = {
    name: "gtnstats",
    aliases: ['gtnstatistics'],
    code: `$title[1;Guess The Number Stats]
    $color[1;$getServerVar[color]]
$description[1;$getServerVar[rdot] \`GTN commands: disable-gtn, gtnstats, gtn\`]
$addField[1;$getServerVar[rdot] GTN Status;$getservervar[gtnstatus];yes]
$addField[1;$getServerVar[rdot] GTN Channel;<#$getservervar[guess_the_number_channel]>;yes]
$addField[1;$getServerVar[rdot] Wins;$getglobaluservar[gtnwins;$findmember[$message]];yes]
$addField[1;$getServerVar[rdot] Total Attempts/Wins;$getglobaluservar[gtnattempts;$findmember[$message]];yes]
$thumbnail[1;$useravatar[$findmember[$message]]]
$suppressErrors`
}