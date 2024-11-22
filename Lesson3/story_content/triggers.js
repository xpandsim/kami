function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5cNJHc5VYAc":
        Script1();
        break;
      case "6UUvSGMd8fx":
        Script2();
        break;
      case "6KoD4pzr9YO":
        Script3();
        break;
      case "6KMWQKm3E4t":
        Script4();
        break;
      case "64IZjtrd2pf":
        Script5();
        break;
      case "61ooE8EXDYk":
        Script6();
        break;
      case "6QsHtNHWnG5":
        Script7();
        break;
      case "5nU43qAcxNS":
        Script8();
        break;
      case "5fdsrCafdrP":
        Script9();
        break;
      case "5mbsuMR2ASu":
        Script10();
        break;
      case "5nEQXQ4Ya6u":
        Script11();
        break;
      case "6frDyU9g59h":
        Script12();
        break;
      case "5sOqVltbEtB":
        Script13();
        break;
      case "6P6bwJLjEqJ":
        Script14();
        break;
      case "6c3lFzhohEI":
        Script15();
        break;
      case "5vah2iR70kN":
        Script16();
        break;
      case "6J1Tmep2tlz":
        Script17();
        break;
      case "6IZkCfqHEOs":
        Script18();
        break;
      case "63O5cXM7K4p":
        Script19();
        break;
      case "5fw4Ibplaee":
        Script20();
        break;
      case "5gLfCsSbYaU":
        Script21();
        break;
      case "6380dt6OfOd":
        Script22();
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
  player.once(() => {
const target = object('5iCv785QVZV');
const duration = 750;
const easing = 'ease-out';
const id = '6UaDBq62Klr';
const shakeAmount = 2;
const delay = 1250;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5tqwMudDStT');
const duration = 750;
const easing = 'ease-out';
const id = '6krPYh6MzeI';
const shakeAmount = 2;
const delay = 2229;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('65GuzZ0qasj');
const duration = 750;
const easing = 'ease-out';
const id = '63AVKX5ZnUp';
const shakeAmount = 2;
const delay = 3979;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
