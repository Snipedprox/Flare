module.exports = {
name: "shop",
$if: "v4",
aliases: "store",
usage: "shop [page/1/2/3/4/5/6/7/8/9/10]",
code: `
$if[$message==1]
$sendMessage[{newEmbed:{author: Role Shops!:$userAvatar[$clientID]}
  {color:$getServerVar[color]}
  {thumbnail:$serverIcon} 
  {description:Hello, $username!!
**Welcome to __\`$guild[$guildID;name]\`__'s role shop!**
*You can buy roles in this shop*
**__ | How to buy roles?__**
You can buy roles with example, \`$getServerVar[prefix]buy < number >\`}
$If[$getServerVar[ro1]!=]
 {field:1 → $role[$getServerVar[ro1];name]:
>  **Role** ⸼  →  <@&$getServerVar[ro1]>
>  **Price** ⸼ →  $numberSeparator[$getServerVar[rp1]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro2]!=]
{field:2 → $role[$getServerVar[ro2];name]:
>  **Role** ⸼ →  <@&$getServerVar[ro2]>
>  **Price** ⸼ →  $numberSeparator[$getServerVar[rp2]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro3]!=]
{field:3 → $role[$getServerVar[ro3];name]:
>  **Role** ⸼ →  <@&$getServerVar[ro3]>
>  **Price** ⸼ →  $numberSeparator[$getServerVar[rp3]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro4]!=]
{field:4 → $role[$getServerVar[ro4];name]:
>  **Role** ⸼ →  <@&$getServerVar[ro4]>
>  **Price** ⸼ →  $numberSeparator[$getServerVar[rp4]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro5]!=]
{field:5 → $role[$getServerVar[ro5];name]:
>  **Role** ⸼ →  <@&$getServerVar[ro5]>
>  **Price** ⸼ →  $numberSeparator[$getServerVar[rp5]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro6]!=]
{field:6 → $role[$getServerVar[ro6];name]:
>  **Role** ⸼ →  <@&$getServerVar[ro6]>
>  **Price** ⸼ →  $numberSeparator[$getServerVar[rp6]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro7]!=]
{field:7 → $role[$getServerVar[ro7];name]:
>  **Role** ⸼ →  <@&$getServerVar[ro7]>
>  **Price** ⸼ →  $numberSeparator[$getServerVar[rp7]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro8]!=]
{field:8 → $role[$getServerVar[ro8];name]:
>  **Role** ⸼ →  <@&$getServerVar[ro8]>
>  **Price** ⸼ →  $numberSeparator[$getServerVar[rp8]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro9]!=]
{field:9 → $role[$getServerVar[ro9];name]:
>  **Role** ⸼ →  <@&$getServerVar[ro9]>
>  **Price** ⸼ →  $numberSeparator[$getServerVar[rp9]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro10]!=]
{field:10 → $role[$getServerVar[ro10];name]:
>  **Role** ⸼ →  <@&$getServerVar[ro10]>
>  **Price** ⸼ →  $numberSeparator[$getServerVar[rp10]]$getServerVar[symbol]}
$endIf}};no]
$suppressErrors[wrong usage]
$else
$if[$message==2]
$sendMessage[{newEmbed:{author: Role Shops!:$userAvatar[$clientID]}
  {color:$getServerVar[color]}
  {thumbnail:$serverIcon} 
  {description:Hello, $username!!
**Welcome to __\`$guild[$guildID;name]\`__'s role shop!**
*You can buy roles in this shop*
**__ | How to buy roles?__**
You can buy roles with example, \`$getServerVar[prefix]buy < number >\`}
$If[$getServerVar[ro11]!=]
 {field:11 → $role[$getServerVar[ro11];name]:
>  **Role** ⸼  → $get[stan] <@&$getServerVar[ro11]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp11]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro12]!=]
{field:12 → $role[$getServerVar[ro12];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro12]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp12]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro13]!=]
{field:13 → $role[$getServerVar[ro13];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro13]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp13]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro14]!=]
{field:14 → $role[$getServerVar[ro14];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro14]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp14]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro15]!=]
{field:15 → $role[$getServerVar[ro15];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro15]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp15]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro16]!=]
{field:16 → $role[$getServerVar[ro16];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro16]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp16]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro17]!=]
{field:17 → $role[$getServerVar[ro17];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro17]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp17]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro18]!=]
{field:18 → $role[$getServerVar[ro18];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro18]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp18]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro19]!=]
{field:19 → $role[$getServerVar[ro19];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro19]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp19]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro20]!=]
{field:20 → $role[$getServerVar[ro20];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro20]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp20]]$getServerVar[symbol]}
$endIf}};no]
$suppressErrors[wrong usage]
$let[stan;]
$else
$if[$message==3]
$sendMessage[{newEmbed:{author: Role Shops!:$userAvatar[$clientID]}
  {color:$getServerVar[color]}
  {thumbnail:$serverIcon} 
  {description:Hello, $username!!
**Welcome to __\`$guild[$guildID;name]\`__'s role shop!**
*You can buy roles in this shop*
**__ | How to buy roles?__**
You can buy roles with example, \`$getServerVar[prefix]buy < number >\`}
$If[$getServerVar[ro21]!=]
 {field:21 → $role[$getServerVar[ro21];name]:
>  **Role** ⸼  → $get[stan] <@&$getServerVar[ro21]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp21]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro22]!=]
{field:22 → $role[$getServerVar[ro22];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro22]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp22]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro23]!=]
{field:23 → $role[$getServerVar[ro23];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro23]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp23]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro24]!=]
{field:24 → $role[$getServerVar[ro24];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro24]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp24]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro25]!=]
{field:25 → $role[$getServerVar[ro25];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro25]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp25]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro26]!=]
{field:26 → $role[$getServerVar[ro26];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro26]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp26]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro27]!=]
{field:27 → $role[$getServerVar[ro27];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro27]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp27]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro28]!=]
{field:28 → $role[$getServerVar[ro28];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro28]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp28]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro29]!=]
{field:29 → $role[$getServerVar[ro29];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro29]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp29]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro30]!=]
{field:30 → $role[$getServerVar[ro30];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro30]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp30]]$getServerVar[symbol]}
$endIf}};no]
$suppressErrors[wrong usage]
$let[stan;]
$else
$if[$message==4]
$sendMessage[{newEmbed:{author: Role Shops!:$userAvatar[$clientID]}
  {color:$getServerVar[color]}
  {thumbnail:$serverIcon} 
  {description:Hello, $username!!
**Welcome to __\`$guild[$guildID;name]\`__'s role shop!**
*You can buy roles in this shop*
**__ | How to buy roles?__**
You can buy roles with example, \`$getServerVar[prefix]buy < number >\`}
$If[$getServerVar[ro31]!=]
 {field:31 → $role[$getServerVar[ro31];name]:
>  **Role** ⸼  → $get[stan] <@&$getServerVar[ro31]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp31]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro32]!=]
{field:32 → $role[$getServerVar[ro32];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro32]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp32]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro33]!=]
{field:33 → $role[$getServerVar[ro33];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro33]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp33]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro34]!=]
{field:34 → $role[$getServerVar[ro34];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro34]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp34]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro35]!=]
{field:35 → $role[$getServerVar[ro35];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro35]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp35]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro36]!=]
{field:36 → $role[$getServerVar[ro36];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro36]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp36]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro37]!=]
{field:37 → $role[$getServerVar[ro37];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro37]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp37]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro38]!=]
{field:38 → $role[$getServerVar[ro38];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro38]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp38]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro39]!=]
{field:39 → $role[$getServerVar[ro39];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro39]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp39]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro40]!=]
{field:40 → $role[$getServerVar[ro40];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro40]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp40]]$getServerVar[symbol]}
$endIf}};no]
$suppressErrors[wrong usage]
$let[stan;]
$else
$if[$message==5]
$sendMessage[{newEmbed:{author: Role Shops!:$userAvatar[$clientID]}
  {color:$getServerVar[color]}
  {thumbnail:$serverIcon} 
  {description:Hello, $username!!
**Welcome to __\`$guild[$guildID;name]\`__'s role shop!**
*You can buy roles in this shop*
**__ | How to buy roles?__**
You can buy roles with example, \`$getServerVar[prefix]buy < number >\`}
$If[$getServerVar[ro41]!=]
 {field:41 → $role[$getServerVar[ro41];name]:
>  **Role** ⸼  → $get[stan] <@&$getServerVar[ro41]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp41]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro42]!=]
{field:42 → $role[$getServerVar[ro42];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro42]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp42]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro43]!=]
{field:43 → $role[$getServerVar[ro43];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro43]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp43]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro44]!=]
{field:44 → $role[$getServerVar[ro44];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro44]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp44]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro45]!=]
{field:45 → $role[$getServerVar[ro45];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro45]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp45]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro46]!=]
{field:46 → $role[$getServerVar[ro46];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro46]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp46]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro47]!=]
{field:47 → $role[$getServerVar[ro47];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro47]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp47]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro48]!=]
{field:48 → $role[$getServerVar[ro48];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro48]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp48]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro49]!=]
{field:49 → $role[$getServerVar[ro49];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro49]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp49]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro50]!=]
{field:50 → $role[$getServerVar[ro50];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro50]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp50]]$getServerVar[symbol]}
$endIf}};no]
$let[stan;]
$else
$if[$message==6]
$sendMessage[{newEmbed:{author: Role Shops!:$userAvatar[$clientID]}
  {color:$getServerVar[color]}
  {thumbnail:$serverIcon} 
  {description:Hello, $username!!
**Welcome to __\`$guild[$guildID;name]\`__'s role shop!**
*You can buy roles in this shop*
**__ | How to buy roles?__**
You can buy roles with example, \`$getServerVar[prefix]buy < number >\`}
$If[$getServerVar[ro51]!=]
 {field:51 → $role[$getServerVar[ro51];name]:
>  **Role** ⸼  → $get[stan] <@&$getServerVar[ro51]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp51]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro52]!=]
{field:52 → $role[$getServerVar[ro52];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro52]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp52]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro53]!=]
{field:53 → $role[$getServerVar[ro53];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro53]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp53]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro54]!=]
{field:54 → $role[$getServerVar[ro54];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro54]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp54]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro55]!=]
{field:55 → $role[$getServerVar[ro55];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro55]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp55]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro56]!=]
{field:56 → $role[$getServerVar[ro56];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro56]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp56]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro57]!=]
{field:57 → $role[$getServerVar[ro57];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro57]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp57]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro58]!=]
{field:58 → $role[$getServerVar[ro58];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro58]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp58]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro59]!=]
{field:59 → $role[$getServerVar[ro59];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro59]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp59]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro60]!=]
{field:60 → $role[$getServerVar[ro60];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro60]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp60]]$getServerVar[symbol]}
$endIf}};no]
$let[stan;]
$else
$if[$message==7]
$sendMessage[{newEmbed:{author: Role Shops!:$userAvatar[$clientID]}
  {color:$getServerVar[color]}
  {thumbnail:$serverIcon} 
  {description:Hello, $username!!
**Welcome to __\`$guild[$guildID;name]\`__'s role shop!**
*You can buy roles in this shop*
**__ | How to buy roles?__**
You can buy roles with example, \`$getServerVar[prefix]buy < number >\`}
$If[$getServerVar[ro61]!=]
 {field:61 → $role[$getServerVar[ro61];name]:
>  **Role** ⸼  → $get[stan] <@&$getServerVar[ro61]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp61]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro62]!=]
{field:62 → $role[$getServerVar[ro62];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro62]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp62]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro63]!=]
{field:63 → $role[$getServerVar[ro63];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro63]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp63]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro64]!=]
{field:64 → $role[$getServerVar[ro64];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro64]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp64]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro65]!=]
{field:65 → $role[$getServerVar[ro65];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro65]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp65]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro66]!=]
{field:66 → $role[$getServerVar[ro66];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro66]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp66]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro67]!=]
{field:67 → $role[$getServerVar[ro67];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro67]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp67]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro68]!=]
{field:68 → $role[$getServerVar[ro68];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro68]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp68]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro69]!=]
{field:69 → $role[$getServerVar[ro69];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro69]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp69]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro70]!=]
{field:70 → $role[$getServerVar[ro70];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro70]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp70]]$getServerVar[symbol]}
$endIf}};no]
$let[stan;]
$else
$if[$message==8]
$sendMessage[{newEmbed:{author: Role Shops!:$userAvatar[$clientID]}
  {color:$getServerVar[color]}
  {thumbnail:$serverIcon} 
  {description:Hello, $username!!
**Welcome to __\`$guild[$guildID;name]\`__'s role shop!**
*You can buy roles in this shop*
**__ | How to buy roles?__**
You can buy roles with example, \`$getServerVar[prefix]buy < number >\`}
$If[$getServerVar[ro71]!=]
 {field:71 → $role[$getServerVar[ro71];name]:
>  **Role** ⸼  → $get[stan] <@&$getServerVar[ro71]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp71]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro72]!=]
{field:72 → $role[$getServerVar[ro72];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro72]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp72]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro73]!=]
{field:73 → $role[$getServerVar[ro73];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro73]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp73]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro74]!=]
{field:74 → $role[$getServerVar[ro74];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro74]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp74]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro75]!=]
{field:75 → $role[$getServerVar[ro75];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro75]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp75]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro76]!=]
{field:76 → $role[$getServerVar[ro76];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro76]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp76]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro77]!=]
{field:77 → $role[$getServerVar[ro77];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro77]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp77]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro78]!=]
{field:78 → $role[$getServerVar[ro78];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro78]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp78]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro79]!=]
{field:79 → $role[$getServerVar[ro79];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro79]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp79]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro80]!=]
{field:80 → $role[$getServerVar[ro80];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro80]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp80]]$getServerVar[symbol]}
$endIf}};no]
$let[stan;]
$else
$if[$message==9]
$sendMessage[{newEmbed:{author: Role Shops!:$userAvatar[$clientID]}
  {color:$getServerVar[color]}
  {thumbnail:$serverIcon} 
  {description:Hello, $username!!
**Welcome to __\`$guild[$guildID;name]\`__'s role shop!**
*You can buy roles in this shop*
**__ | How to buy roles?__**
You can buy roles with example, \`$getServerVar[prefix]buy < number >\`}
$If[$getServerVar[ro81]!=]
 {field:81 → $role[$getServerVar[ro81];name]:
>  **Role** ⸼  → $get[stan] <@&$getServerVar[ro81]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp81]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro82]!=]
{field:82 → $role[$getServerVar[ro82];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro82]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp82]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro83]!=]
{field:83 → $role[$getServerVar[ro83];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro83]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp83]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro84]!=]
{field:84 → $role[$getServerVar[ro84];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro84]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp84]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro85]!=]
{field:85 → $role[$getServerVar[ro85];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro85]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp85]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro86]!=]
{field:86 → $role[$getServerVar[ro86];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro86]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp86]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro87]!=]
{field:87 → $role[$getServerVar[ro87];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro87]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp87]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro88]!=]
{field:88 → $role[$getServerVar[ro88];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro88]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp88]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro89]!=]
{field:89 → $role[$getServerVar[ro89];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro89]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp89]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro90]!=]
{field:90 → $role[$getServerVar[ro90];name]:
>  **Role** ⸼ → $get[stan] <@&$getServerVar[ro80]>
>  **Price** ⸼ → $get[stan] $numberSeparator[$getServerVar[rp90]]$getServerVar[symbol]}
$endIf}};no]
$let[stan;]
$else
$if[$message==10]
$sendMessage[{newEmbed:{author: Role Shops!:$userAvatar[$clientID]}
  {color:$getServerVar[color]}
  {thumbnail:$serverIcon} 
  {description:Hello, $username!!
**Welcome to __\`$guild[$guildID;name]\`__'s role shop!**
*You can buy roles in this shop*
**__ | How to buy roles?__**
You can buy roles with example, \`$getServerVar[prefix]buy < number >\`.}
$If[$getServerVar[ro91]!=]
 {field:91 → $role[$getServerVar[ro91];name]:
>  **Role** ⸼  →  <@&$getServerVar[ro91]>
>  **Price** ⸼ →  $numberSeparator[$getServerVar[rp91]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro92]!=]
{field:92 → $role[$getServerVar[ro92];name]:
>  **Role** ⸼ →  <@&$getServerVar[ro92]>
>  **Price** ⸼ →  $numberSeparator[$getServerVar[rp92]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro93]!=]
{field:93 → $role[$getServerVar[ro93];name]:
>  **Role** ⸼ →  <@&$getServerVar[ro93]>
>  **Price** ⸼ →  $numberSeparator[$getServerVar[rp93]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro94]!=]
{field:94 → $role[$getServerVar[ro94];name]:
>  **Role** ⸼ →  <@&$getServerVar[ro94]>
>  **Price** ⸼ →  $numberSeparator[$getServerVar[rp94]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro95]!=]
{field:95 → $role[$getServerVar[ro95];name]:
>  **Role** ⸼ →  <@&$getServerVar[ro95]>
>  **Price** ⸼ →  $numberSeparator[$getServerVar[rp95]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro96]!=]
{field:96 → $role[$getServerVar[ro96];name]:
>  **Role** ⸼ →  <@&$getServerVar[ro96]>
>  **Price** ⸼ →  $numberSeparator[$getServerVar[rp96]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro97]!=]
{field:97 → $role[$getServerVar[ro97];name]:
>  **Role** ⸼ →  <@&$getServerVar[ro97]>
>  **Price** ⸼ →  $numberSeparator[$getServerVar[rp97]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro98]!=]
{field:98 → $role[$getServerVar[ro98];name]:
>  **Role** ⸼ →  <@&$getServerVar[ro98]>
>  **Price** ⸼ →  $numberSeparator[$getServerVar[rp98]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro99]!=]
{field:99 → $role[$getServerVar[ro99];name]:
>  **Role** ⸼ →  <@&$getServerVar[ro99]>
>  **Price** ⸼ →  $numberSeparator[$getServerVar[rp99]]$getServerVar[symbol]}
$endIf

$If[$getServerVar[ro100]!=]
{field:100 → $role[$getServerVar[ro100];name]:
>  **Role** ⸼ →  <@&$getServerVar[ro100]>
>  **Price** ⸼ →  $numberSeparator[$getServerVar[rp100]]$getServerVar[symbol]}
$endIf}};no]
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$suppressErrors[wrong usage]
$argscheck[>0;$getServerVar[error] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname < page >\`\`\`]
$onlyIf[$getServerVar[eco]==on;$getServerVar[error] **$username** This server does not have economy enabled]
$onlyIf[$getUserVar[ecobl;$authorid]==false;$getServerVar[error] **$username** You are economy blacklisted]`}


