module.exports = {
name: "mdhtml",
code: `
$createfile[$get[res];markdown$random[100;93449].txt]

\`\`\`js
$get[res]\`\`\`

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
$let[m;$replacetext[$readfile[mdhtml.txt];.......................................;$message]]
$let[last;$getvar[ev]]
$deletecommand
$argsCheck[>0;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < markdown here >\`\`\`]`}