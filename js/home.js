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

let asma =["mrda","amgd","jafer","wail"]
asma.forEach(n => console.log(n))
//هذي دالة جاهزة تطبع كل المصفوفة
let kreta=asma.map(n => "<li>"+n+"</li>")
//console.log(kreta)
//هذي الدالة الجاهزة وضيفتها تحشر الشي وصط اشياء
for(lu2 in kreta){
    console.log(kreta[lu2])
}
//طباعة القائمة المعدلة

let mwthfen=[
    {name:"hanza",age:32,selary:300},
    {name:"aya",age:62,selary:3000},
    {name:"nor",age:12,selary:700},
    {name:"zina",age:72,selary:6000},
]
let kwar=mwthfen.filter(n => n.selary <3000).map(n =>"أسم الموضف:"+ n.name)
//console.log(kwar)
//هنا خاصية الفلتر استخدمناها بلبداية سوينة قاعدة بيانات بعدي بلفلتر خلينة الشرط انو السالاري اقل من 3000
for(lu3 in kwar){
    console.log(kwar[lu3])
}
//طباعة القائمة المعدلة

class mostakdm{
    constructer(asm,amr,ident){
        this.asm=asm
        this.amr=amr
        this.ident=ident
        }
    tsgel(us,pas){
        if (us=="vd"&&pas=="123"){
            console.log("مرحبا")
        }else{
            console.log("الرمز أو كلمة المرور غلط")
        }
    }
    kroj(){
        console.log("ثيملا")
    }
}
let wrya=new mostakdm("wrya",65,4325423)
console.log(wrya.ident)
wrya.tsgel("fe","ef")
wrya.kroj()
//مثال علكلاس

class moder extends mostakdm{
    constructer(asm,amr,ident){
        this.asm=asm
        this.amr=amr
        this.ident=ident
        }
}
let omer=new moder("omer",33,8756654)
omer.kroj()
//مثال عن التوريث

let j=async()=>{
    let u=await fetch("https://my-json-server.typicode.com/typicode/demo/posts")
    //هذي دالة فيتجر جاهزة
    //الاويت تعني الانتضار وهية ضرورية لان يطول علما يجيب المعلومات من المكان الموقع الخارجي
    let pos=await u.json()
    pos.map(p => console.log("<h1>"+p.title+"</h1>"))
}
j()
//هذا درس عن الجيسون

let rsala= () =>{
    alert("السلام عليكم")
}
rsala()
//دالة الالارت تستخدم لطبع رسالة
let ll=() =>{
    document.querySelector(".one").innerHTML="computer"
    //نختار اسم الكلاس الموجود بملف الاج تي ام ال ونخلي الكلام الجديد
}
ll()

let dmg=() =>{
    let jm=document.querySelector(".five").innerHTML
    alert(jm)
}
dmg()
//دمجنة اخر دالتين بهذي الدالة

let trheb=() =>{
    let fl=document.querySelector("#js2").value
    alert("شلونك "+fl+"؟")
}
//دالة تتنفذ من ينضغط علزر ووضيفتها اظهار رسالة

let tageer=()=>{
    let fy=document.querySelector("#js4")
    document.querySelector(".six").innerHTML=fy.value
}
//دالة تبديل النص

let ano=document.querySelector("#js5")
let ab=0
let plus=()=>{
    ano.innerHTML=ab++
    //let fal=document.querySelector("#js5").value
    //document.querySelector("#js5").innerHTML=fal+1
}
let min=()=>{
    ano.innerHTML=ab--
}

