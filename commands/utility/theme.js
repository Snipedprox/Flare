module.exports = {
name: "themes",
$if: "v4",
aliases: "theme",
usage: "themes [red/02/blue/future]",
code: `
$if[$tolowercase[$message[1]]==]
$author[1;Theme switching;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;
  __**red**__
\`\`\`js
Switches to a redish theme\`\`\`
  __**02**__
\`\`\`js
Switches to a ZeroTwo theme\`\`\`
  __**blue**__
\`\`\`js
Switches to a blueish theme\`\`\`
  __**future**__
\`\`\`js
Switches to a modernish theme\`\`\`]
$else
$if[$tolowercase[$message[1]]==help]
$author[1;Theme switching;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;
  __**red**__
\`\`\`js
Switches to a redish theme\`\`\`
  __**02**__
\`\`\`js
Switches to a ZeroTwo theme\`\`\`
  __**blue**__
\`\`\`js
Switches to a blueish theme\`\`\`
  __**future**__
\`\`\`js
Switches to a modernish theme\`\`\`]
$else
$if[$tolowercase[$message[1]]==red]
$setServerVar[color;fd003c]
$setServerVar[suca;https://cdn.discordapp.com/emojis/961724963184865291.webp?size=128&quality=lossless]
$setServerVar[check;<:check:961724963184865291>]
$setServerVar[error;<:big_red_x:961726678474842233>]
$setServerVar[rdot;<:reddot:953977080054415380>]
$setServerVar[symbol;<:coined:957461863292096562>]



$author[1;Theme switching;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;
**Selected the __red__ theme**]
$else
$if[$tolowercase[$message[1]]==02]
$setServerVar[color;f4c2c2]
$setServerVar[suca;https://media.discordapp.net/attachments/955629081611866134/961993174463696926/unknown.png]
$setServerVar[check;<:8700zerolove:955637262014623796>]
$setServerVar[error;<:ZeroWorried:955637230939033660>]
$setServerVar[rdot;<:topggDotPink:960279787073589268>]
$setServerVar[symbol;<a:bounceheart:961998092515831848>]



$author[1;Theme switching;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;
**Selected the __Zero Two__ theme**]
$else
$if[$tolowercase[$message[1]]==blue]
$setServerVar[color;bcd4e6]
$setServerVar[suca;https://media.discordapp.net/attachments/955629081611866134/961993580442943508/unknown.png]
$setServerVar[check;<:bluetik:961994735327789086>]
$setServerVar[error;<:bluex:961995206587191356>]
$setServerVar[rdot;<:bluedot:961995469679120404>]
$setServerVar[symbol;<:D_Moderator:954025326349000705> Shield credits]



$author[1;Theme switching;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;
**Selected the __blue__ theme**]
$else
$if[$tolowercase[$message[1]]==future]
$setServerVar[color;a3c1ad]
$setServerVar[suca;https://cdn.discordapp.com/emojis/805116425345302528.webp?size=128&quality=lossless]
$setServerVar[check;<a:D_tick:953783189971816530>]
$setServerVar[error;<a:cross:953779059756789781>]
$setServerVar[rdot;<a:D_Loading1:954025328718798898>]
$setServerVar[symbol;<:D_Moderator:954025326349000705> Shield credits]



$author[1;Theme switching;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;
**Selected the __future__ theme**]


$else
$author[1;Theme switching;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;
  __**red**__
\`\`\`js
Switches to a redish theme\`\`\`
  __**02**__
\`\`\`js
Switches to a ZeroTwo theme\`\`\`
  __**blue**__
\`\`\`js
Switches to a blueish theme\`\`\`
  __**future**__
\`\`\`js
Switches to a modernish theme\`\`\`]
$endif
$endif
$endif
$endif
$endif
$endif



$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]`}






