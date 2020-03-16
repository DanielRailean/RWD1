isLeap = (year) => (year % 4 == 0) || ((year % 100 == 0) && (year % 400 == 0))
daysinmonth = (year, month) => {
  switch (month){
    case 1 : 
    case 3 :
    case 5 :
    case 7:
    case 8:
    case 10:
    case 12:
    return 31;
    case 4 :
    case 6 :
    case 9 :
    case 11 :
    return 30;
    case 2 : return isLeap(year) ? 29 : 28;
  }

};

dayn = 19;
monthn = 9;
yearn = 2019;
dayb =27;
monthb =9;
yearb = 2000;

days = 0;
days = days + daysinmonth(yearb,monthb) - dayb + dayn;
for (i= monthb +1 ; i<=12; i++){
  days = days + daysinmonth(yearb,i);
};
for (j= 1; j<monthn; j++){
  days = days + daysinmonth(yearn ,j);
};

for (m = yearb +1; m< yearn; m++){
  if (isLeap( m )){
    days = days + 366
  } else days  = days + 365;
}
;
function alertMe(){
    alert('You are '+ days+ ' days old');
}
