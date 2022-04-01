module.exports = ({
    name: "guessthenumber",
    aliases: ['gtn'],
    code: `$setservervar[winning_number;$random[$message[1];$message[2]]]
$setservervar[guess_the_number_channel;$channelid]
$setservervar[gtn;true]
$setservervar[n1;$message[1]]
$setservervar[n2;$message[2]]
$setservervar[gtnstatus;<:D_rightarrow:953778843389399131> There is an ongoing game of GTN in <#$channelID>]
$description[1;<:D_rightarrow:953778843389399131> I have got the number in mind I have DMed you the number]
$color[1;$getServerVar[color]]
$channelSendMessage[$channelID;{newEmbed:{description:<:876127257867993138:946761779969667112> Guess the number has started! The number is from $message[1] to $message[2] Good luck everybody!}{color:$getServerVar[color]}}]
$sendDM[{newEmbed:{description: The number for Guess The Number is $random[$message[1];$message[2]]}{color:$getServerVar[color]}};$authorid]
$onlyif[$isuserdmenabled==true;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You have dms disabled please enable them and run the \`guess-number\` command**}}]
$onlyif[$message[1]<$message[2];{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [min] [max]\`**}}]
$onlyif[$message[2]>=5;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **The number must be greater than \`5\`**}}]
$onlyif[$checkcontains[$message;q;w;e;r;t;y;u;i;o;p;a;s;d;f;g;h;j;k;lz;x;c;v;b;n;m]==false;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You need to use numbers**}}]
$argscheck[>1;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [min] [max]\`**}}]
$onlyForRoles[$getServerVar[ownerole];$getServerVar[staffrole];]
$suppressErrors`
});