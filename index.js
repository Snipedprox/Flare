const { Giveaways } = require("aoi.js-plugins")
const aoijs = require('aoi.js'); //We're authorized "aoijs" as our bot in here, you can type anything you want. 
const config = require('./config.js'); //This will be our configuration file. I didn't want your main file be messy. 
const bot = new aoijs.Bot(config.Bot);
const fs = require('fs');

const voice = new aoijs.Voice(bot, {
  soundcloud: {
    clientId: "iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX",
  },//I recommend you to use your own sc token
  cache: {
    cacheType: "Memory",//Disk
    enabled: true,
  }, 
});
let gm = new Giveaways({
  client:bot,
  storage:"storage.json",
  botsCanWin:false,
  embedColor: '#9C657C',
  reaction: '🎉',
  embedColorEnd: '#9C657C',
  reaction: '🎉',
  dmWinMessage:" 🎉Congratulations, **{member.username}**!! You won {prize} {link}",
  dmJoinMessage:" **🎉 {member.username}** <@{member.id}>!! You joined the giveaway {prize} {link}",
  dmLeaveMessage:"🎉**{member.username}** You left the giveaway {prize} {link}",
  startMessages:{
    giveaway:"🎉 **NEW GIVEAWAY** 🎉",
    giveawayEnded:"🎉 **GIVEAWAY ENDED** 🎉",
    inviteToParticipate:" React with 🎉 to participate!",
    winMessage:"🎉 Congratulations, **{winners}** You won **{this.prize}**\n{this.messageURL}",
    drawing:" Ends: {timestamp}",
    embedFooter:"{this.winnerCount} winner(s)",
    noWinner:"🎉 Giveaway cancelled, no valid participations. ",
    winners:"Winner(s):",
    endedAt:" Ended at",
    hostedBy:" Hosted by: {this.hostedBy}"
  },
  lastChance:{
    enabled:true,
    content:"🎉🎉**LAST CHANCE TO ENTER ** 🎉🎉 ",
    threshold:"30s",
    embedColor:"#9C657C"
  }
})


gm.loadFuncs()

require('./handler/status')(bot) //This is for bot status file. 
require('./handler/variables')(bot) //This is for bot variables file. 
require('./handler/callbacks')(bot) //This is for bot callbacks file. 


 bot.onMessage()
bot.functionManager.createCustomFunction({
name: "$transcript",
type: "djs",
code: async d => {
 const data = d.util.openFunc(d)
 
const discordTranscripts = require('discord-html-transcripts');

const channel = d.message.channel; // or however you get your TextChannel

// Must be awaited
const attachment = await discordTranscripts.createTranscript(d.message.channel);

channel.send({
 files: [attachment]
});  
return {
code: d.util.setCode(data)
}
}
}) 


bot.interactionCommand({
name: "btn1",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn1]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn1;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn2",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn2]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn2;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn3",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn3]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn3;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn4",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn4]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn4;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn5",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn5]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn5;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn6",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn6]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn6;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn7",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn7]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn7;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn8",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn8]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn8;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn9",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn9]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn9;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn10",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn10]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn10;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn11",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn11]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn11;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn12",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn12]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn12;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn13",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn13]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn13;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn14",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn14]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn14;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn15",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn15]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn15;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn16",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn16]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn16;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn17",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn17]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn17;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn18",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn18]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn18;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn19",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn19]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn19;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn20",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn20]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn20;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn21",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn21]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn21;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn22",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn22]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn22;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn23",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn23]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn23;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn24",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn24]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn24;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn25",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn25]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn25;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn26",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn26]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn26;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn27",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn27]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn27;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn28",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn28]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn28;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn29",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn29]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn29;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "btn30",
prototype: "button",
code: `
$giveroles[$guildid;$authorid;$getChannelVar[btn30]]
$interactionReply[Successfully gave you the role <@&$getChannelVar[btn30;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn1",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn1]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn1;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn2",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn2]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn2;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn3",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn3]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn3;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn4",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn4]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn4;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn5",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn5]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn5;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn6",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn6]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn6;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn7",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn7]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn7;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn8",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn8]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn8;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn9",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn9]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn9;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn10",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn10]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn10;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn11",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn11]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn11;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn12",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn12]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn12;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn13",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn13]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn13;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn14",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn14]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn14;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn15",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn15]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn15;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn16",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn16]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn16;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn17",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn17]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn17;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn18",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn18]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn18;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn19",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn19]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn19;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn20",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn20]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn20;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn21",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn21]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn21;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn22",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn22]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn22;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn23",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn23]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn23;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn24",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn24]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn24;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn25",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn25]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn25;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn26",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn26]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn26;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn27",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn27]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn27;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn28",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn28]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn28;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn29",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn29]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn29;$channelid]>;;;;;yes]`})

