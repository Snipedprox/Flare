module.exports = {
name: "slots",
$if: "v4",
aliases: "slot",
code: `
$if[$randomText[win;lose;win;win;lose;lose;lose;win]==win]
 <:blanky:935671812317143070> ┊ <:blanky:935671812317143070> ┊ <:blanky:935671812317143070> 
You bet $numberSeparator[$truncate[$message];,] $getServerVar[symbol] 
$editIn[0.5s;$randomText[<:devilish:949696071704145970>;<:gifting:949696444015726632>;<:bronze:949697135887122514>;<:golden:949696713025781830>;<:platinum:949696661075165214>;<:rewine:949696268303728670>] ┊ <:blanky:935671812317143070> ┊ <:blanky:935671812317143070>  
You bet $numberSeparator[$truncate[$message];,] $getServerVar[symbol] ;
$randomText[<:devilish:949696071704145970>;<:gifting:949696444015726632>;<:bronze:949697135887122514>;<:golden:949696713025781830>;<:platinum:949696661075165214>;<:rewine:949696268303728670>] ┊ $randomText[<:devilish:949696071704145970>;<:gifting:949696444015726632>;<:bronze:949697135887122514>;<:golden:949696713025781830>;<:platinum:949696661075165214>;<:rewine:949696268303728670>] ┊ <:blanky:935671812317143070> 
You bet $numberSeparator[$truncate[$message];,] $getServerVar[symbol]
;$randomText[<:devilish:949696071704145970>;<:gifting:949696444015726632>;<:bronze:949697135887122514>;<:golden:949696713025781830>;<:platinum:949696661075165214>;<:rewine:949696268303728670>] ┊ $randomText[<:devilish:949696071704145970>;<:gifting:949696444015726632>;<:bronze:949697135887122514>;<:golden:949696713025781830>;<:platinum:949696661075165214>;<:rewine:949696268303728670>] ┊ $randomText[<:devilish:949696071704145970>;<:gifting:949696444015726632>;<:bronze:949697135887122514>;<:golden:949696713025781830>;<:platinum:949696661075165214>;<:rewine:949696268303728670>]
**+ You bet $numberSeparator[$truncate[$message];,] $getServerVar[symbol]
+ $numberseparator[$multi[$truncate[$message];2];,] $getServerVar[symbol]**]

$setUserVar[cash;$sum[$getUserVar[cash];$truncate[$multi[2;$message]]]]


$else


$if[$randomText[win;lose;win;win;lose;lose;lose;win]==lose]

<:blanky:935671812317143070> ┊ <:blanky:935671812317143070> ┊ <:blanky:935671812317143070> 
You bet $numberSeparator[$truncate[$message];,] $getServerVar[symbol]] 
$editIn[0.5s;$randomText[<:devilish:949696071704145970>;<:gifting:949696444015726632>;<:bronze:949697135887122514>;<:golden:949696713025781830>;<:platinum:949696661075165214>;<:rewine:949696268303728670>] ┊ <:blanky:935671812317143070> ┊ <:blanky:935671812317143070>  
You bet $numberSeparator[$truncate[$message];,] $getServerVar[symbol] ;
$randomText[<:devilish:949696071704145970>;<:gifting:949696444015726632>;<:bronze:949697135887122514>;<:golden:949696713025781830>;<:platinum:949696661075165214>;<:rewine:949696268303728670>] ┊ $randomText[<:gifting:949696444015726632>;<:devilish:949696071704145970>;<:bronze:949697135887122514>;<:golden:949696713025781830>;<:platinum:949696661075165214>;<:rewine:949696268303728670>] ┊ <:blanky:935671812317143070> 
You bet $numberSeparator[$truncate[$message];,] $getServerVar[symbol]
;$randomText[<:devilish:949696071704145970>;<:gifting:949696444015726632>;<:bronze:949697135887122514>;<:golden:949696713025781830>;<:platinum:949696661075165214>;<:rewine:949696268303728670>] ┊ $randomText[<:gifting:949696444015726632>;<:devilish:949696071704145970>;<:bronze:949697135887122514>;<:golden:949696713025781830>;<:platinum:949696661075165214>;<:rewine:949696268303728670>] ┊ $randomText[<:devilish:949696071704145970>;<:bronze:949697135887122514>;<:gifting:949696444015726632>;<:golden:949696713025781830>;<:platinum:949696661075165214>;<:rewine:949696268303728670>]
**You bet $numberSeparator[$truncate[$message];,] $getServerVar[symbol]
You lost that all .... :#RIGHT#**]


$setUserVar[cash;$sub[$getUserVar[cash;$authorID];$truncate[$message]];$authorID]
$endif
$endif
$cooldown[30s;{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can use the command again in \`%time%\`**

Tip: *While you wait, vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]

$onlyIf[$truncate[$message]>0;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You need to bet more than 0$getservervar[symbol]**}}]

$onlyIf[$getUserVar[cash;$authorID]>=$truncate[$message];{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You dont have that much**}}]

$onlyIf[$truncate[$message]<=$getServerVar[smax];{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You cant bet more than $numberseparator[$getServerVar[smax];,]**}}]

$argsCheck[>0;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [amount]\`**}}]`}