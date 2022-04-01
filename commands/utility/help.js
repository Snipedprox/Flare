module.exports = [{
name: "help",
$if: "v4",
aliases: ['hep','hell','hepp','heb','helpp','heq','commands','cmds','module','modules'],
code: `
$author[1;Welcome to my commands;$useravatar[$clientid]]
$color[1;$getServerVar[color]]
$description[1;**Use the select menu to find the command list**]
$addSelectMenu[1;cmd;Help categories;1;1;no;First page:First row of commands:one:no:<:D_rightarrow:953778843389399131>;Second page:Second row of commands:two:no:<:D_rightarrow:953778843389399131>]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:**Welcome to my commands**} {description:🎤 **Music**
\`\`\`js
join,nowplaying,play,queue\`\`\`

🎧 **DJ**
\`\`\`js
bassboost,loop,pause,resume,skip,stop,volume,queue\`\`\`

📝 **Playlist**
\`\`\`js
playlist,pladd,plplay,plrename\`\`\`

🛡️ **Moderation**
\`\`\`js
role,takerole,ban,kick,lock,unban,unlock,lockdown,unlockdown,viewlock,lock,viewunlock,viewlockdown,viewunlockdown,addstaff,setmute,setstaff,mute,settings,config,setvent,setqotdc,setqotd,setowner,sethelp,setaotd,addqotd,addowner,addhelper,remove-goodbye,remove-welcome,set-embed-color,set-goodbye,set-welcome,gmessage,wmessage,slash,automod,tagdelete,autorole\`\`\`

🗃️ **Ticket**
\`\`\`js
add-user,close,remove-user,ticket,transcript\`\`\`

🎮 **Fun**
\`\`\`js
quotes,ppsize,meme,say,8ball,maccept,mdecline,divorce,marriage,marry,cookie,flower,run,pray,curse,cuddle,wave,poke,baka,bored,stare,shrug,blush,bite,facepalm,sleep,cry,dance,smile,smug,pat,feed,happy,think,pout,highfive,hug,tickle,slap,kiss,laugh,wink,thumbsup,nekos\`\`\`

💸 **Economy**
\`\`\`js
ecohelp,beg,casino,coinflip,daily,double,lb-cash,lootbox-add,lootbox-set,lootbox,pay,rob,slots,work,slut,crime,balance,buy,withdraw,deposit,lootbox-buy,shop,addshop,spawns,removeshop,addall,takeall,moneyrole,takemoneyrole,reseteco,ecoconfig,ecoset,lootbox-remove,collect-income,role-income,role-cooldown,income-list,role-income,beg-payout,beg-reply,chat-channel,chat-cooldown,chat-payout,crime-payout,crime-reply,setcooldown,slut-payout,slut-reply,work-payout,work-reply\`\`\`

🚀 **Level**
\`\`\`js
add-level,add-xp,lb,level,remove-level,remove-xp,reset-level,reset-level-all,set-level,set-xp,enablexp,disablexp,rewards,set-reward\`\`\`}};;;;yes]
$onlyif[$interactionData[values[0]]==one;]`
}, {
  name: "cmd", 
  type: "interaction",
  prototype: "selectMenu", 
  code: `$interactionReply[;{newEmbed: {color:$getServerVar[color]} {title:**Welcome to my commands**} {description:⚙️ **Utility**
\`\`\`js
uprefix,cprefix,whois,support,snipe,snipereset,editsnipe,sniperoles,afk,afkreason,afkreset,afkroles,avatar,djadd,banner,clear,help,ping,roleinfo,serverinfo,stats,prefix,reverse,poll,quote,invite,members,uptime,dmmail,mail,inbox,maildelete,suggest,suggest delete,suggestion approve,suggestion decline,suggestion note,setupsuggest,add-cmd,del-cmd,cmd-list,qotd,gtnstats,tagadd,tag,tags,avlink,length,nickname,userid,username,usertag\`\`\`

📖 **Stories**
\`\`\`js
afterthey,lostgravity,lostland,storycredits,submerged,threadtime,youleftme\`\`\`

🔭 **Slash**
\`\`\`js
/avatar,/ban,/eval,/poll,/timeout,/update\`\`\`

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

🎉 **Giveaway**
\`\`\`js
gstart,greroll,gend\`\`\`

🔎 **Button roles**
\`\`\`js
btn-role,nmbrole,abrole,nmabrole\`\`\`

📮 **Biography**
\`\`\`js
setage,setbio,setbirthday,setgender,setheight,sethobbies,setcountry,setname,setnickname,setprofilecolor,setprofileimage,setpronoun,setzodiacsign,bio\`\`\`

🔊 **Soundboard**
\`\`\`js
airhorn,amogus,ashit,bruh,dattebayo,disconnected,emotionaldamage,fakeping,gameover,giggle,hellomf,impostersus,ohyeah,reee,sheesh,superidol,suprisemf,owo,uwu,waitwhat,weee,wow\`\`\`

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