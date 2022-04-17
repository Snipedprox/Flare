module.exports = {
name:"add-cmd",
aliases: ['addcmd','cmdadd','cmd-add'],
code:`$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **Custom command has been created
Command: \`!$splittext[1]\`**]
$setservervar[cdes;$getservervar[cdes]~~$splittext[2]]
$setservervar[ccmd;!$getservervar[ccmd]~~!$splittext[1]]
$onlyif[$checkcontains[$tolowercase[$message];setuservar;setvar;setservervar;setmessagevar;setchannelvar;clienttoken;djseval;eval]==false;]
$onlyif[$checkcontains[$splittext[1]; ]==false;$getServerVar[error] **You cant have spaces in your custom command**]
$onlyif[$splittext[2]!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < trigger > | < reply >**]
$textsplit[$replacetext[$message; |;|;1];|]`}