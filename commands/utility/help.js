module.exports = [{
name: "help",
$if: "v4",
aliases: ['hep','hell','hepp','heb','helpp','heq','commands','cmds','module','modules'],
code: `

$getServerVar[check]** You are viewing my help menu**
$author[1;Welcome to my commands;$useravatar[$clientid]]
$color[1;$getServerVar[color]]
$description[1;**Use the select menu to find the command list**]
$image[1;https://camo.githubusercontent.com/96c5e3040de7e13067ba98a77e4f6fb3a2723b7b15d2a8f894e5d8e7f2457d64/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3935363635373233313037303339323332322f3935393533323136383533373835343039322f4e6f7661322e706e67]
$addSelectMenu[1;cmd;Help categories;1;1;no;First page:First row of commands:one:no:<:thicc_point:961725856424804472>;Second page:Second row of commands:two:no:<:thicc_point:961725856424804472>]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:**Welcome to my commands**} {description:🎧 **Music**
\`\`\`js
filter,24/7,play,pause,resume,nowplaying,previous,skip,shuffle,loop,seek,volume,volume-max,stop,queue,join,disconnect,playlist,pladd,plplay,plrename,music-edit\`\`\`
🛡️ **Moderation**
\`\`\`js
role,takerole,ban,kick,lock,unban,unlock,lockdown,unlockdown,viewlock,lock,viewunlock,viewlockdown,viewunlockdown,setmute,mute,setvent,remove-goodbye,remove-welcome,set-embed-color,set-goodbye,set-welcome,gmessage,wmessage,slash,tagdelete,autorole\`\`\`
🗃️ **Ticket**
\`\`\`js
ticket\`\`\`
🎮 **Fun**
\`\`\`js
quotes,ppsize,meme,say,8ball,maccept,mdecline,divorce,marriage,marry,cookie,flower,run,pray,curse,cuddle,wave,poke,baka,bored,stare,shrug,blush,bite,facepalm,sleep,cry,dance,smile,smug,pat,feed,happy,think,pout,highfive,hug,tickle,slap,kiss,laugh,wink,thumbsup,nekos\`\`\`
💸 **Economy**
\`\`\`js
ecohelp,beg,casino,coinflip,daily,double,lb-cash,lootbox-add,lootbox-set,lootbox,pay,rob,slots,work,slut,crime,balance,buy,withdraw,deposit,lootbox-buy,shop,addshop,spawns,removeshop,addall,takeall,moneyrole,takemoneyrole,reseteco,ecoconfig,ecoset,lootbox-remove,collect-income,role-income,role-cooldown,income-list,role-income,beg-payout,beg-reply,chat-channel,chat-cooldown,chat-payout,crime-payout,crime-reply,setcooldown,slut-payout,slut-reply,work-payout,work-reply\`\`\`
🚀 **Level**
\`\`\`js
add-level,add-xp,lb,level,remove-level,remove-xp,reset-level,reset-level-all,set-level,set-xp,enablexp,disablexp,rewards,set-reward,xpleft\`\`\`}};;;;yes]
$onlyif[$interactionData[values[0]]==one;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:**Welcome to my commands**} {description:⚙️ **Utility**
\`\`\`js
theme,command,uprefix,cprefix,whois,support,snipe,snipereset,editsnipe,sniperoles,afk,afkreason,afkreset,afkroles,avatar,banner,clear,help,ping,serverinfo,stats,prefix,reverse,poll,quote,invite,members,uptime,dmmail,mail,inbox,maildelete,suggest,suggest delete,suggestion approve,suggestion decline,suggestion note,setupsuggest,add-cmd,del-cmd,cmd-list,qotd,gtnstats,tagadd,tag,tags,avlink,length,nickname,userid,username,usertag\`\`\`
📖 **Stories**
\`\`\`js
afterthey,lostgravity,lostland,storycredits,submerged,threadtime,youleftme\`\`\`
🔭 **Slash**
\`\`\`js
/avatar,/ban,/eval,/poll,/timeout,/update\`\`\`
🎉 **Giveaway**
\`\`\`js
gcheck,gdelete,gedit,gpause,greroll,gstart,gunpause\`\`\`
⏳ **Counting**
\`\`\`js
setcount,disablecount,blacklistcount,unblacklistcount,sumcount,subcount\`\`\`
❗ **Guess the number**
\`\`\`js
disable-gtn,gtn,guess-number\`\`\`
🔞 **Nsfw**
\`\`\`js
$replaceText[$replaceText[$channelNsfw[$channelid];true;randomhentai,pussy,neko,lewd,lesbian,kuni,cum,classic,boobs,anal,yuri,tits,trap,solog,solo,pwankg,pussyart,kemo,kitsune,keta,holoero,hentai,futanari,femdom,feetgif,erofeet,feet,ero,erok,erokemo,eron,eroyuri,cumjpg,blowjob,spank,gasm];false;You need to be in a nsfw channel to view this]\`\`\`
🛎️ **Custom channels**
\`\`\`js
ccadd,ccdelete,ccnsfw,ccpurge,cc,ccunnsfw,ccremove,cctopic,disablecc,allowcc\`\`\`
🎂 **Birthday**
\`\`\`js
bday,bdays,present,bdaypresent,bdaychannel,present\`\`\`
🔎 **Button roles**
\`\`\`js
btn-role,nmbrole,abrole,nmabrole\`\`\`
📮 **Biography**
\`\`\`js
setage,setbio,setbirthday,setgender,setheight,sethobbies,setcountry,setname,setnickname,setprofilecolor,setprofileimage,setpronoun,setzodiacsign,bio\`\`\`
📲 **Calls**
\`\`\`js
call-edit,joincall,stopcall\`\`\`
🤖 **Addbot**
\`\`\`js
accept,addbot,decline,setaccept,setblog,setabot\`\`\`
⭐ **Starboard**
\`\`\`js
delete-starboard,disablestarboard,force-starboard,setsboard,setsreq,starboard\`\`\`
🏅 **Developer**
\`\`\`js
eval,djs,uc,botleave,setstaus,sname,sav,reboot,guilds,whitelist,unwhitelist,wlist,devunlist,devlist,devs\`\`\`}};;;;yes]
$onlyif[$interactionData[values[0]]==two;]`}]