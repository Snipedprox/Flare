module.exports = {
name: "collect-income",
$if: "v4",
aliases: "cincome",
usage: "collect-income [1/2/3/4/5/6/7/8/9/10]",
code: `
$if[$message==1]
$getServerVar[check] **$username** You collected your role income ( \`$rolename[$getservervar[rincome1]]\` ) worth $numberSeparator[$getServerVar[princome1];,]$getServerVar[symbol]
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[princome1]]]

$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[rincome1]]==true;$getServerVar[error] **$username** You don't have that role]
$onlyIf[$roleexists[$getServerVar[rincome1];$guildid]==true;$getServerVar[error] **$username** This role income has not been set yet]
$cooldown[$getServerVar[rolecd];$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]
$endif


$if[$message==2]
$getServerVar[check] **$username** You collected your role income ( \`$rolename[$getservervar[rincome2]]\` ) worth $numberSeparator[$getServerVar[princome2];,]$getServerVar[symbol]
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[princome2]]]

$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[rincome2]]==true;$getServerVar[error] **$username** You don't have that role]
$onlyIf[$roleexists[$getServerVar[rincome2];$guildid]==true;$getServerVar[error] **$username** This role income has not been set yet]
$cooldown[$getServerVar[rolecd];$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]
$endif



$if[$message==3]
$getServerVar[check] **$username** You collected your role income ( \`$rolename[$getservervar[rincome3]]\` ) worth $numberSeparator[$getServerVar[princome3];,]$getServerVar[symbol]
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[princome3]]]
$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[rincome3]]==true;$getServerVar[error] **$username** You don't have that role]
$onlyIf[$roleexists[$getServerVar[rincome3];$guildid]==true;$getServerVar[error] **$username** This role income has not been set yet]
$cooldown[$getServerVar[rolecd];$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]
$endif



$if[$message==4]
$getServerVar[check] **$username** You collected your role income ( \`$rolename[$getservervar[rincome4]]\` ) worth $numberSeparator[$getServerVar[princome4];,]$getServerVar[symbol]
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[princome4]]]

$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[rincome4]]==true;$getServerVar[error] **$username** You don't have that role]
$onlyIf[$roleexists[$getServerVar[rincome4];$guildid]==true;$getServerVar[error] **$username** This role income has not been set yet]
$cooldown[$getServerVar[rolecd];$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]
$endif



$if[$message==5]
$getServerVar[check] **$username** You collected your role income ( \`$rolename[$getservervar[rincome5]]\` ) worth $numberSeparator[$getServerVar[princome5];,]$getServerVar[symbol]
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[princome5]]]

$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[rincome5]]==true;$getServerVar[error] **$username** You don't have that role]
$onlyIf[$roleexists[$getServerVar[rincome5];$guildid]==true;$getServerVar[error] **$username** This role income has not been set yet]
$cooldown[$getServerVar[rolecd];$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]
$endif



$if[$message==6]
$getServerVar[check] **$username** You collected your role income ( \`$rolename[$getservervar[rincome6]]\` ) worth $numberSeparator[$getServerVar[princome6];,]$getServerVar[symbol]
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[princome6]]]

$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[rincome6]]==true;$getServerVar[error] **$username** You don't have that role]
$onlyIf[$roleexists[$getServerVar[rincome6];$guildid]==true;$getServerVar[error] **$username** This role income has not been set yet]
$cooldown[$getServerVar[rolecd];$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]
$endif



$if[$message==7]
$getServerVar[check] **$username** You collected your role income ( \`$rolename[$getservervar[rincome7]]\` ) worth $numberSeparator[$getServerVar[princome7];,]$getServerVar[symbol]
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[princome7]]]

$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[rincome7]]==true;$getServerVar[error] **$username** You don't have that role]
$onlyIf[$roleexists[$getServerVar[rincome7];$guildid]==true;$getServerVar[error] **$username** This role income has not been set yet]
$cooldown[$getServerVar[rolecd];$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]
$endif


$if[$message==8]
$getServerVar[check] **$username** You collected your role income ( \`$rolename[$getservervar[rincome8]]\` ) worth $numberSeparator[$getServerVar[princome8];,]$getServerVar[symbol]
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[princome8]]]

$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[rincome8]]==true;$getServerVar[error] **$username** You don't have that role]
$onlyIf[$roleexists[$getServerVar[rincome8];$guildid]==true;$getServerVar[error] **$username** This role income has not been set yet]
$cooldown[$getServerVar[rolecd];$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]
$endif


$if[$message==9]
$getServerVar[check] **$username** You collected your role income ( \`$rolename[$getservervar[rincome9]]\` ) worth $numberSeparator[$getServerVar[princome9];,]$getServerVar[symbol]
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[princome9]]]

$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[rincome9]]==true;$getServerVar[error] **$username** You don't have that role]
$onlyIf[$roleexists[$getServerVar[rincome9];$guildid]==true;$getServerVar[error] **$username** This role income has not been set yet]
$cooldown[$getServerVar[rolecd];$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]
$endif




$if[$message==10]
$getServerVar[check] **$username** You collected your role income ( \`$rolename[$getservervar[rincome10]]\` ) worth $numberSeparator[$getServerVar[princome10];,]$getServerVar[symbol]
$setUserVar[cash;$sum[$getUserVar[cash];$getServerVar[princome10]]]

$onlyIf[$hasRoles[$guildid;$authorid;$getServerVar[rincome10]]==true;$getServerVar[error] **$username** You don't have that role]
$onlyIf[$roleexists[$getServerVar[rincome10];$guildid]==true;$getServerVar[error] **$username** This role income has not been set yet]

$cooldown[$getServerVar[rolecd];$getServerVar[error] **$username** You are **still** on cooldown, \`%time%\` left]
$endif

$onlyIf[$message!=;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < index >\`\`\`]

`}