bot.interactionCommand({
name: "rbtn30",
prototype: "button",
code: `
$takeroles[$guildid;$authorid;$getChannelVar[rbtn30]]
$interactionReply[Successfully took your the role <@&$getChannelVar[rbtn30;$channelid]>;;;;;yes]`})


 bot.onInteractionCreate()

bot.readyCommand({
 channel: "952669582890500106",
 $if: "v4",
 code: `
$log[____________________________________________
YouTube    : $replaceText[$replaceText[$isValidLink[https://youtube.com/];true;✅];false;❌]
SoundCloud : $replaceText[$replaceText[$isValidLink[https://soundcloud.com/];true;✅];false;❌]
Spotify    : $replaceText[$replaceText[$isValidLink[https://spotify.com/];true;✅];false;❌]
____________________________________________
IPV4       : $advancedTextSplit[$httpRequest[https://ip-fast.com/api/ip/];";2]
Load       : $numberSeparator[$divide[$sub[$dateStamp;$get[time]];10]]s
____________________________________________]

$log[$userTag[$clientID] active at $formatDate[$dateStamp;LLLL]]

$sendMessage[<@$clientID> active at <t:$cropText[$dateStamp;10]:F>;no]

$djsEval[global.aoi = (e, code, rc = true, re = true, sm = true) => e.interpreter(e.client, e.message, e.args, { name: 'Eval', code: code }, e.client.db, rc, undefined, {}, undefined, undefined, re, false, sm)]
$let[time;$dateStamp]
$suppressErrors`
})


bot.joinCommand({ 
channel: "$getServerVar[wchannel]", 
code: `
$If[$getServerVar[wchannel]!=undefined;
**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[wmessage];<name>;$username];<mention>;<@$authorid>];<tag>;$usertag[$authorid]];<servername>;$servername];<count>;$memberscount];undefined;<:zerotwome:955637245690400768> Welcome to $servername <@$authorID>, we now have $membersCount members!]**]

$if[$getServerVar[ars]!=disabled;
$giveRole[$guildid;$authorid;$getServerVar[aru]]
$onlyIf[$isBot[$authorid]!=true;]]


$if[$getServerVar[arsb]!=disabled;
$giveRole[$guildid;$authorid;$getServerVar[arub]]
$onlyIf[$isBot[$authorid]==true;]]

`}) 

bot.leaveCommand({ 
channel: "$getServerVar[gchannel]", 
code: `
**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[gmessage];<name>;$username];<mention>;<@$authorid>];<tag>;$usertag[$authorid]];<servername>;$servername];<count>;$memberscount];undefined;<:9110zeropeace:955637260563394570> goodbye $username, we now have $membersCount members!]**
$onlyIf[$getServerVar[gchannel]!=undefined;]
`}) 
 bot.onLeave()
 bot.onJoin()


bot.guildJoinCommand({
channel: "$systemChannelID",
code: `

$if[$memberscount[$guildID;;no]>=30;
**Server needs \`30\` or more members**
$setGlobalUserVar[wl;$getGlobalUserVar[wl;$clientid]/$guildid;$guildid]



$onlyIf[$checkContains[$guildID;$joinSplitText[;];955629081054036059;956657229879189564;765789714384814120;900900133150007376;952139172653723709;946961245989380206;953775397315686420;943246795700580452;946761370119069717;739811956638220298;797833180936667153;935576651767619626;941026456396509244;818214679456514118;819888735092604938;886782273498808370;920988644318281749]==false;]
$textSplit[$getGlobalUserVar[wl;$clientid];/]]







`}) 
bot.onGuildJoin();


