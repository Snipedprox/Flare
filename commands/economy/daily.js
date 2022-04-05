module.exports = {
name: "daily",
$if: "v4",
code: `

<a:D_tick:953783189971816530> Welcome back **$username**, you currently have a streak of **$getUserVar[dstreak] days** here's your daily reward:

Credits: **$numberSeparator[$truncate[$divide[$multi[3;$getUserVar[dstreak];$random[100;500]];6]];,]**
Lootboxes:** $numberSeparator[$truncate[$divide[$multi[$getUserVar[dstreak];$random[1;7]];3]];,]**


$setUserVar[cash;$sum[$getUserVar[cash];$truncate[$divide[$multi[3;$getUserVar[dstreak];$random[100;500]];6]]]]
$setUserVar[dstreak;$sum[$getUserVar[dstreak];1]]
$setUserVar[lootbox;$sum[$getUserVar[lootbox];$truncate[$divide[$multi[$getUserVar[dstreak];$random[1;7]];3]]]]

$cooldown[24h;{newEmbed: {title:<a:D_timer:953775784693207070> **Please wait... You are on Cooldown**} {color:$getServerVar[color]} {description: > **You can use the command again in \`%time%\`**

Tip: *While you wait, vote me in [Top.gg](https://top.gg/bot/$clientid)*}}]

$onlyIf[$getUserVar[casino]!=unset;{newEmbed: {color:$getServerVar[color]} {description: <a:cross:953779059756789781> **You need to create a casino**}}]`}