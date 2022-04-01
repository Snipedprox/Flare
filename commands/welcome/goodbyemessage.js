module.exports = {
name: "goodbye-message",
$if: "v4",
aliases: ['message-goodbye','gmessage'],
code: `
**<a:D_tick:953783189971816530> Leaving message has been set to ( $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;<name>;$username];<mention>;<@$authorid>];<tag>;$usertag[$authorid]];<servername>;$servername];<count>;$memberscount] )**

$setServerVar[gmessage;$message]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]

$onlyIf[$message!=;{newEmbed: {color:$getServerVar[color]} {description:<:xelamhm:952137241336102912> **$username Allowed tags \`<servername>\`,\`<tag>\`,\`<count>\`,\`<name>\`,\`<mention>\`**}}]`}