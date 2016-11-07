$(document).ready(function(){

//global variables....

var $playerval = $('#selection');
var $dropdown = $('#dropdown');
var	$gameblock = $('#block');
var $square = $('.cell');
var $selectedPlayerO = $("#selection option[value='O']");
var $selectedPlayerX = $("#selection option[value='X']");

var go = '';
var elements = [];
var element = {};
var result = [];

//animation funn ::)))

$gameblock.hide();
$gameblock.fadeIn(2000);

function biggerText(){
			$playerval.animate({
						width: '220px',
						height: '55px'
					})
			$playerval.animate({
						'font-size': "40px",
						'font-size': "41px"
					})
		}


$dropdown.hide();
$dropdown.fadeIn(2000);
setTimeout(biggerText,2600);



//playerChange value.

$playerval.change(function(){

	var che = '';

	$('#selection option:selected').each(function(){
		che += $(this).text();
	});


	function getVal(){

		if(che == 'Player X'){
			go = 'X';
		}
		else{
			go = 'O';
		}
	}

    getVal();

});

	$playerval.change();




$square.one('click', function(){

	$(this).text(go);

	$dropdown.fadeOut('slow');

	var elementsId = $(event.target).attr('id');
	var cellState = go;
	var cellStateActive = $(event.target).val();
	var checker = elementsId+cellState;

	// uz rutinjas klikshja njem vertibu no inputa un aivieto tekstu uz temetas rutinjas.

	if(result.length != 9){

	 switch(checker){
	 	case 'b1X': case 'b1O':


	 		result.push(checker);

	 		break;

	 	case 'b2X': case 'b2O':

	 		result.push(checker);

	 		break;

	 	case 'b3X': case 'b3O':

	 		result.push(checker);

	 		break;

	 	case 'b4X': case 'b4O':

	 		result.push(checker);

	 		break;

	 	case 'b5X': case 'b5O':

	 		result.push(checker);

	 		break;

	 	case 'b6X': case 'b6O':

	 		result.push(checker);

	 		break;

	 	case 'b7X': case 'b7O':

	 		result.push(checker);

	 		break;

	 	case 'b8X': case 'b8O':

	 		result.push(checker);

	 		break;

	 	case 'b9X': case 'b9O':

	 		result.push(checker);

	 		break;

	 	default:
	 		alert('Please choose a player !');
	 		location.reload();
	 	}
	}

//uzvaretaja funkcijas izveidoshana - ja array garums ir 3 reizes, tad 3 reizes parbaudis objektus ar tiem kas ir result array, ja šie objekti sakritīs rezultāts būs true,
// jo inArray dod araa tikai kordinates indexu, kas ir 0-1-2-3-4-5 ....


//function for selecting Player, and changing player value.

	function SelectP(){
		i = result.length;
		i -= 1;

		if (result[i].indexOf('X') != -1){
			$selectedPlayerO.attr('selected','selected');
			$selectedPlayerX.removeAttr('selected');
			go = 'O';
		}

		if (result[i].indexOf('O') != -1){
			$selectedPlayerX.attr('selected','selected');
			$selectedPlayerO.removeAttr('selected');
			go = 'X';
		}
	}


	SelectP();

//function for declairing a winner, salidzina uzvaras kooordinātes pret koordinatem kuras glabajas result array.

	function containsAll(kordinates, results){
  	for(var i = 0 , len = kordinates.length; i < len; i++){
     	if($.inArray(kordinates[i], results) == -1) return false;
  	}
  	return true;
	}


	var winXD1 = containsAll(['b1X', 'b5X', 'b9X'], result);
	var winXD2 = containsAll(['b7X', 'b5X', 'b3X'], result);
	var winXH1 = containsAll(['b1X', 'b2X', 'b3X'], result);
	var winXH2 = containsAll(['b4X', 'b5X', 'b6X'], result);
	var winXH3 = containsAll(['b7X', 'b8X', 'b9X'], result);
	var winXV1 = containsAll(['b1X', 'b4X', 'b7X'], result);
	var winXV2 = containsAll(['b2X', 'b5X', 'b8X'], result);
	var winXV3 = containsAll(['b3X', 'b6X', 'b9X'], result);

	var winOD1 = containsAll(['b1O', 'b5O', 'b9O'], result);
	var winOD2 = containsAll(['b7O', 'b5O', 'b3O'], result);
	var winOH1 = containsAll(['b1O', 'b2O', 'b3O'], result);
	var winOH2 = containsAll(['b4O', 'b5O', 'b6O'], result);
	var winOH3 = containsAll(['b7O', 'b8O', 'b9O'], result);
	var winOV1 = containsAll(['b1O', 'b4O', 'b7O'], result);
	var winOV2 = containsAll(['b2O', 'b5O', 'b8O'], result);
	var winOV3 = containsAll(['b3O', 'b6O', 'b9O'], result);

//if one of these statements is true, then X wins

	if (winXD1 || winXD2 || winXH1 || winXH2 || winXH3 || winXV1 || winXV2 || winXV3){

		function PlayerXwins(){
			alert('Player X has won !');
			question = confirm('Do you want to play a new game ?');
			if (question){
				location.reload();
			}
		}

	setTimeout(PlayerXwins, 2);

	}

//if one of these statements is true, then O wins

	if (winOD1 || winOD2 || winOH1 || winOH2 || winOH3 || winOV1 || winOV2 || winOV3){

		function PlayerOwins(){
			alert('Player O has won !');
			question = confirm('Do you want to play a new game ?');
			if (question){
				location.reload();
			}
		}

	setTimeout(PlayerOwins, 2);

	}

//looks for the cells to be filled

	var CellArrayText = $square.text();

		function ItsAtie(){
			alert("It's a tie");
			question = confirm('Do you want to play a new game ?');
			if (question){
			location.reload();
			}
		}
	
		
		if(CellArrayText.length == 9)
			{
				setTimeout(ItsAtie, 2);
		}	
	


// Click funtion ends !

});

//Document ready ends !

});