voice.onTrackStart()

voice.trackStartCommand({
 channel: "$channelID",
 $if: "v4",
 code: `$if[$getServerVar[maxvol]<=$volume]
$volume[$getServerVar[maxvol]]
$endif
$if[$hasPerms[$guildID;$clientID;deafenmembers]-$getVar[deafenclient]==true-1]
$deafenUser[$clientID;yes]
$endif
$if[$getCurrentDuration==0]
$author[1;Started Playing;$replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com];true;$getVar[ytemoji]];false;$replaceText[$replaceText[$checkContains[$songInfo[url];soundcloud.com];true;$getVar[scemoji]];false;$getVar[customemoji1]]]] 
$title[1;$songInfo[title];$songInfo[url]]
$addField[1;Filters;\`$getServerVar[filters]\`;no]
$addField[1;Loop;\`$replaceText[$replaceText[$checkCondition[$loopStatus==none];true;off];false;on - $loopStatus]\`;yes]
$addField[1;24/7;$replaceText[$replaceText[$getGlobalUserVar[247;$songInfo[user.id]];0;\`❌\`];1;\`✅\`];yes]
$addField[1;Song;\`$numberSeparator[$queueLength]\`;yes]
$addfield[1;Create;$replaceText[$replaceText[$checkContains[$songInfo[url];soundcloud.com];true;<t:$cropText[$songInfo[createdTimestamp];10]:d>];false;\`none\`];yes] 
$addField[1;Like;\`$numberSeparator[$replaceText[$songInfo[likes];null;0]]\`;yes]
$addField[1;$replaceText[$replaceText[$checkContains[$songInfo[url];soundcloud.com];true;Listened];false;Views];\`$numberSeparator[$songInfo[views]]\`;yes] 
$addField[1;Platform;\`$replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com];true;YouTube];false;$replaceText[$replaceText[$checkContains[$songInfo[url];soundcloud.com];true;SoundCloud];false;Audio]]\`;yes]
$addField[1;Artist;\`$songInfo[author]\`;yes] $addField[1;Duration;\`$replaceText[$replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com];false;$humanizeMS[$songInfo[duration];4]];true;$djsEval[new Date($replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com];false;0];true;$findNumbers[$songInfo[duration]]]).toISOString().substr(11, 8);yes]];00:00:00;LIVE]\`;yes]
$addField[1;Requested By;<@$songInfo[user.id]>;no]
$addTimestamp[1;$dateStamp] 
$thumbnail[1;$replaceText[$songInfo[thumbnail];undefined;$userAvatar[$clientID;1024]]]
$color[1;$getVar[color]]
$onlyIf[$checkCondition[$getServerVar[logmusic]==1]==true;]
$playerConfig[$replaceText[$replaceText[$getGlobalUserVar[247;$songInfo[user.id]];0;yes];1;no];0s;yes]
$volume[$getGlobalUserVar[vol;$songInfo[user.id]]]
$setGlobalUserVar[cacheplay;$songInfo[url];$songInfo[user.id]]
$setGlobalUserVar[listenuser;$sum[$getGlobalUserVar[listenuser;$songInfo[user.id]];1];$songInfo[user.id]]
$setServerVar[listenserver;$sum[$getServerVar[listenserver];1]]
$setVar[listenglobal;$sum[$getVar[listenglobal];1]]
$else
$volume[$getGlobalUserVar[vol;$songInfo[user.id]]]
$endif`
})

voice.onTrackEnd()

voice.trackEndCommand({
 channel: "$channelID",
 $if: "v4",
 code: `$if[$queueLength==0]
$setServerVar[filters;$getVar[filters]]
$endif`
})


const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")
loader.setColors( loader.themes.default )