module.exports = [{
name: "help",
$if: "v4",
aliases: ['hep','hell','hepp','heb','helpp','heq','module','modules','hlp','hemp','hlep','hpl'],
code: `

$getServerVar[check]** You are viewing my help menu**
$author[1;Welcome to my commands;$useravatar[$clientid]]
$color[1;$getServerVar[color]]
$description[1;**Use the select menu to find the command list**]

$image[1;https://cdn.discordapp.com/attachments/933455205230592010/965300990221906010/Flare.gif]



$addSelectMenu[1;cmd;Help categories;1;1;no;Music:Music commands:one:no:<:thicc_point:961725856424804472>;Moderation:Moderation commands:two:no:<:thicc_point:961725856424804472>;Fun:Fun commands:three:no:<:thicc_point:961725856424804472>;Economy:Economy commands:four:no:<:thicc_point:961725856424804472>;Level:Level commands:five:no:<:thicc_point:961725856424804472>;Utility:Utility commands:six:no:<:thicc_point:961725856424804472>;Giveaway:Giveaway commands:seven:no:<:thicc_point:961725856424804472>;Nsfw:Nsfw commands:eight:no:<:thicc_point:961725856424804472>;Ticket:Ticket commands:ten:no:<:thicc_point:961725856424804472>;Button roles:Button role commands:11:no:<:thicc_point:961725856424804472>;Welcome:Welcome commands:12:no:<:thicc_point:961725856424804472>;Story:Story commands:13:no:<:thicc_point:961725856424804472>;Counting:Counting commands:14:no:<:thicc_point:961725856424804472>;Birthday:Birthday commands:15:no:<:thicc_point:961725856424804472>;Biography:Biography commands:16:no:<:thicc_point:961725856424804472>;Global chat:Global chat commands:17:no:<:thicc_point:961725856424804472>;Custom channels:Custom channel commands:18:no:<:thicc_point:961725856424804472>;Add bot:Add bot commands:19:no:<:thicc_point:961725856424804472>;Starboard:Starboard commands:20:no:<:thicc_point:961725856424804472>;Developer:Developer commands:nine:no:<:thicc_point:961725856424804472>]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:🎧 **Music**} {description:\`play\`,\`pause\`,\`resume\`,\`nowplaying\`,\`previous\`,\`skip\`,\`shuffle\`,\`loop\`,\`seek\`,\`volume\`,\`volume-max\`,\`stop\`,\`queue\`,\`join\`,\`disconnect\`,\`playlist\`,\`pladd\`,\`plplay\`,\`plrename\`,\`music-edit\`,\`filter\`,\`24/7\`}};;;;yes]
$onlyif[$interactionData[values[0]]==one;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:🛡️ **Moderation**} {description:\`bd\`,\`bwl\`,\`add-bw\`,\`remove-bw\`,\`role\`,\`takerole\`,\`ban\`,\`kick\`,\`lock\`,\`unban\`,\`unlock\`,\`lockdown\`,\`unlockdown\`,\`viewlock\`,\`lock\`,\`viewunlock\`,\`viewlockdown\`,\`viewunlockdown\`,\`setmute\`,\`mute\`,\`setvent\`,\`slash\`,\`tagdelete\`,\`autorole\`}};;;;yes]
$onlyif[$interactionData[values[0]]==two;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:🎮 **Fun**} {description:\`ppsize\`,\`meme\`,\`say\`,\`8ball\`,\`maccept\`,\`mdecline\`,\`divorce\`,\`marriage\`,\`marry\`,\`cookie\`,\`flower\`,\`run\`,\`pray\`,\`curse\`,\`cuddle\`,\`wave\`,\`poke\`,\`baka\`,\`bored\`,\`stare\`,\`shrug\`,\`blush\`,\`bite\`,\`facepalm\`,\`sleep\`,\`cry\`,\`dance\`,\`smile\`,\`smug\`,\`pat\`,\`feed\`,\`happy\`,\`think\`,\`pout\`,\`highfive\`,\`hug\`,\`tickle\`,\`slap\`,\`kiss\`,\`laugh\`,\`wink\`,\`thumbsup\`,\`nekos\`,\`disable-gtn\`,\`gtn\`,\`guess-number\`}};;;;yes]
$onlyif[$interactionData[values[0]]==three;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:💸 **Economy**} {description:\`ecohelp\`,\`beg\`,\`casino\`,\`coinflip\`,\`daily\`,\`double\`,\`lb-cash\`,\`lootbox\`,\`pay\`,\`rob\`,\`slots\`,\`work\`,\`slut\`,\`crime\`,\`balance\`,\`buy\`,\`lootbox-buy\`,\`shop\`,\`collect-income\`,\`income-list\`,\`role-income\`,\`role-cooldown\`,\`beg-payout\`,\`beg-reply\`,\`chat-channel\`,\`chat-cooldown\`,\`chat-payout\`,\`crime-payout\`,\`crime-reply\`,\`setcooldown\`,\`slut-payout\`,\`slut-reply\`,\`work-payout\`,\`work-reply\`,\`ecoconfig\`,\`ecoset\`,\`ecoblacklist\`,\`ecounblacklist\`,\`economy\`,\`lootbox-add\`,\`lootbox-set\`,\`addshop\`,\`removeshop\`,\`addall\`,\`takeall\`,\`moneyrole\`,\`takemoneyrole\`,\`reseteco\`,\`lootbox-remove\`}};;;;yes]
$onlyif[$interactionData[values[0]]==four;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:🚀 **Level**} {description:\`levelall\`,\`leveltakeall\`,\`takelevelrole\`,\`xpall\`,\`xptakeall\`,\`xprole\`,\`takexprole\`,\`add-level\`,\`add-xp\`,\`lb\`,\`level\`,\`remove-level\`,\`remove-xp\`,\`reset-level\`,\`reset-level-all\`,\`set-level\`,\`set-xp\`,\`enablexp\`,\`disablexp\`,\`xpleft\`}};;;;yes]
$onlyif[$interactionData[values[0]]==five;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:⚙️ **Utility**} {description:\`bug\`,\`math\`,\`source\`,\`remind-me\`,\`remind-channel\`,\`nameemoji\`,\`nameme\`,\`password\`,\`urban\`,\`uniemoji\`,\`mdhtml\`,\`theme\`,\`cmd\`,\`uprefix\`,\`cprefix\`,\`whois\`,\`support\`,\`snipe\`,\`snipereset\`,\`editsnipe\`,\`sniperoles\`,\`afk\`,\`afkreason\`,\`afkreset\`,\`afkroles\`,\`avatar\`,\`banner\`,\`clear\`,\`help\`,\`ping\`,\`serverinfo\`,\`stats\`,\`prefix\`,\`reverse\`,\`poll\`,\`quote\`,\`invite\`,\`members\`,\`uptime\`,\`dmmail\`,\`mail\`,\`inbox\`,\`maildelete\`,\`gtnstats\`,\`avlink\`,\`length\`,\`nickname\`,\`userid\`,\`username\`,\`usertag\`,\`tagadd\`,\`tag\`,\`tags\`,\`add-cmd\`,\`del-cmd\`,\`cmd-list\`,\`cmdcodes\`,\`stickyadd\`,\`stickydelete\`.\`stickies\`}};;;;yes]
$onlyif[$interactionData[values[0]]==six;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:🎉 **Giveaway**} {description:\`gcheck\`,\`gdelete\`,\`gedit\`,\`gpause\`,\`greroll\`,\`gstart\`,\`gunpause\`}};;;;yes]
$onlyif[$interactionData[values[0]]==seven;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:🔞 **Nsfw**} {description:$replaceText[$replaceText[$channelNsfw[$channelid];true;\`3d-porn\`,\`aesthetic\`,\`amateur\`,\`anal\`,\`asian\`,\`asmr\`,\`ass\`,\`bath-shower\`,\`bdsm\`,\`boobs\`,\`cock\`,\`cosplay\`,\`creampie\`,\`cuckhold\`,\`cumshots\`,\`dilf\`,\`double-penetration\`,\`ebony\`,\`feet\`,\`femdom\`,\`fisting\`,\`food-play\`,\`funny\`,\`furry\`,\`gloryhole\`,\`goth\`,\`hands\`,\`hentai-no-loli\`,\`hentai\`,\`horror\`,\`interracial\`,\`joi\`,\`lactation\`,\`latin\`,\`bisexual\`,\`femboy\`,\`gay\`,\`lesbian\`,\`transgender\`,\`twink\`,\`lingerie\`,\`massage\`,\`mature\`,\`milf\`,\`wrestling\`,\`oral\`,\`orgy\`,\`pegging\`,\`petite\`,\`plussize\`,\`pornstar\`,\`pov\`,\`public\`,\`pussy\`,\`rimming\`,\`rough\`,\`solo\`,\`squirting\`,\`tattoos\`,\`piercings\`,\`tease\`,\`thighs\`,\`threesomes\`,\`toys\`,\`uniform\`,\`vintage\`,\`watersports\`,\`all\`];false;\`You need to be in a nsfw channel to view this\`]}};;;;yes]
$onlyif[$interactionData[values[0]]==eight;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:🏅 **Developer**} {description:\`gprefix\`,\`eval\`,\`exec\`,\`djs\`,\`uc\`,\`botleave\`,\`setstaus\`,\`sname\`,\`sav\`,\`reboot\`,\`guilds\`,\`whitelist\`,\`unwhitelist\`,\`wlist\`,\`devunlist\`,\`devlist\`,\`devs\`}};;;;yes]
$onlyif[$interactionData[values[0]]==nine;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:🗃️ **Ticket**} {description:\`ticket\`,\`ticket deny\`,\`ticket approve\`,\`ticket solve\`,\`ticket unsolve\`,\`ticket staff\`,\`ticket claim\`,\`ticket unclaim\`,\`ticket close\`,\`ticket open\`,\`ticket ban\`,\`ticket unban\`,\`ticket archive\`,\`ticket unarchive\`,\`ticket category\`,\`ticket help\`}};;;;yes]
$onlyif[$interactionData[values[0]]==ten;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:🔎 **Button roles**} {description:\`btn-role\`,\`nmbrole\`,\`abrole\`,\`nmabrole\`}};;;;yes]
$onlyif[$interactionData[values[0]]==11;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:🍁 **Welcome**} {description:\`remove-goodbye\`,\`remove-welcome\`,\`set-embed-color\`,\`set-goodbye\`,\`set-welcome\`,\`gmessage\`,\`wmessage\`,\`limg\`,\`wimg\`,\`twelcome\`,\`tgoodbye\`}};;;;yes]
$onlyif[$interactionData[values[0]]==12;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:📖 **Stories**} {description:\`afterthey\`,\`lostgravity\`,\`lostland\`,\`storycredits\`,\`submerged\`,\`threadtime\`,\`youleftme\`}};;;;yes]
$onlyif[$interactionData[values[0]]==13;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:⏳ **Counting**} {description:\`setcount\`,\`disablecount\`,\`blacklistcount\`,\`unblacklistcount\`,\`sumcount\`,\`subcount\`}};;;;yes]
$onlyif[$interactionData[values[0]]==14;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:🎂 **Birthday**} {description:\`bday\`,\`bdays\`,\`present\`,\`bdaypresent\`,\`bdaychannel\`,\`present\`}};;;;yes]
$onlyif[$interactionData[values[0]]==15;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:📮 **Biography**} {description:\`setage\`,\`setbio\`,\`setbirthday\`,\`setgender\`,\`setheight\`,\`sethobbies\`,\`setcountry\`,\`setname\`,\`setnickname\`,\`setprofilecolor\`,\`setprofileimage\`,\`setpronoun\`,\`setzodiacsign\`,\`bio\`}};;;;yes]
$onlyif[$interactionData[values[0]]==16;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:📲 **Global chat**} {description:\`call-edit\`,\`joincall\`,\`stopcall\`}};;;;yes]
$onlyif[$interactionData[values[0]]==17;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:🛎️ **Custom channels**} {description:\`ccadd\`,\`ccdelete\`,\`ccnsfw\`,\`ccpurge\`,\`cc\`,\`ccunnsfw\`,\`ccremove\`,\`cctopic\`,\`disablecc\`,\`allowcc\`}};;;;yes]
$onlyif[$interactionData[values[0]]==18;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:🤖 **Addbot**} {description:\`accept\`,\`addbot\`,\`decline\`,\`setaccept\`,\`setblog\`,\`setabot\`}};;;;yes]
$onlyif[$interactionData[values[0]]==19;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:*⭐ Starboard**} {description:\`delete-starboard\`,\`disablestarboard\`,\`force-starboard\`,\`setsboard\`,\`setsreq\`,\`starboard\`}};;;;yes]
$onlyif[$interactionData[values[0]]==20;]`}]