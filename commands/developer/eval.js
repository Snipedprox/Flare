module.exports = { 
   name: "eval",
   $if: "v4",
  code:`
$eval[$message]
$onlyForIDs[$botOwnerID;896846485805744168;$joinSplitText[;];]
$textSplit[$getGlobalUserVar[dev;$clientid];/]
$deleteCommand
$onlyif[$charCount[$message]>0;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [text]\`**}}]`
}