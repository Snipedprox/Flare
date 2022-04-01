module.exports = {
name: "ticketrename",
$if: "v4",
code: `**<:M_ticket:957022854069755904> Renamed the ticket to $message**
$editChannel[$channelId;$message;text]


$argsCheck[>0;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [new name]\`**}}]`}