module.exports = {
name: "work-payout",
code: `
<a:D_tick:953783189971816530> **Set the payout for \`work\` from $message[1] up to $message[2] **
$setServerVar[wmpayout;$message[1]]
$setServerVar[wmmpayout;$message[2]]

$argsCheck[2;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Please enter a message**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [min] [max]\`**}}]

$onlyIf[$isNumber[$message[1]]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **That is an invalid number** }}]
$onlyIf[$isNumber[$message[2]]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **That is an invalid number** }}]

$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]`}