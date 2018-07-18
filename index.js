var next=0;

function takeANumber(katzDeliLine, newName){
    //katzDeliLine[katzDeliLine.length]=newName;
    //return `Welcome, ${newName}. You are number ${(katzDeliLine.length)} in line.`;
    //Welcome, Ada. You are number 1 in line
    next++;
    return `you are number ${next}`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length ===0){
    return `There is nobody waiting to be served!`;
  }else{
  //  var temp =katzDeliLine[0];
    //katzDeliLine=;//returns the 
    return `Currently serving ${katzDeliLine.shift()}.`//shft returns the item removed- not a new array w/o the item
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length===0){
    return `The line is currently empty.`;
  }else{
    var temp = "The line is currently: ";
    for(var i=0; i < katzDeliLine.length; i++){
        temp= temp+ `${i+1}. ${katzDeliLine[i]}`;
        if(katzDeliLine.length-1>i){
          temp= temp+`, `
        }
    }
    return temp;
    //The line is currently: 1. Bill, 2. Jane, 3. Ann
  }
}

/*Build a function currentLine that returns the current line. For example, if katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is currently: 1. Ada, 2. Grace". If there is nobody in line, it should return "The line is currently empty."*/