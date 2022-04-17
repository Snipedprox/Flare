module.exports = {
name: "twelcome",
aliases: "tjoin",
code: `
$author[1;New user joined;$authoravatar]
$color[1;$getServerVar[color]]
$description[1;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[wmessage];<name>;$username];<mention>;<@$authorid>];<tag>;$usertag[$authorid]];<servername>;$servername];<count>;$memberscount];<owner>;$username[$ownerid]];<owner.tag>;$usertag[$ownerid]];<owner.id>;$ownerid];<owner.mention>;<@$ownerid>];<author.id>;$authorid];<user.age>;<t:$truncate[$divide[$creationDate[$authorid;ms];1000]]:R>];<owner.age>;<t:$truncate[$divide[$creationDate[$ownerid;ms];1000]]:R>];<server.age>;<t:$truncate[$divide[$creationDate[$guildid;ms];1000]]:R>];<join.time>;<t:$truncate[$divide[$datestamp;1000]]:R>];undefined;**☕ Welcome to $servername <@$authorID>, we now have $membersCount members!**]]
$image[1;$get[wimg]]
$let[wimg;$replaceText[$getServerVar[wimg];undefined;$jsonRequest[https://nekos.best/api/v1/wave;url]]]


$onlyIf[$hasPerms[$guildid;$authorid;managechannel]==true;$getServerVar[error] **You are missing the \`manage channels\` permission**]
$onlyIf[$hasPerms[$guildid;$clientid;managechannel]==true;$getServerVar[error] **I am missing the \`manage channels\` permission**]`}