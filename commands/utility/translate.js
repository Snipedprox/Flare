module.exports = {
    name: 'translate',
    aliases: 'trans',
    code: `
$author[1;$replaceText[**Message translated**;*;];$replaceText[$replaceText[$servericon;null;$useravatar[$clientid]];undefined;$useravatar[$clientid]]]
$color[1;$getServerVar[color]]
$description[1;**┏━━━━━━━━━━━━━━┓
Message: $get[msg] $get[lan]
Language: $get[lan]
Output: $get[res]
┗━━━━━━━━━━━━━━━┛**]

$let[res;$djsEval[
require('translate-google')('$get[msg]', { to: '$get[lan]' }).then(x => x).catch(err => {
  throw err + '.'
});yes]]

$suppresserrors[The language \`$get[lan]\` is not supported!]

$let[msg;$messageslice[1]]
$let[lan;$touppercase[$message[1]]]

$onlyif[$messageslice[1]!=;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:<:TT_mhn:942529955332513812> **Wrong usage! did you mean $getServerVar[prefix]translate < language > < text > ?**}}]

$onlyif[$message!=;{newEmbed: {color:e50000} {author:$replaceText[**Error occured;*;]:$useravatar[$clientid]} {description:<:TT_mhn:942529955332513812> **Wrong usage! did you mean $getServerVar[prefix]translate < language > < text > ?**}}]
`
} 
