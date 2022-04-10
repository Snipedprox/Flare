module.exports = {
name: "rank",
aliases: "level",
usage: "level { userID }",
code: `
$color[1;$getServerVar[color]]
$image[1;https://vacefron.nl/api/rankcard?username=$replaceText[$username[$findMember[$message;yes]]; ;+;-1]&avatar=$userAvatar[$findMember[$message;yes]]?size=4096&level=$getUserVar[level;$findMember[$message;yes]]&rank=&currentxp=$getUserVar[xp;$findMember[$message;yes]]&nextlevelxp=$getUserVar[req;$findMember[$message;yes]]&previouslevelxp=0&custombg=https://cdn.discordapp.com/attachments/959784244878671932/962732591423848479/unknown.png&xpcolor=765e92&isboosting=$isBoosting[$findMember[$message;yes]]]`}