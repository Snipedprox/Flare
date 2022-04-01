module.exports = {
name:"tagadd",
code:`**<a:D_tick:953783189971816530> Added \`$splittext[1]\` as a tag**
$setservervar[reply;$getservervar[reply]~~$splittext[2]]
$setservervar[tags;$getservervar[tags]~~$splittext[1]]
$onlyif[$checkcontains[$tolowercase[$message];setuservar;setvar;setservervar;setmessagevar;setchannelvar;clienttoken;djseval;eval]==false;]
$onlyif[$checkcontains[$splittext[1]; ]==false;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You cant have spaces in your trigger**}}]
$onlyif[$splittext[2]!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [trigger] | [reply]\`**}}]
$textsplit[$replacetext[$message; |;|;1];|]`}