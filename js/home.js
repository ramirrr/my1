let user={
    id:443,
    name:"rami",
    age : 43,
    family :["mohmed","kald","jasim"]
}
console.log(user.family[0])
//مصفوفة داخل مصفوفة وطبعنة منها

function jma(d,dd){
    let ddd=dd+d;
    return ddd;
}
console.log(jma(5,15))
//الدالة

let akp=(w,ww) => {
    //طرقة اخرى لكتابة الفاكشن ويسموها ارو فاكشن
        if(w>ww){
            return w
        }
        else if(ww>w){
            return ww
        }
        else{
            return "num1=num2"
        }
}
console.log(akp(8,8))
//دالة لاظهار الرقم الاكبر

let day=(da) =>{
    switch(da){
        case 1:return"son"
        case 2:return"mon"
        case 3:return"teu"
        case 4:return"win"
        case 5:return"thi"
        case 6:return"fri"
        case 7:return"sat"
    }
}
console.log(day(7))
//طريقة اخرى واسهل لكتابة الجملة الشرطية

let lop1 =[6,7,8,4,88,4,532]
for(lu1 in lop1){
    console.log(lu1)
}
//راح يبدي يعد متغير من الصفر الى عدد المصفوفة

let lop2 =[6,7,8,4,88,4,532]
for(lu2 in lop2){
    console.log(lop2[lu2])
}
//راح يطبع قيم المصفةفة على عددها بشكل اندكسات بلتسلسل

