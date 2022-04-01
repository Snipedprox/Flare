module.exports = [{
    name: "gstart",
        code: `
    $setTimeout[gw;$get[sc]s;{
    "cid":"$channelID",
    "date":"$dateStamp",
    "time":"$message[1]",
    "host":"$authorID",
    "win":"$message[2]",
    "mid":"$get[id]",
    "prize":"$messageSlice[2]"
    }]
    $setMessageVar[host;$authorID;$get[id]]
    $setMessageVar[win;$message[2];$get[id]]
    $setMessageVar[time;$message[1];$get[id]]
    $setMessageVar[date;$dateStamp;$get[id]]
    $setMessageVar[prize;$messageSlice[2];$get[id]]
    $let[sc;$splitText[1]$textSplit[$math[$get[p]/1000];.]]
    $let[id;$sendMessage[<:xelalove:952137237838037012> **$username** Giveaway has started!  {reactions:🎉} {newEmbed:{title:$messageSlice[2]} {description:<:xelawall:952139609867964427> Ends in: <t:$splitText[1]$textSplit[$math[($datestamp+$parseTime[$message[1]])/1000];.]:R>
    <:xelasanta:952139601504501780> Host: <@!$authorID>
    <:xelaterrified:952139606965489664> Winners: $message[2]} {color:BLUE}};yes]]
    $onlyIf[$messageSlice[2]!=;gift must be given]
    $onlyIf[$isNumber[$message[2]]==true;  the winner given must be a number, and more than 0]
    $onlyIf[$get[p]!=-1;The given time is invalid, please provide a valid time such as \`1s, 1m, 1s.....\` correct usage: \`$getServerVar[prefix]gstart(time) (  winner) (prize)\`]
    $let[p;$parseTime[$if[$message[1]!=;$message[1];1s10ms]]]
    $onlyPerms[managemessages;There are not enough permissions for you to do this command]
    `
    
    },
     {
      name: "gw",
         type: "timeout",
         code: `
    $editMessage[$timeoutData[mid];Giveaway Ended!  {newEmbed:{title:$timeoutData[prize]} {description:**Giveaway has been ended
   <:xelasanta:952139601504501780> Host: <@!$timeoutData[host]>
   <:xelaterrified:952139606965489664> Winner(s):$if[$get[random]==;No winner (no participant);$get[random]]**} {color:RED}};$timeoutData[cid]]
    $channelSendMessage[$timeoutData[cid];$if[$get[random]!=;<:xelapresent:951923632811163689> Congrats $get[random] you won **$timeoutData[prize]**;No participant]]
    $let[random;$djsEval[
    var arrayy = "$getReactions[$timeoutData[cid];$timeoutData[mid];🎉;yes;id]".split(",")
    arrayy.splice(arrayy.indexOf("$clientId"),1)
    var array = arrayy
    var win = ""
    let u = $timeoutData[win]
    while (u != 0 && array!==[]) {
    let r = Math.floor(Math.random()*array.length);
    win += "<@!"+array[r]+">" + " "
    array.splice(array.indexOf(array[r]), 1)
    u = u - 1
    }
    win.split(" ").filter(function(a) {
    return a!='<@!undefined>' && a != ''
    }).join(", ")
    ;yes]]
    $onlyIf[$getMessage[$timeoutData[cid];$timeoutData[mid]]!=Giveaway Ended!;]
    `
        
    },
    {
        name: "gend",
        code: `
    $editMessage[$message[1];Giveaway Ended!  {newEmbed:{title:$getMessageVar[prize;$message[1]]} {description:**Giveaway has been ended
   <:xelasanta:952139601504501780> Host: <@!$getMessageVar[host;$message[1]]>
   <:xelaterrified:952139606965489664> Winner(s):$if[$get[random]==;No winner (no participant);$get[random]]**} {color:RED}};$channelID]
   <:876127257867993138:946761779969667112> $SendMessage[$if[$get[random]!=;<:xelapresent:951923632811163689> Congrats $get[random] you won **$getMessageVar[prize;$message[1]]**;No participant]]
    $let[random;$djsEval[
    var arrayy = "$getReactions[$channelID;$message[1];🎉;yes;id]".split(",")
    arrayy.splice(arrayy.indexOf("$clientId"),1)
    var array = arrayy
    var win = ""
    let u = $getMessageVar[win;$message[1]]
    while (u != 0 && array!==[]) {
    let r = Math.floor(Math.random()*array.length);
    win += "<@!"+array[r]+">" + " "
    array.splice(array.indexOf(array[r]), 1)
    u = u - 1
    }
    win.split(" ").filter(function(a) {
    return a!='<@!undefined>' && a != ''
    }).join(", ")
    ;yes]]
    $onlyIf[$getMessage[$channelID;$message[1]]!=Giveaway Ended!;Giveaway with that id has ended]
    $onlyIf[$message[1]!=;provide valid message id]
    $onlyPerms[managemessages;you are not a staff]
    `
        },
     {
        name: "greroll",
        code: `
    $editMessage[$message[1];Giveaway Ended!  {newEmbed:{title:$getMessageVar[prize;$message[1]]} {description:End in:Giveaway has been ended
    Host: <@!$getMessageVar[host;$message[1]]>
    Winner(s):$if[$get[random]==;No winner (no participant);$get[random]]} {color:RED}};$channelID]
    $SendMessage[$if[$get[random]!=;<:xelapresent:951923632811163689> Congrats $get[random] you won **$getMessageVar[prize;$message[1]]**;No participant]]
    $let[random;$djsEval[
    var arrayy = "$getReactions[$channelID;$message[1];🎉;yes;id]".split(",")
    arrayy.splice(arrayy.indexOf("$clientId"),1)
    var array = arrayy
    var win = ""
    let u = $getMessageVar[win;$message[1]]
    while (u != 0 && array!==[]) {
    let r = Math.floor(Math.random()*array.length);
    win += "<@!"+array[r]+">" + " "
    array.splice(array.indexOf(array[r]), 1)
    u = u - 1
    }
    win.split(" ").filter(function(a) {
    return a!='<@!undefined>' && a != '' && a != 'undefined'
    }).join(", ")
    ;yes]]
    $onlyIf[$getMessage[$channelID;$message[1]]==Giveaway Ended!;Giveaway with that id not yet ended]
    $onlyIf[$message[1]!=;provide valid message id]
    $onlyPerms[managemessages;you are not a staff]
    `
        }]