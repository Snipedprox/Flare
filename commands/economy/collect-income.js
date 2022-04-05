module.exports = {
name: "collect-income",
$if: "v4",
code: `
$if[$message==1]
**You collected your role income ( \`$rolename[$getservervar[rincome1]]\` ) worth $numberSeparator[$getServerVar[princome1];,]$getServerVar[symbol]**
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[princome1]]]

$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[rincome1]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont have that role**}}]
$onlyIf[$roleexists[$getServerVar[rincome1];$guildid]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **This role incom has not been made yet**}}]
$cooldown[$getServerVar[rolecd];{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can collect this income index again in \`%time%\`**

Tip: *While you wait, try collecting other incomes and vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]
$endif


$if[$message==2]
**You collected your role income ( \`$rolename[$getservervar[rincome2]]\` ) worth $numberSeparator[$getServerVar[princome2];,]$getServerVar[symbol]**
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[princome2]]]

$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[rincome2]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont have that role**}}]
$onlyIf[$roleexists[$getServerVar[rincome2];$guildid]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **This role incom has not been made yet**}}]
$cooldown[$getServerVar[rolecd];{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can collect this income index again in \`%time%\`**

Tip: *While you wait, try collecting other incomes and vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]
$endif



$if[$message==3]
**You collected your role income ( \`$rolename[$getservervar[rincome3]]\` ) worth $numberSeparator[$getServerVar[princome3];,]$getServerVar[symbol]**
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[princome3]]]

$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[rincome3]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont have that role**}}]
$onlyIf[$roleexists[$getServerVar[rincome3];$guildid]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **This role incom has not been made yet**}}]
$cooldown[$getServerVar[rolecd];{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can collect this income index again in \`%time%\`**

Tip: *While you wait, try collecting other incomes and vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]
$endif



$if[$message==4]
**You collected your role income ( \`$rolename[$getservervar[rincome4]]\` ) worth $numberSeparator[$getServerVar[princome4];,]$getServerVar[symbol]**
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[princome4]]]

$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[rincome4]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont have that role**}}]
$onlyIf[$roleexists[$getServerVar[rincome4];$guildid]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **This role incom has not been made yet**}}]
$cooldown[$getServerVar[rolecd];{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can collect this income index again in \`%time%\`**

Tip: *While you wait, try collecting other incomes and vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]
$endif



$if[$message==5]
**You collected your role income ( \`$rolename[$getservervar[rincome5]]\` ) worth $numberSeparator[$getServerVar[princome5];,]$getServerVar[symbol]**
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[princome5]]]

$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[rincome5]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont have that role**}}]
$onlyIf[$roleexists[$getServerVar[rincome5];$guildid]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **This role incom has not been made yet**}}]
$cooldown[$getServerVar[rolecd];{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can collect this income index again in \`%time%\`**

Tip: *While you wait, try collecting other incomes and vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]
$endif



$if[$message==6]
**You collected your role income ( \`$rolename[$getservervar[rincome6]]\` ) worth $numberSeparator[$getServerVar[princome6];,]$getServerVar[symbol]**
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[princome6]]]

$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[rincome6]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont have that role**}}]
$onlyIf[$roleexists[$getServerVar[rincome6];$guildid]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **This role incom has not been made yet**}}]
$cooldown[$getServerVar[rolecd];{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can collect this income index again in \`%time%\`**

Tip: *While you wait, try collecting other incomes and vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]
$endif



$if[$message==7]
**You collected your role income ( \`$rolename[$getservervar[rincome7]]\` ) worth $numberSeparator[$getServerVar[princome7];,]$getServerVar[symbol]**
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[princome7]]]

$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[rincome7]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont have that role**}}]
$onlyIf[$roleexists[$getServerVar[rincome7];$guildid]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **This role incom has not been made yet**}}]
$cooldown[$getServerVar[rolecd];{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can collect this income index again in \`%time%\`**

Tip: *While you wait, try collecting other incomes and vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]
$endif


$if[$message==8]
**You collected your role income ( \`$rolename[$getservervar[rincome8]]\` ) worth $numberSeparator[$getServerVar[princome8];,]$getServerVar[symbol]**
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[princome8]]]

$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[rincome8]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont have that role**}}]
$onlyIf[$roleexists[$getServerVar[rincome8];$guildid]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **This role incom has not been made yet**}}]
$cooldown[$getServerVar[rolecd];{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can collect this income index again in \`%time%\`**

Tip: *While you wait, try collecting other incomes and vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]
$endif


$if[$message==9]
**You collected your role income ( \`$rolename[$getservervar[rincome9]]\` ) worth $numberSeparator[$getServerVar[princome9];,]$getServerVar[symbol]**
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[princome9]]]

$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[rincome9]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont have that role**}}]
$onlyIf[$roleexists[$getServerVar[rincome9];$guildid]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **This role incom has not been made yet**}}]
$cooldown[$getServerVar[rolecd];{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can collect this income index again in \`%time%\`**

Tip: *While you wait, try collecting other incomes and vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]
$endif




$if[$message==10]
**You collected your role income ( \`$rolename[$getservervar[rincome10]]\` ) worth $numberSeparator[$getServerVar[princome10];,]$getServerVar[symbol]**
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[princome10]]]

$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[rincome10]]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **You dont have that role**}}]
$onlyIf[$roleexists[$getServerVar[rincome10];$guildid]==true;{newEmbed: {color:$getServerVar[color]} {author:An error has occured:https://cdn.discordapp.com/emojis/946761780540112977.webp?size=56&quality=lossless} {description: <:reddx:953987871319162890> **This role incom has not been made yet**}}]

$cooldown[$getServerVar[rolecd];{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can collect this income index again in \`%time%\`**

Tip: *While you wait, try collecting other incomes and vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]
$endif

$onlyIf[$message!=;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [Index]\`**}}]

`}