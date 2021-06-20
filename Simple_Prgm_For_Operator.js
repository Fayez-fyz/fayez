
// square a number
for ( var a = 0 ;a<=0; a++){
        let square = Math.pow(4,2);     
        console.log('Square of Number : ' + square);
}
//swap 2 numbers
let swp1 = 4;
let swp2  = 2;
let swap;
for ( var b =0 ;b<=0; b++){
    swap= swp1;
    swp1= swp2;                 
    swp2= swap;
    console.log("Swap of two numbers : " + swp1,swp2);

}
// Add 2 numbers
for ( var c =0 ;c<=0; c++){
        let add1= 20;
        let add2= 30;
        console.log('Add of two numbers : ' + (add1+add2));
}
//celcius to farenheit
let celcius = 40;
for ( var d =0 ;d<=0; d++){
        let celcius_to_Farenheit = (celcius * 9/5) + 32;
    console.log("Celcius to Farenheit : " + celcius_to_Farenheit);
}
//Meter to miles
let meter = 20000;
for ( var e =0 ;e<=0; e++){
        let mtr_to_miles = meter / 1609;
    console.log('Meter to miles : ' + mtr_to_miles.toFixed(2));
}
//pounds to kilogram
let pounds = 100;
for ( var f =0 ;f<=0; f++){
        let p_to_kg = pounds / 2.205;
        console.log("Pounds to Kilogram : " + p_to_kg.toFixed(1));
}
// batting average
let runs = 10000;
let out = 200;
for ( var g=0 ;g<=0; g++){
        let batting_avg = runs/out;
        console.log('Batting average : ' + batting_avg);
}
//test scores avg
let test1 = 80;
let test2 = 69;
let test3 = 90;
let test4 = 65;
let test5 = 72;
for ( var h =0 ;h<=0; h++){
        let tst_avg= (test1+test2+test3+test4+test5)/5;
        console.log("Test scores average : " + tst_avg);
}
//power of x^y
for ( var i =0 ;i<=0;i++){
        let power = Math.pow(5,2);     
console.log('Power of X ^ Y : ' + power);
}
// simple intrest
let p = 10000;
let r = 0.03875;
let t= 5;
for ( var j =0 ;j<=0; j++){
        let si = p*(1 + ( r*t));
console.log('Simple intrest : '+ si);
}
 // Equilateral triangle
 let eq = 10;
 for( var k = 0 ; k<=0; k++){
     let Eqt =( Math.sqrt(3)/4) * Math.pow(eq,2);
     console.log('Equilateral triangle : '+ Eqt.toFixed(2));
 }
  // Isosceles triangle
  let base = 8;
  let height = 10;
  for( var l = 0 ; l<=0; l++){
      let iso_t = (base*height)/2;
      console.log('Isosceles triangle : ' +iso_t);
}

//volume of sphere
let radius = 2;
for( var m = 0 ; m<=0; m++){
    let vl_sp = (4/3)*Math.PI*Math.pow(2,3);
    console.log('Volume of sphere : '+ vl_sp);
}
//volume of prism
let base1 = 63;
let height1 = 13;
for( var n = 0 ; n<=0; n++){
    let vl_pr = (base1*height1);
    console.log('Volume of prism : ' +vl_pr);
}

//area of triangle
let base2 = 9;
let height2 = 11;
for( var o = 0 ; o<=0; o++){
    let ar_t = (base2*height2)/2;
    console.log('area of triangle : ' +ar_t);
}

//Discount of product
let actual_cost = 50 ;
let sold_cost = 60;
for (var p1 = 0 ;p1<=0; p1++){
    let discount= actual_cost - sold_cost;
    console.log('Discount of product :' + discount);
}

// dia circum and area of circle
let radi = 10;
for (var q = 0 ;q<=0; q++){
    let dia = 2 * radi;
    let circum = 2*Math.PI*radi;
    let area =  Math.PI*(Math.pow(radi,2));
    console.log('Diameter : ' + dia + " circum : " + circum + " area : " +area );

}

// all arithmetic operation

let ar1 = 20;
let ar2 = 10;
for (var r1 = 0 ; r1<=0; r1++){
   let add = ar1 + ar2;
   let sub = ar1 - ar2;
   let mul = ar1 * ar2;
   let div = ar1 / ar2;
   let rem = ar1 % ar2;
   console.log('Addition : ' + add + " subraction : " + sub + " multiplication : " +mul + ' division :' +div + ' remainder : ' +rem  );
}

//Display the asterisk pattern 

console.log('*****');
console.log('*****');
console.log('*****');
console.log('*****');
console.log('*****');

// calculate electricity Bill
let watt = 100;
let hours = 24;
let month = 30;
let unitrate = 10;
for ( var s = 0 ; s<=0 ; s++){
    let wattFor24Hr = watt * hours;
    let convert30days = wattFor24Hr*30;
    let convertIntoUnit  = convert30days / 1000;
    let totalEnergyBill = convertIntoUnit * unitrate;
    console.log('Electricity Bill : ' + totalEnergyBill);

}

// calculate cgpa
let english = 72;
let maths = 69;
let science = 88;
let social = 94;
let tamil = 82;
for (var t1 =0 ; t1<=0 ; t1++){
    let sum = english+maths+science+social+tamil;
    let cgpa = sum / 5;
    console.log("CGPA : " +cgpa);
}
