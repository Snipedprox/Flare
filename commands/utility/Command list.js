module.exports = {
    name: "cmd-list",
    code: `
$getServerVar[check] **$servername's custom commands**
$author[1;$touppercase[$servername's custom commands list];https://images-ext-1.discordapp.net/external/rJPv1FoZ6gwjfeM-caDcWryQFqx9-MkYvSSOJzPE3hQ/https/i.imgur.com/7EllBlG.png]
$color[1;$getServerVar[color]]
$description[1;$replacetext[$replacetext[$replacetext[$getservervar[ccmd];#right_click#;>];#left_click#;<];/;, ]]
$addtimestamp[1]
$onlyif[$gettextsplitlength>=2;$getServerVar[error] **$servername** Has no custom commands]
$textsplit[$getservervar[ccmd];/] 
`}