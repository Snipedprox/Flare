module.exports = {
name:"tagadd",
code:`$color[1;$getServerVar[color]]
$description[1;$getServerVar[check] **Tag has been created**
Tag: $splittext[1]]
$setservervar[reply;$getservervar[reply]~~$splittext[2]]
$setservervar[tags;$getservervar[tags]~~$splittext[1]]
$onlyif[$checkcontains[$tolowercase[$message];setuservar;setvar;setservervar;setmessagevar;setchannelvar;clienttoken;djseval;eval]==false;]
$onlyif[$checkcontains[$splittext[1]; ]==false;$getServerVar[error] **You cant have triggers in your tag**]
$onlyif[$splittext[2]!=;$getServerVar[error] **Correct usage: $getservervar[prefix]$commandname < trigger > | < reply >**]
$textsplit[$replacetext[$message; |;|;1];|]`}