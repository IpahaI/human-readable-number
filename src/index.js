module.exports = function toReadable (number) {
	let before20Arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];  
	let tensArr = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let numberIndexOfArr = number.toString().split(''); 
	let lastTwoDigits = number.toString().slice(-2);
	let space = ' ';
	let hundred = 'hundred';


	if(number < 20) {
		return (before20Arr[number])
  } 
  
	if(20 <= number && number < 100) {
		if(number % 10 === 0) {
		return tensArr[numberIndexOfArr[0]]
    } else {
      return (tensArr[numberIndexOfArr[0]] + space + before20Arr[numberIndexOfArr[1]]);
    }
  }
  
    if(100 <= number && number < 1000) {
    if(number % 100 == 0){
      return (before20Arr[numberIndexOfArr[0]] + space + hundred)
    } else if(number % 10 == 0){
      return (before20Arr[numberIndexOfArr[0]] + space + hundred + space + tensArr[numberIndexOfArr[1]])
    } else if(numberIndexOfArr[1] == 0) {
      return (before20Arr[numberIndexOfArr[0]] + space + hundred + space + before20Arr[numberIndexOfArr[2]])
    } else if(lastTwoDigits < 20){
      return (before20Arr[numberIndexOfArr[0]] + space + hundred + space + before20Arr[lastTwoDigits])
    } else {
      return (before20Arr[numberIndexOfArr[0]] + space + hundred + space + tensArr[numberIndexOfArr[1]] + space + before20Arr[numberIndexOfArr[2]])
    }
  }
}

 