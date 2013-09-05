	var max = 4000000;
	var firstNum = 1;
	var secondNum = 1;
	var sum = 0;
	var count = 0;
	var temp;
	while(secondNum <= max){
		if(secondNum % 2 == 0){
			sum += secondNum;
			++ count;
		}
		temp = secondNum;
		secondNum += firstNum;
		firstNum = temp;
	}

	document.write(sum, "<br>");
	document.write(count, "<br>");
	


