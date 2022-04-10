module.exports = {
    name: "add-cmd",
    code: `
$setservervar[ccmd;$replacetext[$replacetext[$checkcondition[$getservervar[ccmd]!=];false;$tolowercase[$message[1]]/];true;$getservervar[ccmd]$tolowercase[$message[1]]/]]
$setservervar[cdes;$getservervar[cdes]$messageslice[1]/]

$author[1;Custom command;https://images-ext-1.discordapp.net/external/yqI36lWljGkYOLAhmgc6u3YVk5zP--SgpOdwljSmdK4/https/i.ibb.co/5TCYr8h/success.png]
$color[1;$getServerVar[color]]
$description[1; created the custom command $replacetext[$replacetext[\`$tolowercase[$message[1]]\`;#right_click#;>];#left_click#;<]]
$onlyif[$findtextsplitindex[$tolowercase[$message[1]]]==0;$getServerVar[error] Custom command **already** exists]
$textsplit[$getservervar[ccmd];/]
$onlyif[$checkcontains[$message;#RIGHT#;#LEFT#;#RIGHT_BRACKET#;#LEFT_BRACKET#;/]==false;$getServerVar[error] You can't add **tags** to your trigger]
$argscheck[>2;$getServerVar[error] **Correct usage: $tolowercase[$commandname]  < trigger > < respone >**]
$onlyIf[$hasPerms[$guildid;$authorid;managemessages]==true;$getServerVar[error] **You are missing the \`manage messages\` permission**]
`}