module.exports = [{
 name: "play",
 $if: "v4",
 code: `$if[$checkContains[$message[1];soundcloud.com/discover/sets/;youtube.com/playlist?list=]==true]
$deleteMessage[$get[id]]
$sendMessage[$replaceText[$get[message];Added;;1] Song from Playlist;no]
$else
$if[$queueLength<1]
$if[$getServerVar[logmusic]==1]
$deleteMessage[$get[id]]
$endif
$editMessage[$get[id];$replaceText[$get[message];Added;;1]]
$else
$editMessage[$get[id];$replaceText[$get[message];Added;;1]]
$endif
$endif
$if[$checkContains[$message[1];youtu.be;m.youtube;youtube.com]==true]
$let[message;$playTrack[youtube;$message]]
$elseIf[$checkContains[$message[1];soundcloud.com;app.goo.gl]==true]
$onlyIf[$get[message]!=Added 0;$getServerVar[error] Track not found]
$let[message;$playTrack[soundcloud;$message]]
$endelseif
$elseIf[$checkContains[$message[1];open.spotify.com/track]==true]
$if[$toLowercase[$getServerVar[defaultspotify]]==youtube]
$let[message;$playTrack[youtube;$advancedTextSplit[$get[url];data: ';2;"og:description" content=";2; ·;1] - $advancedTextSplit[$get[url];data: ';2;"og:title" content=";2;";1]]]
$let[url;$djsEval[require('axios').get('$message[1]');yes]]
$elseif[$toLowercase[$getServerVar[defaultspotify]]==soundcloud]
$let[message;$playTrack[soundcloud;$advancedTextSplit[$get[url];data: ';2;"og:description" content=";2; ·;1] - $advancedTextSplit[$get[url];data: ';2;"og:title" content=";2;";1]]]
$let[url;$djsEval[require('axios').get('$message[1]');yes]]
$endelseif
$endif
$endelseif
$else
$if[$isValidLink[$message[1]]==true]
$let[message;$playTrack[url;$message]]
$else
$if[$checkContains[$toLowercase[$message];(sc)]==true]
$let[message;$playTrack[soundcloud;$message]]
$else
$let[message;$playTrack[youtube;$message]]
$endif
$endif
$endif
$if[$checkContains[$message[1];soundcloud.com/discover/sets/;youtube.com/playlist?list=]==true]
$editMessage[$get[id];Adding to Queue...]
$editMessage[$get[id];Searching...]
$else
$editMessage[$get[id];Searching...]
$endif
$if[$voiceID[$clientID]==]
$joinVc[$voiceID;no;yes;yes]
$endif
$let[id;$sendMessage[Searching...;yes]]
$onlyIf[$message[1]!=;$getservervar[error] **$username** Specify a valid song]
$onlyIf[$checkCondition[$voiceID==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]==];true;$voiceID];false;$voiceID[$clientID]]]==true;$replaceText[$getServerVar[errorsameuser];{voice};<#$voiceID[$clientID]>]]
$onlyIf[$voiceID!=;$getServerVar[errorjoin]]
$onlyBotPerms[speak;$getServerVar[error] **I'm are missing the \`speak\` permission**]
$onlyBotPerms[connect;$getServerVar[error] **I'm are missing the \`connect\` permission**]`
},
 {
 name: "stop",
 $if: "v4",
 code: `$reply[$messageID;no]
$getServerVar[stop]
$if[$getGlobalUserVar[247]==0]
$leaveVC
$endif
$stop
$resetPlayer
$onlyIf[$queueLength!=0;$getServerVar[errorqueue]]
$onlyIf[$checkCondition[$voiceID==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]==];true;$voiceID];false;$voiceID[$clientID]]]==true;$replaceText[$getServerVar[errorsameuser];{voice};<#$voiceID[$clientID]>]]
$onlyIf[$voiceID!=;$getServerVar[errorjoin]]`
},
 {
 name: "skip",
 aliases: ["s"],
 $if: "v4",
 code: `$reply[$messageID;no]
$if[$isNumber[$message[1]]==false]

$author[1;Skipping;https://cdn.discordapp.com/emojis/945744481775419512.webp?size=128&quality=lossless]
$addField[1;Duration;\`$replaceText[$replaceText[$replaceText[$checkContains[$songInfo[url;1];youtube.com;soundcloud.com];false;$humanizeMS[$songInfo[duration;1];4]];true;$djsEval[new Date($replaceText[$replaceText[$checkContains[$songInfo[url;1];youtube.com;soundcloud.com];false;0];true;$findNumbers[$songInfo[duration;1]]]).toISOString().substr(11, 8);yes]];00:00:00;LIVE]\`;yes]
$addField[1;Now Playing;[$songInfo[title;1]]($songInfo[url;1]);yes]
$addTimestamp[1;$dateStamp]
$color[1;$getServerVar[color]]
$thumbnail[1;$replaceText[$songInfo[thumbnail;1];undefined;$userAvatar[$clientID]]]
$skip
$else
$skip
$skipTo[$sub[$message[1];2]]
$author[1;Skipping;https://cdn.discordapp.com/emojis/945744481775419512.webp?size=128&quality=lossless]
$addField[1;Duration;\`$replaceText[$replaceText[$replaceText[$checkContains[$songInfo[url;$sub[$message[1];1]];youtube.com;soundcloud.com];false;$humanizeMS[$songInfo[duration;$sub[$message[1];1]];4]];true;$djsEval[new Date($replaceText[$replaceText[$checkContains[$songInfo[url;$sub[$message[1];1]];youtube.com;soundcloud.com];false;0];true;$findNumbers[$songInfo[duration;$sub[$message[1];1]]]]).toISOString().substr(11, 8);yes]];00:00:00;LIVE]\`;yes]
$addField[1;Now Playing;[$songInfo[title;$sub[$message[1];1]]]($songInfo[url;$sub[$message[1];1]]);yes]
$addTimestamp[1;$dateStamp]
$color[1;$getServerVar[color]]
$thumbnail[1;$replaceText[$songInfo[thumbnail;$sub[$message[1];1]];undefined;$userAvatar[$clientID]]]
$onlyIf[$message[1]>0;$getservervar[error] You cant skip $message[1] song. Only $sub[$queueLength;1]]
$onlyIf[$message[1]<=$queueLength;$getServerVar[error] You cant skip $message[1] song. Only $sub[$queueLength;1]]
$onlyIf[$findSpecialChars[$message[1]]==;]
$endif
$onlyIf[$queueLength!=1;$replaceText[$getServerVar[errorloop];{amount};$queueLength]]
$onlyIf[$queueLength!=0;$getServerVar[errorqueue]]
$onlyIf[$checkCondition[$voiceID==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]==];true;$voiceID];false;$voiceID[$clientID]]]==true;$replaceText[$getServerVar[errorsameuser];{voice};<#$voiceID[$clientID]>]]
$onlyIf[$voiceID!=;$getServerVar[errorjoin]]`
},
 {
 name: "previous",
 aliases: ["pr"],
 $if: "v4",
 code: `$if[$queueLength<1]
$deleteMessage[$get[id]]
$editMessage[$get[id];$replaceText[$get[message];Added;;1]]
$else
$editMessage[$get[id];$replaceText[$get[message];Added;;1]]
$endif
$if[$checkContains[$getGlobalUserVar[cacheplay];youtube.com]==true]
$setGlobalUserVar[cacheplay;]
$let[message;$playTrack[youtube;$getGlobalUserVar[cacheplay]]]
$elseif[$checkContains[$getGlobalUserVar[cacheplay];soundcloud.com]==true]
$setGlobalUserVar[cacheplay;]
$onlyIf[$get[message]!=Added 0;$getservervar[error] Track not found]
$let[message;$playTrack[soundcloud;$getGlobalUserVar[cacheplay]]]
$endelseif
$else
$setGlobalUserVar[cacheplay;]
$let[message;$playTrack[url;$getGlobalUserVar[cacheplay]]]
$endif
$if[$voiceID[$clientID]==]
$joinVc[$voiceID;no;yes;yes]
$endif
$let[id;$sendMessage[Searching..;yes]]
$onlyIf[$getGlobalUserVar[cacheplay]!=;$getServerVar[error] Previous song not found]
$onlyIf[$checkCondition[$voiceID==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]==];true;$voiceID];false;$voiceID[$clientID]]]==true;$replaceText[$getServerVar[errorsameuser];{voice};<#$voiceID[$clientID]>]]
$onlyIf[$voiceID!=;$getServerVar[errorjoin]]`
},
 {
 name: "loop",
 aliases: ["l"],
 $if: "v4",
 code: `$reply[$messageID;no]
$if[$checkCondition[$message[1]==]-$loopStatus$suppressErrors==true-none]
$loopMode[song]
$author[1;Loop;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;Loop mode set to **song**]
$elseIf[$checkCondition[$message[1]==]-$loopStatus$suppressErrors==true-song]
$loopMode[queue]
$author[1;Loop;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;Loop mode set to **queue**]
$endelseif
$elseIf[$checkCondition[$message[1]==]-$loopStatus$suppressErrors==true-queue]
$author[1;Loop;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;Loop mode disabled
$loopMode[none]
$endelseif
$else
$if[$checkContains[$toLowercase[$message[1]];song;track;music;s]==true]
$loopMode[song]
$author[1;Loop;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;Loop mode set to **song**]
$endif
$if[$checkContains[$toLowercase[$message[1]];queue;q]==true]
$author[1;Loop;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;Loop mode set to **queue**]
$loopMode[queue]
$endif
$if[$checkContains[$toLowercase[$message[1]];clear;reset;remove;off]==true]
$author[1;Loop;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;Loop mode disabled]
$loopMode[none]
$else
$if[$message[1]==]
$loopMode[song]
$author[1;Loop;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;Loop mode set to **song**]
$endif
$endif
$endif
$onlyIf[$queueLength!=0;$getServerVar[errorqueue]]
$onlyIf[$checkCondition[$voiceID==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]==];true;$voiceID];false;$voiceID[$clientID]]]==true;$replaceText[$getServerVar[errorsameuser];{voice};<#$voiceID[$clientID]>]]
$onlyIf[$voiceID!=;$getServerVar[errorjoin]]`
},
 {
 name: "queue",
 aliases: ["q"],
 $if: "v4",
 code: `$if[$isNumber[$message[1]]==false]
$reply[$messageID;no]
$author[1;Queue;$getServerVar[customemoji1]]
$description[2;**($numberSeparator[$queueLength]) Queue | Page 1-$replaceText[$replaceText[$checkCondition[$truncate[$sum[$divide[$queueLength;5];0.4]]==0];true;1];false;$truncate[$sum[$divide[$queueLength;5];0.4]]]**
$queue[1;5;\`{position} |\` **[{title}]({url})**]]
$color[2;$getServerVar[color]]
$thumbnail[1;$replaceText[$songInfo[thumbnail];undefined;$userAvatar[$clientID;2048]]]
$thumbnail[2;$getServerVar[customemoji1]]
$addField[1;Duration;\`$replaceText[$replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com];false;$humanizeMS[$songInfo[duration];4]];true;$djsEval[new Date($replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com];false;0];true;$findNumbers[$songInfo[duration]]]).toISOString().substr(11, 8);yes]];00:00:00;LIVE]\`;yes]
$addField[1;Now Playing;[$songInfo[title]]($songInfo[url] "$advancedTextSplit[$songInfo[title]; ;1] | $replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com];true;YouTube];false;$replaceText[$replaceText[$checkContains[$songInfo[url];soundcloud.com];true;SoundCloud];false;Audio]]");yes]
$color[1;$getServerVar[color]]
$addTimestamp[2;$dateStamp]
$else
$reply[$messageID;no]
$author[1;Queue;$getServerVar[customemoji1]]
$description[2;**($numberSeparator[$queueLength]) Queue | Page $filterMessage[$message[1];-]-$replaceText[$replaceText[$checkCondition[$truncate[$sum[$divide[$queueLength;5];0.4]]==0];true;1];false;$truncate[$sum[$divide[$queueLength;5];0.4]]**
$queue[$filterMessage[$message[1];-];5;\`{position} |\` **[{title}]({url})**]]
$color[2;$getServerVar[color]]
$thumbnail[1;$replaceText[$songInfo[thumbnail];undefined;$userAvatar[$clientID;2048]]]
$thumbnail[2;$getServerVar[customemoji1]]
$addField[1;Duration;\`$replaceText[$replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com];false;$humanizeMS[$songInfo[duration];4]];true;$djsEval[new Date($replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com];false;0];true;$findNumbers[$songInfo[duration]]]).toISOString().substr(11, 8);yes]];00:00:00;LIVE]\`;yes]
$addField[1;Now Playing;[$songInfo[title]]($songInfo[url] "$songInfo[title]");yes]
$color[1;$getServerVar[color]]
$addTimestamp[2;$dateStamp]
$onlyIf[$filterMessage[$message[1];-]!=0;]
$onlyIf[$filterMessage[$message[1];-]<=$replaceText[$replaceText[$checkCondition[$truncate[$sum[$divide[$queueLength;5];0.4]]==0];true;1];false;$truncate[$sum[$divide[$queueLength;5];0.4]]];]
$onlyIf[$findSpecialChars[$message[1]]==;]
$endif
$onlyIf[$queueLength!=0;$getServerVar[errorqueue]]
$onlyIf[$voiceID!=;$getServerVar[errorjoin]]
`
},
 {
 name: "seek",
 aliases: ["seekto"],
 $if: "v4",
 code: `$reply[$messageID;no]
$if[$checkContains[$noMentionMessage[1];:]==true]
$if[$advancedTextSplit[$noMentionMessage[1];:;3]==]
$if[$getServerVar[filters]!=none]
$setServerVar[filters;$getServerVar[filters]]
$let[filter;$resetFilters]
$sendMessage[{newEmbed:{description:Due ffmpeg not stable, filter will remove before seek music.} {color:$getServerVar[color]} {timestamp} {delete:3s}};no]
$endif
$seekTo[$multi[$filterMessage[$get[number];-];$getServerVar[multiseek]]]
$author[1;Seeked;$getServerVar[suca]]
$description[1;Seek to \`$djsEval[new Date($multi[$filterMessage[$get[number];-];1000]).toISOString().substr(11, 8);yes]\`]
$color[1;$getServerVar[color]]
$onlyIf[$checkCondition[$multi[$get[number];1000]>=$songInfo[duration]]!=true;$getservervar[error] You cant seek more \`$djsEval[new Date($replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com];false;0];true;$findNumbers[$songInfo[duration]]]).toISOString().substr(11, 8);yes]\`]
$let[number;$sum[$multi[$advancedTextSplit[$noMentionMessage[1];:;1];60];$advancedTextSplit[$noMentionMessage[1];:;2]]]
$onlyIf[$filterMessage[$advancedTextSplit[$noMentionMessage[1];:;2];-]<=59;$getservervar[error] Max. 59 at \`:$advancedTextSplit[$noMentionMessage[1];:;2]\`]
$onlyIf[$filterMessage[$advancedTextSplit[$noMentionMessage[1];:;1];-]<=59;$getservervar[error] Max. 59 at \`$advancedTextSplit[$noMentionMessage[1];:;1]:\`]
$onlyIf[$isNumber[$advancedTextSplit[$noMentionMessage[1];:;2]]!=false;$getservervar[error] **$username** You provided an **Invalid** number]
$onlyIf[$isNumber[$advancedTextSplit[$noMentionMessage[1];:;1]]!=false;$getservervar[error] **$username** You provided an **Invalid** number]
$else
$if[$getServerVar[filters]!=none]
$setServerVar[filters;$getServerVar[filters]]
$let[filter;$resetFilters]
$sendMessage[{newEmbed:{description:Due ffmpeg not stable, filter will remove before seek music.} {color:$getServerVar[color]} {timestamp} {delete:3s}};no]
$endif
$seekTo[$multi[$filterMessage[$get[number];-];$getServerVar[multiseek]]]
$description[1;Seek to \`$djsEval[new Date($multi[$filterMessage[$get[number];-];1000]).toISOString().substr(11, 8);yes]\`]
$author[1;Seeked;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$onlyIf[$checkCondition[$multi[$get[number];1000]>=$songInfo[duration]]!=true;You cant seek more \`$djsEval[new Date($replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com];false;0];true;$findNumbers[$songInfo[duration]]]).toISOString().substr(11, 8);yes]\`]
$let[number;$sum[$multi[$advancedTextSplit[$noMentionMessage[1];:;1];3600];$multi[$advancedTextSplit[$noMentionMessage[1];:;2];60];$advancedTextSplit[$noMentionMessage[1];:;2]]]
$onlyIf[$filterMessage[$advancedTextSplit[$noMentionMessage[1];:;3];-]<=59;$getservervar[error] Max. 59 at \`:$advancedTextSplit[$noMentionMessage[1];:;3]\`]
$onlyIf[$filterMessage[$advancedTextSplit[$noMentionMessage[1];:;2];-]<=59;$getservervar[error] Max. 59 at \`:$advancedTextSplit[$noMentionMessage[1];:;2]:\`]
$onlyIf[$filterMessage[$advancedTextSplit[$noMentionMessage[1];:;1];-]<=23;$getservervar[error] Max. 23 at \`$advancedTextSplit[$noMentionMessage[1];:;1]:\`]
$onlyIf[$isNumber[$advancedTextSplit[$noMentionMessage[1];:;3]]!=false;$getservervar[error] **$username** You provided an **Invalid** number]
$onlyIf[$isNumber[$advancedTextSplit[$noMentionMessage[1];:;2]]!=false;$getservervar[error] **$username** You provided an **Invalid** number]
$onlyIf[$isNumber[$advancedTextSplit[$noMentionMessage[1];:;1]]!=false;$getservervar[error] **$username** You provided an **Invalid** number]
$endif
$else
$seekTo[$multi[$filterMessage[$noMentionMessage[1];-];$getServerVar[multiseek]]]
$if[$getServerVar[filters]!=none]
$setServerVar[filters;$getServerVar[filters]]
$let[filter;$resetFilters]
$sendMessage[{newEmbed:{description:Due ffmpeg not stable, filter will remove before seek music.} {color:$getServerVar[color]} {timestamp} {delete:3s}};no]
$endif
$author[1;Seeked;$getServerVar[suca]]
$description[1;Seek to \`$djsEval[new Date($multi[$filterMessage[$noMentionMessage[1];-];1000]).toISOString().substr(11, 8);yes]\`]
$color[1;$getServerVar[color]]
$onlyIf[$checkCondition[$multi[$noMentionMessage[1];1000]>=$songInfo[duration]]!=true;You cant seek more \`$djsEval[new Date($replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com];false;0];true;$findNumbers[$songInfo[duration]]]).toISOString().substr(11, 8);yes]\`]
$onlyIf[$isNumber[$noMentionMessage[1]]!=false;$getservervar[error] **$username** You provided an **Invalid** number]
$endif
$onlyIf[$noMentionMessage[1]!=;$getservervar[error] **$username** You provided an **Invalid** number]
$onlyIf[$songInfo[duration]!=0;$getservervar[error] This song was \`LIVE\`]
$onlyIf[$checkCondition[$voiceID==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]==];true;$voiceID];false;$voiceID[$clientID]]]==true;$replaceText[$getServerVar[errorsameuser];{voice};<#$voiceID[$clientID]>]]
$onlyIf[$queueLength!=0;$getServerVar[errorqueue]]
$onlyIf[$voiceID!=;$getServerVar[errorjoin]]`
},
 {
 name: "nowplaying",
 aliases: ["np", "now"],
 code: `$reply[$messageID;no]
$author[1;Now Playing;$replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com];true;$getServerVar[ytemoji]];false;$replaceText[$replaceText[$checkContains[$songInfo[url];soundcloud.com];true;$getServerVar[scemoji]];false;$getServerVar[suca]]]
$title[1;$songInfo[title];$songInfo[url]]
$thumbnail[1;$replaceText[$songInfo[thumbnail];undefined;$userAvatar[$clientID;2048]]]	
$addField[1;URL;[$replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com];true;YouTube];false;$replaceText[$replaceText[$checkContains[$songInfo[url];soundcloud.com];true;SoundCloud];false;Audio]]]($songInfo[url] "$songInfo[url]") [- Thumbnail]($replaceText[$songInfo[thumbnail];undefined;$userAvatar[$clientID;2048]] "$replaceText[$songInfo[thumbnail];undefined;$userAvatar[$clientID;2048]]");yes]
$addField[1;24/7;$replaceText[$replaceText[$getGlobalUserVar[247];0;\`❌\`];1;\`✅\`];yes]
$addField[1;Loop;\`$replaceText[$replaceText[$checkCondition[$loopStatus==none];true;off];false;on - $loopStatus]\`;yes]
$addField[1;Volume;\`$volume%\`;yes]
$addField[1;Song;\`$numberSeparator[$queueLength]\`;yes]
$addField[1;Duration Left;\`$replaceText[$replaceText[$checkCondition[$songInfo[duration]==0];true;LIVE];false;$replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com];false;$humanizeMS[$sub[$songInfo[duration];$getCurrentDuration];4]];true;$djsEval[new Date($replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com];false;0];true;$sub[$songInfo[duration];$getCurrentDuration]]).toISOString().substr(11, 8);yes]]]\`;yes]
$addField[1;Duration Now;\`$replaceText[$replaceText[$checkCondition[$songInfo[duration]==0];true;LIVE];false;$replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com];false;$humanizeMS[$getCurrentDuration;4]];true;$djsEval[new Date($replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com];false;0];true;$getCurrentDuration]).toISOString().substr(11, 8);yes]]]\`;yes]
$addField[1;Duration;\`$replaceText[$replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com];false;$humanizeMS[$songInfo[duration];4]];true;$djsEval[new Date($replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com];false;0];true;$findNumbers[$songInfo[duration]]]).toISOString().substr(11, 8);yes]];00:00:00;LIVE]\`;yes]
$addField[1;Requested By;<@$songInfo[user.id]>;no]
$color[1;$getServerVar[color]]
$onlyIf[$queueLength!=0;$getServerVar[errorqueue]]
$onlyIf[$voiceID!=;$getServerVar[errorjoin]]
`
},
 {
 name: "check",
 code: `$reply[$messageID;no]
$author[1;Checking perms;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;\`\`\`js
Pause          : $replaceText[$replaceText[$checkCondition[$getServerVar[pause]!=];true;✅];false;❌]
Resume         : $replaceText[$replaceText[$checkCondition[$getServerVar[resume]!=];true;✅];false;❌]
Skip           : $replaceText[$replaceText[$checkCondition[$getServerVar[skip]!=];true;✅];false;❌]
Stop           : $replaceText[$replaceText[$checkCondition[$getServerVar[stop]!=];true;✅];false;❌]
Shuffle        : $replaceText[$replaceText[$checkCondition[$getServerVar[shuffle]!=];true;✅];false;❌]
Join           : $replaceText[$replaceText[$checkCondition[$getServerVar[join]!=];true;✅];false;❌]
Disconnect     : $replaceText[$replaceText[$checkCondition[$getServerVar[dc]!=];true;✅];false;❌]
Play           : $replaceText[$replaceText[$checkCondition[$getServerVar[errorjoin]!=];true;✅];false;❌]
UserID         : $replaceText[$replaceText[$checkCondition[$getServerVar[userid]!=default];true;✅];false;❌]
Log Music      : $replaceText[$replaceText[$checkContains[$getServerVar[logmusic];1];true;✅];false;❌]
24/7           : $replaceText[$replaceText[$getServerVar[247];1;✅];0;❌]

Max Volume     : $getServerVar[maxvol]%
User Volume    : $getGlobalUserVar[vol]%

1) Emoji       : $replaceText[$replaceText[$checkCondition[$getServerVar[customemoji1]!=];true;✅];false;❌]
2) Emoji       : $replaceText[$replaceText[$checkCondition[$getServerVar[ytemoji]!=];true;✅];false;❌]
3) Emoji       : $replaceText[$replaceText[$checkCondition[$getServerVar[scemoji]!=];true;✅];false;❌]
4) Emoji       : $replaceText[$replaceText[$checkCondition[$getServerVar[loademoji]!=];true;✅];false;❌]
5) Emoji       : $replaceText[$replaceText[$checkCondition[$getServerVar[customemoji2]!=];true;✅];false;❌]

Connect        : $replaceText[$replaceText[$checkCondition[$hasPerms[$guildID;$clientID;connect]==true];true;✅];false;❌]
Speak          : $replaceText[$replaceText[$checkCondition[$hasPerms[$guildID;$clientID;speak]==true];true;✅];false;❌]
Deafen         : $replaceText[$replaceText[$checkCondition[$hasPerms[$guildID;$clientID;deafenmembers]==true];true;✅];false;❌]
Reactions      : $replaceText[$replaceText[$checkCondition[$hasPerms[$guildID;$clientID;addreactions]==true];true;✅];false;❌]
Messages       : $replaceText[$replaceText[$checkCondition[$hasPerms[$guildID;$clientID;managemessages]==true];true;✅];false;❌]
Embed Links    : $replaceText[$replaceText[$checkCondition[$hasPerms[$guildID;$clientID;embedlinks]==true];true;✅];false;❌]
Attach Files   : $replaceText[$replaceText[$checkCondition[$hasPerms[$guildID;$clientID;attachfiles]==true];true;✅];false;❌]
Move Members   : $replaceText[$replaceText[$checkCondition[$hasPerms[$guildID;$clientID;movemembers]==true];true;✅];false;❌]
Public Thread  : $replaceText[$replaceText[$checkCondition[$hasPerms[$guildID;$clientID;usepublicthreads]==true];true;✅];false;❌]
Private Thread : $replaceText[$replaceText[$checkCondition[$hasPerms[$guildID;$clientID;useprivatethreads]==true];true;✅];false;❌]
Slash          : $replaceText[$replaceText[$checkCondition[$hasPerms[$guildID;$clientID;useappcmds]==true];true;✅];false;❌]

YouTube        : $replaceText[$replaceText[$get[yt];true;✅];false;❌] ($sub[$dateStamp;$get[time1]]ms)
SoundCloud     : $replaceText[$replaceText[$get[sc];true;✅];false;❌] ($sub[$dateStamp;$get[time2]]ms)
Spotify        : $replaceText[$replaceText[$get[st];true;✅];false;❌] ($sub[$dateStamp;$get[time3]]ms) 
\`\`\`] 
$let[yt;$isValidLink[https://youtube.com/]]
$let[time3;$dateStamp]
$let[sc;$isValidLink[https://soundcloud.com/]]
$let[time2;$dateStamp]
$let[st;$isValidLink[https://spotify.com/]]
$let[time1;$dateStamp]
$footer[1;Color: $getServerVar[color]
Latency: $numberSeparator[$messagePing]ms]`
},
 {
 name: "volume",
 aliases: ["vol", "v"],
 $if: "v4",
 code: `$reply[$messageID;no]
$author[1;Volume set;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$addField[1;Requested/Changed By;$replaceText[$replaceText[$checkCondition[$songInfo[user.id]==$authorID];true;<@$songInfo[user.id]>];false;<@$authorID> (Requested)\n<@$songInfo[user.id]> (Changed)];yes]
$addField[1;Max Volume;\`$getServerVar[maxvol]%\`;yes]
$addField[1;Volume;\`$volume%\`;yes]
$volume[$noMentionMessage[1]]
$setGlobalUserVar[vol;$noMentionMessage[1];$songInfo[user.id]]
$onlyIf[$noMentionMessage[1]<=$getServerVar[maxvol];$getServerVar[error] **$username** You can minimum set the volume to **$getServerVar[maxvol]%**]
$onlyIf[$noMentionMessage[1]>=10;$getServerVar[error] **$username** You can minimum set the volume to **10%**]
$onlyIf[$isNumber[$noMentionMessage[1]]!=false;$getServerVar[error] **$username** You provided an **invalid** number]
$onlyIf[$noMentionMessage[1]!=;$getServerVar[error] **$username** You provided an **invalid** number]
$onlyIf[$checkCondition[$voiceID==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]==];true;$voiceID];false;$voiceID[$clientID]]]==true;$replaceText[$getServerVar[errorsameuser];{voice};<#$voiceID[$clientID]>]]
$onlyIf[$voiceID!=;$getServerVar[errorjoin]]`
},
 {
 name: "volume-max",
 aliases: ["vol-max", "v-max"],
 $if: "v4",
 code: `$reply[$messageID;no]
$author[1;Volumed max;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$addField[1;Requested/Changed By;$replaceText[$replaceText[$checkCondition[$songInfo[user.id]==$authorID];true;<@$songInfo[user.id]>];false;<@$authorID> (Requested)\n<@$songInfo[user.id]> (Changed)];yes]
$addField[1;Max Volume;\`$getServerVar[maxvol]%\`;yes]
$addField[1;Volume;\`$volume%\`;yes]
$addTimestamp[1;$dateStamp]
$setServerVar[maxvol;$truncate[$noMentionMessage[1]]]
$onlyIf[$noMentionMessage[1]<=1000;$getServerVar[error] **$username** You can maximum set the volume to **1000%**]
$onlyIf[$noMentionMessage[1]>=10;$getServerVar[error] **$username** You can minimum set the volume to **10%**]
$onlyIf[$isNumber[$noMentionMessage[1]]!=false;$getServerVar[error] **$username** You provided an **invalid** number]
$onlyIf[$noMentionMessage[1]!=;$getServerVar[error] **$username** You provided an **invalid** number]
$onlyIf[$checkCondition[$voiceID==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]==];true;$voiceID];false;$voiceID[$clientID]]]==true;$replaceText[$getServerVar[errorsameuser];{voice};<#$voiceID[$clientID]>]]
$onlyIf[$voiceID!=;$getServerVar[errorjoin]]`
},
 {
 name: "join",
 aliases: ["j"],
 $if: "v4",
 code: `$reply[$messageID;no]
$if[$voiceID[$clientID]==]
$joinVC
$replaceText[$getServerVar[join];{join};<#$voiceID>]
$elseif[$voiceID[$clientID]!=]
$joinVC
$replaceText[$getServerVar[join];{join};<#$voiceID>]
$leaveVC
$endelseif
$endif
$onlyIf[$checkCondition[$voiceID==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]==];true;$voiceID];false;$voiceID[$clientID]]]==true;$replaceText[$getServerVar[errorsameuser];{voice};<#$voiceID[$clientID]>]]
$onlyIf[$voiceID!=;$getServerVar[errorjoin]]
$onlyBotPerms[speak;$getServerVar[error] **I'm are missing the \`speak\` permission**]
$onlyBotPerms[connect;$getServerVar[error] **I'm are missing the \`connect\` permission**]`
},
 {
 name: "disconnect",
 $if: "v4",
 aliases: ["dc"],
 code: `$reply[$messageID;no]
$if[$voiceID[$clientID]!=]
$author[1;Disonnect;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[dc]]
$leaveVC
$else
$author[1;Error;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;Already disconnected]
$endif
$onlyIf[$checkCondition[$voiceID==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]==];true;$voiceID];false;$voiceID[$clientID]]]==true;$replaceText[$getServerVar[errorsameuser];{voice};<#$voiceID[$clientID]>]]
$onlyIf[$voiceID!=;$getServerVar[errorjoin]]`
},
 {
 name: "pause",
 code: `$reply[$messageID;no]
$author[1;Paused;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[pause]]
$pauseTrack
$onlyIf[$queueLength!=0;$getServerVar[errorqueue]]
$onlyIf[$checkCondition[$voiceID==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]==];true;$voiceID];false;$voiceID[$clientID]]]==true;$replaceText[$getServerVar[errorsameuser];{voice};<#$voiceID[$clientID]>]]
$onlyIf[$voiceID!=;$getServerVar[errorjoin]]`
},
 {
 name: "resume",
 code: `$reply[$messageID;no]
$author[1;Resumed;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;$getServerVar[resume]]
$resumeTrack
$onlyIf[$queueLength!=0;$getServerVar[errorqueue]]
$onlyIf[$checkCondition[$voiceID==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]==];true;$voiceID];false;$voiceID[$clientID]]]==true;$replaceText[$getServerVar[errorsameuser];{voice};<#$voiceID[$clientID]>]]
$onlyIf[$voiceID!=;$getServerVar[errorjoin]]`
},
 {
 name: "24/7",
 aliases: ["247", "24-7"],
 $if: "v4",
 code: `$if[$getGlobalUserVar[247]==0]
$if[$queueLength!=0]
$playerConfig[no;0s;yes]
$onlyIf[$checkCondition[$voiceID==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]==];true;$voiceID];false;$voiceID[$clientID]]]==true;]
$endif
$author[1;24/7 enabled;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;Enabled 24/7]
$setGlobalUserVar[247;1]
$else
$if[$queueLength!=0]
$playerConfig[yes;0s;yes]
$onlyIf[$checkCondition[$voiceID==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]==];true;$voiceID];false;$voiceID[$clientID]]]==true;]
$endif
$author[1;24/7 disabled;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;Disabled 24/7]
$setGlobalUserVar[247;0]
$endif
`
},
 {
 name: "shuffle",
 aliases: ["sf"],
 code: `
$addField[1;Requested By;<@$authorID>;yes]
$author[1;Shuffle queue;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**Queue - $numberSeparator[$queueLength] Song**
$queue[1;5;\`{position} |\` **[{title}]({url})**]]

$thumbnail[1;$replaceText[$songInfo[thumbnail];undefined;$userAvatar[$clientID;2048]]]
$shuffleQueue
$onlyIf[$queueLength!=1; $replaceText[$getServerVar[errorloop];{amount};$queueLength]]
$onlyIf[$queueLength!=0; $getServerVar[errorqueue]]
$onlyIf[$checkCondition[$voiceID==$replaceText[$replaceText[$checkCondition[$voiceID[$clientID]==];true;$voiceID];false;$voiceID[$clientID]]]==true;$replaceText[$getServerVar[errorsameuser];{voice};<#$voiceID[$clientID]>]]
$onlyIf[$voiceID!=; $getServerVar[errorjoin]]`
},
 {
 name: "log",
 aliases: ["logmusic", "log-music"],
 $if: "v4",
 code: `$reply[$messageID;no]
$if[$getServerVar[logmusic]==0]
$setServerVar[logmusic;1]
$author[1;Log music;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;Log music enabled]
$else
$setServerVar[logmusic;0]
$author[1;;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;Log music disabled]
$endif
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true; **You are missing the \`manage server\` permission**]
`
}]
