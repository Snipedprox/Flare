module.exports = {
name: "$alwaysExecute",
code: `
$author[1;Needed help;$getServerVar[suca]]
$color[1;$getServerVar[color]]
$description[1;**<@$authorid> my server 1st prefix is \`$getServerVar[prefix]\`**
**my server 2e prefix is \`$getServerVar[prefix2]\`**
**my server 3th prefix is \`$getServerVar[prefix3]\`**
**my server 4th prefix is \`$getServerVar[prefix4]\`**
**my server 5th prefix is \`$getServerVar[prefix5]\`**
**Do \`$getservervar[prefix]help\` for my command list**]
$onlyIf[$mentioned[1]==$clientid;]`
}