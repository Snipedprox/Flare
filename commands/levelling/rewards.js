module.exports = {
    name: "rewards",
    aliases: ["leveledroles","lroles"],
    code: `
$author[1;XP added;https://cdn.discordapp.com/emojis/946761779369877555.webp?size=56&quality=lossless]
$color[1;$getServerVar[color]]
$description[1;You get awesome roles by leveling up, below you can see a list of them!
__**Level 3**__

<:topggDotPink:960279787073589268> Role: $replaceText[$replaceText[%$checkCondition[$getServerVar[level3]==]%;%true%;Not setted;1];%false%;<@&$getServerVar[level3]>;1]
<:topggDotPink:960279787073589268> Progress: Level $getUserVar[level]/3 $replaceText[$replaceText[%$checkCondition[$getUserVar[level]>=3]%;%true%;(Reached);1];%false%;(Not reached yet);1]

>__**Level 5**__
<:topggDotPink:960279787073589268> Role: $replaceText[$replaceText[%$checkCondition[$getServerVar[level5]==]%;%true%;Not setted;1];%false%;<@&$getServerVar[level5]>;1]
<:topggDotPink:960279787073589268> Progress: Level $getUserVar[level]/5 $replaceText[$replaceText[%$checkCondition[$getUserVar[level]>=5]%;%true%;(Reached);1];%false%;(Not reached yet);1]

__**Level 10**__
<:topggDotPink:960279787073589268> Role: $replaceText[$replaceText[%$checkCondition[$getServerVar[level10]==]%;%true%;Not setted;1];%false%;<@&$getServerVar[level10]>;1]
<:topggDotPink:960279787073589268> Progress: Level $getUserVar[level]/10 $replaceText[$replaceText[%$checkCondition[$getUserVar[level]>=10]%;%true%;(Reached);1];%false%;(Not reached yet);1]

__**Level 20**__
<:topggDotPink:960279787073589268> Role: $replaceText[$replaceText[%$checkCondition[$getServerVar[level20]==]%;%true%;Not setted;1];%false%;<@&$getServerVar[level20]>;1]
<:topggDotPink:960279787073589268> Progress: Level $getUserVar[level]/20 $replaceText[$replaceText[%$checkCondition[$getUserVar[level]>=20]%;%true%;(Reached);1];%false%;(Not reached yet);1]

__**Level 30**__
<:topggDotPink:960279787073589268> Role: $replaceText[$replaceText[%$checkCondition[$getServerVar[level30]==]%;%true%;Not setted;1];%false%;<@&$getServerVar[level30]>;1]
<:topggDotPink:960279787073589268> Progress: Level $getUserVar[level]/30 $replaceText[$replaceText[%$checkCondition[$getUserVar[level]>=30]%;%true%;(Reached);1];%false%;(Not reached yet);1]

__**Level 40**__
<:topggDotPink:960279787073589268> Role: $replaceText[$replaceText[%$checkCondition[$getServerVar[level40]==]%;%true%;Not setted;1];%false%;<@&$getServerVar[level40]>;1]
<:topggDotPink:960279787073589268> Progress: Level $getUserVar[level]/40 $replaceText[$replaceText[%$checkCondition[$getUserVar[level]>=40]%;%true%;(Reached);1];%false%;(Not reached yet);1]

__**Level 50**__
<:topggDotPink:960279787073589268> Role: $replaceText[$replaceText[%$checkCondition[$getServerVar[level50]==]%;%true%;Not setted;1];%false%;<@&$getServerVar[level50]>;1]
<:topggDotPink:960279787073589268> Progress: Level $getUserVar[level]/50 $replaceText[$replaceText[%$checkCondition[$getUserVar[level]>=50]%;%true%;(Reached);1];%false%;(Not reached yet);1]

__**Level 60**__

<:topggDotPink:960279787073589268> Role: $replaceText[$replaceText[%$checkCondition[$getServerVar[level60]==]%;%true%;Not setted;1];%false%;<@&$getServerVar[level60]>;1]
<:topggDotPink:960279787073589268> Progress: Level $getUserVar[level]/60 $replaceText[$replaceText[%$checkCondition[$getUserVar[level]>=60]%;%true%;(Reached);1];%false%;(Not reached yet);1]

__**Level 70**__

<:topggDotPink:960279787073589268> Role: $replaceText[$replaceText[%$checkCondition[$getServerVar[level70]==]%;%true%;Not setted;1];%false%;<@&$getServerVar[level70]>;1]
<:topggDotPink:960279787073589268> Progress: Level $getUserVar[level]/70 $replaceText[$replaceText[%$checkCondition[$getUserVar[level]>=70]%;%true%;(Reached);1];%false%;(Not reached yet);1]

__**Level 80**__

<:topggDotPink:960279787073589268> Role: $replaceText[$replaceText[%$checkCondition[$getServerVar[level80]==]%;%true%;Not setted;1];%false%;<@&$getServerVar[level80]>;1]
<:topggDotPink:960279787073589268> Progress: Level $getUserVar[level]/80 $replaceText[$replaceText[%$checkCondition[$getUserVar[level]>=80]%;%true%;(Reached);1];%false%;(Not reached yet);1]

__**Level 90**__

<:topggDotPink:960279787073589268> Role: $replaceText[$replaceText[%$checkCondition[$getServerVar[level90]==]%;%true%;Not setted;1];%false%;<@&$getServerVar[level90]>;1]
<:topggDotPink:960279787073589268> Progress: Level $getUserVar[level]/90 $replaceText[$replaceText[%$checkCondition[$getUserVar[level]>=90]%;%true%;(Reached);1];%false%;(Not reached yet);1]

__**Level 100**__

<:topggDotPink:960279787073589268> Role: $replaceText[$replaceText[%$checkCondition[$getServerVar[level100]==]%;%true%;Not setted;1];%false%;<@&$getServerVar[level100]>;1]
<:topggDotPink:960279787073589268> Progress: Level $getUserVar[level]/100 $replaceText[$replaceText[%$checkCondition[$getUserVar[level]>=100]%;%true%;(Reached);1];%false%;(Not reached yet);1]]
$footer[1;♡𓂃Level up to get those awesome roles!]`}