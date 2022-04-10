module.exports = {
  name: 'djs',
  aliases: ['djseval','deval','dj'],
  code:`
$createfile[$get[res];$messageid.js]

$description[1;
Evaluated in $executiontimems
\`\`\`js
$croptext[$get[res];4050;;[...]]
\`\`\`]
$title[1;Evaluated;$getbotinvite[sendmessage;attachfiles;embedlinks]]
$footer[1;$charcount[$get[res]] char(s) long]
$color[1;$get[c]]
$addtimestamp[1]

$setvar[ev;$get[res]]

$let[res;$replacetext[$djsEval[
try {
  const os = require('os')
  const fs = require('fs');
  const ms = require('pretty-ms');
  const axios = require('axios');
  const cmd = client.loader.paths[0].commandsLocation.default;
  const discord = require('discord.js');
  const _ = require('lodash');
  function uc() { client.loader.update() }
  $get[m]
} catch(err) {
  err
}
;yes];$clienttoken;APPLICATION_TOKEN]
$suppresserrors[Suppressed an error to prevent crashing h]
$let[c;$getservervar[color]]
$let[m;$message]
$let[last;$getvar[ev]]
$onlyforids[$botownerid;852898670097858580;896846485805744168;$joinSplitText[;];]
$textSplit[$getGlobalUserVar[dev;$clientid];/]`
} /*, {
    type: 'awaited',
    name: 'djs',
    code: `
$createfile[$getvar[ev];$messageid.js]

$sendmessage[{newEmbed:{description:\`\`\`js
$get[2]
\`\`\`}{color:$get[c]}};no]

$sendmessage[{newEmbed:{description:\`\`\`js
$get[1]
\`\`\`}{color:$get[c]}};no]

$title[Evaluated;https://top.gg/bot/$clientid/invite]
$color[$get[c]]

$let[2;$croptext[$replacetext[$getvar[ev];$get[1];];4000;]]
$let[1;$croptext[$getvar[ev];4000;]]

$let[c;$getvar[c]]
`
}*/


/*
$sendmessage[{newEmbed:{description:\`\`\`js

$if[$charcount[$getvar[ev]]>8000;$croptext[$replacetext[$replacetext[$getvar[ev];$get[1];];$get[2];];4000;];undefined]

\`\`\`}{color:$get[c]}};no]
*/

// might need this later 
