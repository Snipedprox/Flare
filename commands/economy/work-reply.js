module.exports = {
name: "work-reply",
code: `
<a:D_tick:953783189971816530> **Set the reply for \`work\` to $message**
$setServerVar[wreply;$getServerVar[wreply]/$message]

$argsCheck[>0;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Please enter a message**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [message]\`**}}]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]`}