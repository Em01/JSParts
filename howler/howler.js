//Howler loads the first sound file compatible with the browser. Stored in src array.
<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.0.0/howler.core.min.js">

var sound = new Howl({
  urls: ['sound.mp3']
});

var soundTwo = new Howl({
  urls: ['soundTwo.mp3']
});

function onKeyDown(event){
  sound.play();
};

function onKeyUp(event){
  soundTwo.play();
}
</script>
</head>
</html>

