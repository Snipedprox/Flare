module.exports = {
    name: "gtnstats",
    aliases: ['gtnstatistics'],
    code: `$title[1;Guess The Number Stats]
    $color[1;$getServerVar[color]]
$description[1;<:reddot:953977080054415380> \`GTN commands: disable-gtn, gtnstats, gtn\`]
$addField[1;<:reddot:953977080054415380> GTN Status;$getservervar[gtnstatus];yes]
$addField[1;<:reddot:953977080054415380> GTN Channel;<#$getservervar[guess_the_number_channel]>;yes]
$addField[1;<:reddot:953977080054415380> Wins;$getglobaluservar[gtnwins;$findmember[$message]];yes]
$addField[1;<:reddot:953977080054415380> Total Attempts/Wins;$getglobaluservar[gtnattempts;$findmember[$message]];yes]
$thumbnail[1;$useravatar[$findmember[$message]]]
$suppressErrors`
}