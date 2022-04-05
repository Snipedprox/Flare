module.exports = {
  name: "removeshop",
  code:`
  $resetServerVar[rp$message]
  $resetServerVar[ro$message]
$sendMessage[<a:D_tick:953783189971816530> **Deleted the role from the shop**;no]

$onlyIf[$hasperms[$guildid;$authorid;manageserver]==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You are missing the [manage server](https://top.gg/bot/$clientid) permission**}}]

$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Please enter a message**} {color:$getServerVar[color]} {description: **Usage : \`$commandname [index]\`**}}]
`
}