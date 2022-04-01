module.exports = {
name: "slash",
code: `
$createApplicationCommand[$guildID;eval; For evaluating your functions.;true;slash;code:enter the code.:true:3]
$createApplicationCommand[$guildID;exec;For executing shell commands.;true;slash;code:enter the function.:true:3]
$createApplicationCommand[$guildID;update;Fastest way to update your codes without rebooting.;true;slash]
$createApplicationCommand[$guildID;avatar;To see, an user's avatar or yours.;true;slash;member:please pick a member:false:6]
$createApplicationCommand[$guildID;poll;Creates a poll;true;slash;question:please ask the question:true:3]
$createApplicationCommand[$guildID;timeout;Timeout an user.;true;slash;[{"name": "user", "description": "Please pick an user", "required": "true", "type": 6 }, { "name": "time", "description": "Please enter a number for timeout time", "required": "true", "type": 10 }, {"name" : "unit_of_time", "type" : 3, "required" : true, "description" : "Please check unit of time to how long user will be timeouted.", "choices" : [{"name" : "second", "value" : "s"}, {"name" : "minute", "value" : "m"}, {"name" : "hour", "value" : "h"}, {"name" : "day", "value" : "d"}]}, {"name": "reason",
"description": "Enter a reason for timeouting.", "required":"false", "type":3}]]
$createApplicationCommand[$guildID;ban;Ban a member from the server.;true;slash;user:please enter member:true:6;reason:Please enter a reason.:false:3;time:an user can be banned max 7 days.:false:10]
**Succesfully created the slash commands ( do not rerun or else it will break)**

$onlyIf[$hasPerms[$guildid;$authorid;admin]==true;{newEmbed: {color:$getVar[color]} {author:Permission needed:https://cdn.discordapp.com/emojis/946761779839631380.webp?size=128&quality=lossless} {description:**You do not have the [admin](https://u.com) permission**}}]`
}