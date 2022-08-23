/*let number = 122;
let result=Math.sqrt(number)+1
console.log(Math.floor(result));*/
//.......................
// این جواب فقط برای اعدادی درست است که جذر کامل داشته باشند
/*function squareroot(number) {
    var number;
    for (var i = number; i >= 1; i--) {
        if (i * i <= number) {
            number = i+1;
            break;
       }
   }
   return number;
}

 console.log(squareroot(141));*/
//.................................

/*function bakhshPaziri(number) {
    let result=0;
    for (let i = 0; i < number; i++) {
        if (number%i===0) {
            result=i+result
        }
        
    }
    console.log(result);
}
bakhshPaziri(10);
*/





//.........................
/*function Right_Triangle(number_1, number_2, number_3) {
  if (
    number_1 ** 2 === number_2 ** 2 + number_3 ** 2 ||
    number_2 ** 2 === number_3 ** 2 + number_1 ** 2 ||
    number_3 ** 2 === number_2 ** 2 + number_1 ** 2
  ) 
  {
    console.log("yes!");;
  }
  else
  console.log("No!");
}
Right_Triangle(5,3,4);
*/
/*const person ={ }
const Person_Information= function (key, value) {
    person[key]=value;
}
Person_Information("first_name","saeed")
Person_Information("last_name", "mohammadi")
Person_Information("age","21")
Person_Information("phone_number","09125887878")
Person_Information("email","soheil.saedi1379@gmail.com")
console.log(person);
*/
/*function BMI(weight, height) {
  let check_bmi = weight / (height * height);
  if (check_bmi >= 30) {
    console.log(`obese + ${check_bmi}`);
  } else if (check_bmi < 30 && check_bmi >= 25)
    console.log(`overweight  => ${check_bmi}`);
  else if (check_bmi < 25 && check_bmi >= 18.5)
    console.log(`normal  => ${check_bmi}`);
  else console.log(`underweight  => ${check_bmi}`);
}
BMI(80, 1.91);
*/
/*function NomreDehi(grade, rooz_safar) {
  if (rooz_safar === 0) {
    grade = 20;
    console.log(`${grade}`);
  } else if (rooz_safar === 7) {
    console.log(`${grade}`);
  } else {
    grade=grade-rooz_safar;
    if(grade<0){
        grade=0;
    }
    console.log(grade);
  }
}
NomreDehi(20, 7);
*/










