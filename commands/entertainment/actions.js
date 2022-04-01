module.exports = [{
name: "hug",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username hugged $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/hug;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "kiss",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username kissed $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/kiss;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "bite",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username bit $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/bite;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "blush",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username blushed to $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/blush;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "bored",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username is bored**]
$image[1;$jsonRequest[https://nekos.best/api/v1/bored;url]]

`
},{
name: "cry",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username cries to $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/ry;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "cuddle",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username cuddles with $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/cuddle;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "dance",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username dances with $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/dance;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "facepalm",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username facepalms $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/facepalm;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "feed",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username feeds $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/feed;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "happy",
code: `
$color[1;$getServerVar[color]]
$description[1;**>:TT_love:942521075596656700> $username is happy**]
$image[1;$jsonRequest[https://nekos.best/api/v1/happy;url]]

`
},{
name: "highfive",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username highfives $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/highfive;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "laugh",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username laughs at $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/laugh;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "nekos",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username's requested nekos**]
$image[1;$jsonRequest[https://nekos.best/api/v1/nekos;url]]`
},{
name: "pat",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username pats $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/pat;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "poke",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username pokes $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/poke;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "pout",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username pouts**]
$image[1;$jsonRequest[https://nekos.best/api/v1/pout;url]]`
},{
name: "shrug",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username shrugs at $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/shrug;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "slap",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username slaps $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/slaps;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "sleep",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username sleeps with $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/sleep;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "smile",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username smiles at $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/smile;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "smug",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username smugs**]
$image[1;$jsonRequest[https://nekos.best/api/v1/smug;url]]`
},{
name: "stare",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username stares at $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/stare;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "think",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username thinks deeply**]
$image[1;$jsonRequest[https://nekos.best/api/v1/think;url]]`
},{
name: "thumbsup",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username thumbsup for $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/thumbsup;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "tickle",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username tickles $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/tickle;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "wave",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username waves at $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/wave;url]]

$let[u;$findUser[$message;yes]]`
},{
name: "wink",
code: `
$color[1;$getServerVar[color]]
$description[1;**<:TT_love:942521075596656700> $username winks at $username[$get[u]]**]
$image[1;$jsonRequest[https://nekos.best/api/v1/wink;url]]

$let[u;$findUser[$message;yes]]`}]