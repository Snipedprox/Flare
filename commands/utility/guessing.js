module.exports = {
    name: "$alwaysExecute",
    code: `
$modifyChannelPerms[$guildid;$get[id];-sendmessage]
$setservervar[winning_number;Ended. start again with the gtn command]
$setglobaluserVar[gtnwins;$sum[$getglobaluserVar[gtnwins];1]]
$setservervar[gtntries;0]
$setservervar[gtnstatus; <:reddot:953977080054415380> Unfortunately, the last GTN round has ended.]
$setservervar[gtn;false]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[check]  **You have won!!!**]
$description[1;]
$addField[1;<:reddot:953977080054415380> Correct Number;$getservervar[winning_number];yes]
$addField[1;<:reddot:953977080054415380> Winner;$usertag;yes]
$addField[1;<:reddot:953977080054415380> Tries;$getServerVar[gtntries];yes]
$color[1;$getServerVar[color]]
$thumbnail[1;$authoravatar]
$onlyif[$message[1]==$getservervar[winning_number];$getServerVar[error] You provided an **invalid** number]
$setServerVar[gtntries;$sum[$getServerVar[gtntries];1]]
$setglobaluserVar[gtnattempts;$sum[$getglobaluserVar[gtnattempts];1]]
$onlyif[$message[1]>=$getservervar[n1];$getServerVar[error] **You have guessed too high**]
$onlyif[$message[1]<=$getservervar[n2];$getServerVar[error] **You have guesssed too low**]
$onlyif[$getservervar[winning_number]!= Ended. start again with the gtn command.;Looks like the last gtn has ended, you will have to get a staff to re-set it up.]
$onlyif[$isNumber[$message]==true;$getServerVar[error] You provided an **invalid** number]
$onlyif[$channelid==$getservervar[guess_the_number_channel];]
$onlyIf[$getservervar[gtn]==true;]
$suppressErrors`
}

