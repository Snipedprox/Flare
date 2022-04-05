module.exports = {
name: "ecoset",
$if: "v4",
code: `$if[$toLowerCase[$message[1]]==emote]
$color[1;$getServerVar[color]]
$description[1;**<:D_rightarrow:953778843389399131> Changed economy emote to ( $messageSlice[1] )**]
$setServerVar[symbol;$messageSlice[1]]
$argsCheck[>0;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Please enter a message**} {color:$getServerVar[color]} {description: **Usage : \`$commandname [emote/string]\`**}}]
$endif`}