module.exports = {
name: "youleftme",
$if: "v4",
code: `
$if[$tolowercase[$message[1]]==1]
$color[1;$getServerVar[color]]
$title[1;**You left me...**]
$description[1;
I loved you... Why did you go?
  ** **
  ** **
I woke up with tears streaming down my cheeks, I had the same dream about you again:
I was hugging and you just disappeared, into thin air... I missed you you know.
I got up tears still streaming down my face and got to brushing my teeth.
Everything reminds me of you: The little moments we had when I messed with you when you were brushing your teeth, making breakfast with you, I wanna go back to then.
We had the whole world against us and our whole life ahead of us.
But...
** **
** **
You left me...]
$footer[1;You are on page 1/2]

$else

$if[$tolowercase[$message[1]]==2]
$color[1;$getServerVar[color]]
$title[1;**You left me...**]
$description[1;
I went downstairs wiping my tears away using my sweater when I came downstairs I saw my cat sleeping on the couch.
I was so happy when you bought her for me, we were so good for each other.
*"Hey there k-*" I couldn't finish my sentence, what was she called again.
How could I forget! 
I fell to the floor clasping my head.
*"I forgot her name I forgot her name I forgot her name!"*
What was her name?!
It was something with a B.
Bertha? Bea? Boop?
How could I forget!
My vision started getting blurry, I was starting to lose it.
I needed to grab a glass of water, I ran to the kitchen and grabbed a glass of water, holding it under the running water while shaking.
I drank the water but my vision was still the same, I fell to the floor and started hyperventilating.
*"You gave her to me so how could I forget her name!"* I yelled at the top of my lungs before my vision went black...
** **
** **
I woke up after around nine minutes.
*"Did I pass ou-"* I was interrupted my a splitting headache.
I stood up and tried walking to the medicine cabinet, I couldn't stand up so I just crawled to where it was and pulled myself up so I could reach the painkillers, I grabbed one and quickly took it.
My body protested in disgust of the taste of the medicine almost throwing up the little water I had inside of me.
After a few seconds I finally got it down, the feeling of nearly having to puke slowly fading.
I could barely move, the entire time that the medicine was starting to do it's job I
The headache didn't end until around twenty minutes after I had taken the medicine.]
$footer[1;You are on page 2/2]
$endif
$endif








$argsCheck[1;{newEmbed: {title:<:D_rightarrow:953778843389399131> **Missing arguments**} {color:$getServerVar[color]} {description: **Usage : \`$tolowercase[$commandname] [page]\`
Note: only 2 pages exist**}}]`}