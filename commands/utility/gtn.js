module.exports = ({
    name: "guessthenumber",
    aliases: ['gtn'],
    code: `$setservervar[winning_number;$random[$message[1];$message[2]]]
$setservervar[guess_the_number_channel;$channelid]
$setservervar[gtn;true]
$setservervar[n1;$message[1]]
$setservervar[n2;$message[2]]
$setservervar[gtnstatus;$getServerVar[rdot] There is an ongoing game of GTN in <#$channelID>]
$author[1;;https://images-ext-1.discordapp.net/external/rJPv1FoZ6gwjfeM-caDcWryQFqx9-MkYvSSOJzPE3hQ/https/i.imgur.com/7EllBlG.png]
$color[1;$getServerVar[color]]
$description[1;I got the number in mind im dming it to you!]
$channelSendMessage[$channelID;<:help_ask:961725787994742864> Guess the number ranging from **$numberseparator[$message[1];,]** to **$numberseparator[$message[2];]**
$sendDM[<:help_ask:961725787994742864> **<@$authorid>** The number is **$numberSeparator[$random[$message[1];$message[2]];,]**;$authorid]
$onlyif[$isuserdmenabled==true;<:help_ask:961725787994742864> You need to enable your DMS]
$onlyif[$message[1]<$message[2];$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < minimum number > < maximum number >**]
$onlyif[$message[2]>=5;<:help_ask:961725787994742864> Number must be greater than 5]
$onlyif[$checkcontains[$message;q;w;e;r;t;y;u;i;o;p;a;s;d;f;g;h;j;k;lz;x;c;v;b;n;m]==false;$getServerVar[error] You provided an **invalid** number]
$argscheck[>1;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < minimum number > < maximum number >**]
$onlyIf[$hasPerms[$guildid;$authorid;managemessages]==true;$getServerVar[error] **You are missing \`manage messages\` permission**]
$suppressErrors`
});