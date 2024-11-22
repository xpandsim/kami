function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6K1J2JT4t6Y":
        Script1();
        break;
      case "670ix2JPRtr":
        Script2();
        break;
      case "64rEJiaLkk0":
        Script3();
        break;
      case "5qU7osRhR37":
        Script4();
        break;
      case "6ND53Nom3R9":
        Script5();
        break;
      case "6ZdAULckcRH":
        Script6();
        break;
      case "66IYbl22YMN":
        Script7();
        break;
      case "66mSZGzwOgl":
        Script8();
        break;
      case "6eohcLB7v2v":
        Script9();
        break;
      case "6L4BQUrhU42":
        Script10();
        break;
      case "5x74kCO4opS":
        Script11();
        break;
      case "6bX6I1Jhe8t":
        Script12();
        break;
      case "5qr2gDgVgax":
        Script13();
        break;
      case "61JcOUBFrw3":
        Script14();
        break;
      case "5YAlTlpQaoS":
        Script15();
        break;
      case "5okrmH64Ob1":
        Script16();
        break;
      case "6CPnpZv8H1z":
        Script17();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('645qT2HSqkM');
const duration = 750;
const easing = 'ease-out';
const id = '6lWo9TI0BzY';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
