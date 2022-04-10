module.exports = {
name: "slots",
$if: "v4",
aliases: "slot",
usage: "slot < amount >",
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
$cooldown[30s;$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]

$onlyIf[$truncate[$message]>0;$getServerVar[error] **$username** You need to be more than 0$getservervar[symbol]]

$onlyIf[$getUserVar[cash;$authorID]>=$truncate[$message];$getServerVar[error] **$username** You don't have that much credits]

$onlyIf[$truncate[$message]<=$getServerVar[smax];$getServerVar[error] **$username** You went over the bet limit]

$argsCheck[>0;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < amount >\`\`\`]`}