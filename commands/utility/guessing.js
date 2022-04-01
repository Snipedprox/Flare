module.exports = {
    name: "$alwaysExecute",
    code: `$setservervar[winning_number;{description: <:reddot:953977080054415380> Ended. start again with the gtn command.}{color:$getServerVar[color]}]
$setglobaluserVar[gtnwins;$sum[$getglobaluserVar[gtnwins];1]]
$setservervar[gtntries;0]
$setservervar[gtnstatus; <:reddot:953977080054415380> Unfortunately, the last GTN round has ended.]
$setservervar[gtn;false]
$title[1;Game ended]
$description[1;Looks like we have a winner..]
$addField[1;<:reddot:953977080054415380> Correct Number;$getservervar[winning_number];yes]
$addField[1;<:reddot:953977080054415380> Winner;$usertag;yes]
$addField[1;<:reddot:953977080054415380> Tries;$getServerVar[gtntries];yes]
$color[1;$getServerVar[color]]
$thumbnail[1;$authoravatar]
$onlyif[$message[1]==$getservervar[winning_number];{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **That is not a number**}}]
$setServerVar[gtntries;$sum[$getServerVar[gtntries];1]]
$setglobaluserVar[gtnattempts;$sum[$getglobaluserVar[gtnattempts];1]]
$onlyif[$message[1]>=$getservervar[n1];{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You are guessing too high**}}]
$onlyif[$message[1]<=$getservervar[n2];{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You are guessing way too low**}}]
$onlyif[$getservervar[winning_number]!= Ended. start again with the gtn command.;Looks like the last gtn has ended, you will have to get a staff to re-set it up.]
$onlyif[$isNumber[$message]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **Enter a valid number**}}]
$onlyif[$channelid==$getservervar[guess_the_number_channel];]
$onlyIf[$getservervar[gtn]==true;]
$suppressErrors`
}

