module.exports = {
    name: "del-cmd",
    code: `
$setservervar[ccmd;$replacetext[$getservervar[ccmd];$advancedtextsplit[$getservervar[ccmd];/;$findtextsplitindex[$tolowercase[$message]]]/;]]
$setservervar[cdes;$replacetext[$getservervar[cdes];$advancedtextsplit[$getservervar[cdes];/;$findtextsplitindex[$tolowercase[$message]]]/;]]

$author[1;Command deleted;https://cdn.discordapp.com/emojis/961726678474842233.webp?size=128&quality=lossless]
$color[1;$getServerVar[color]]
$description[1;Successfully cleared command \`$replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<]\`]

$onlyif[$findtextsplitindex[$tolowercase[$message]]!=0;$getServerVar[error] Custom command not found]
$textsplit[$getservervar[ccmd];/]
$onlyif[$checkcontains[$message;#RIGHT#;#LEFT#;#RIGHT_BRACKET#;#LEFT_BRACKET#;/]==false;$getServerVar[error] You cant use symbols as a trigger]
$argscheck[>0;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < name >**]
$onlyIf[$hasPerms[$guildid;$authorid;manageserver]==true;$getServerVar[error] **You are missing the \`manage server\` permission**]
`}