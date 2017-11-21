
$(document).ready(function() {

		var mainCalcLine = '';
		var bottomCalcLine = '';
		var answer = 0;

	function changeScreenNumber (number) {

		mainCalcLine = mainCalcLine + number; 
		bottomCalcLine = bottomCalcLine + number;

		if (tooLong() === true) {
			mainCalcLine = 'Too big of a number';
			bottomCalcLine = 'Too big of a number';
			$('.top').text(mainCalcLine);
			$('.bottom').text(bottomCalcLine);
		} else if (mainCalcLine.length > 1 && mainCalcLine[0] === '0' && mainCalcLine[1] !== '.') {
			mainCalcLine = mainCalcLine.substring(1, 2);
			bottomCalcLine = bottomCalcLine.substring(1, 2);
		}

		$('.top').text(mainCalcLine);
		$('.bottom').text(bottomCalcLine);
	
	}

	function changeScreenSymbol (symbol) {
		if (bottomCalcLine.length > 0 && /(\+|-|\/|\*)/.test(bottomCalcLine[bottomCalcLine.length - 1]) === false ) {
			mainCalcLine = symbol;
			bottomCalcLine = bottomCalcLine + symbol;
			$('.top').text(mainCalcLine);
			$('.bottom').text(bottomCalcLine);
		}

		mainCalcLine = '';

	};

	function calcMath () {
		answer = eval(bottomCalcLine);
	}

	function tooLong () {
		return mainCalcLine.length >= 8;
	};

	$('#zero').on('click', function () {
		changeScreenNumber('0');
	});

	$('#one').on('click', function () {
		changeScreenNumber('1');
	});

	$('#two').on('click', function () {
		changeScreenNumber('2');
	});

	$('#three').on('click', function () {
		changeScreenNumber('3');
	});

	$('#four').on('click', function () {
		changeScreenNumber('4');
	});

	$('#five').on('click', function () {
		changeScreenNumber('5');
	});

	$('#six').on('click', function () {
		changeScreenNumber('6');
	});

	$('#seven').on('click', function () {
		changeScreenNumber('7');
	});

	$('#eight').on('click', function () {
		changeScreenNumber('8');
	});

	$('#nine').on('click', function () {
		changeScreenNumber('9');
	});

	$('#divide').on('click', function () {
		changeScreenSymbol('/');
	});

	$('#multiply').on('click', function () {
		changeScreenSymbol('*');
	});

	$('#subtract').on('click', function () {
		changeScreenSymbol('-');
	});

	$('#add').on('click', function () {
		changeScreenSymbol('+');
	});

	$('#decimal').on('click', function () {
		if (mainCalcLine.length < 1) {
			mainCalcLine = '0.';
			bottomCalcLine = bottomCalcLine + '0.';
			$('.top').text(mainCalcLine);
			$('.bottom').text(bottomCalcLine);
		} else if (/\./.test(mainCalcLine) === false) {
			mainCalcLine = mainCalcLine + '.';
			bottomCalcLine = bottomCalcLine + '.';
			$('.top').text(mainCalcLine);
			$('.bottom').text(bottomCalcLine);
		}

	});


	$('#all_clear').on('click', function () {
		mainCalcLine = '0';
		bottomCalcLine = '0';
		$('.top').text(mainCalcLine);
		$('.bottom').text(bottomCalcLine);
	});

	$('#clear_entry').on('click', function () {
		mainCalcLine = '0';
		bottomCalcLine = '0';
		$('.top').text(mainCalcLine);
		$('.bottom').text(bottomCalcLine);
	})

	$('#equal').on('click', function () {
		if (/(\+|-|\/|\*)/.test(bottomCalcLine) && /=/.test(bottomCalcLine) === false) {
			calcMath();
			mainCalcLine = answer.toString();
			bottomCalcLine = bottomCalcLine + '=' + answer.toString();
			$('.top').text(mainCalcLine);
			$('.bottom').text(bottomCalcLine);
		}
	});


});