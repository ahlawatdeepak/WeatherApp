const api="8e22c3dbb69919aab27701d1402d1d15"
// https://api.openweathermap.org/data/2.5/weather?q=rohtak&appid=8e22c3dbb69919aab27701d1402d1d15

async function getdata(){
     let city=document.getElementById("city").value;

    //  let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
     let url=`https://api.openweathermap.org/data/2.5/forecast/?q=${city}&cnt=7&appid=${api}` 
    
     let res=await  fetch(url);
     

     let data=await res.json();

     append(data.list)
    //  console.log(data.list[1].main);

 }

 function dayconverter(date){
     let today=new Date(date)
     return(today.getDay())
 }


 function append(data)
 {
    let arr=document.getElementById("box2")
        arr.innerHTML=null;
    //  isse barr bar print nhi hoga usse jge pe search kiya hua aa jayega
    data.forEach(function(data,index){

        //  console.log(data)
   
       

        const dayarr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

        let cont=document.createElement("div")
        cont.setAttribute("id","container")

         let h3=document.createElement("h3")
         let today=new Date(data.dt_txt)
        //  return(today.getDay())
         h3.textContent=dayarr[today.getDay()];

         let imgdiv=document.createElement("div")
         imgdiv.setAttribute("id","imgdiv")
         let img=document.createElement("img")
         img.setAttribute("id","img1")
         img.src="https://cdn5.vectorstock.com/i/1000x1000/05/29/thermometer-icon-or-temperature-symbol-vector-23880529.jpg"
        imgdiv.append(img)


         let p1=document.createElement("p")
         p1.textContent=`Current temp: ${Math.floor(data.main.temp-273)}`;

         let p2=document.createElement("p")
         p2.textContent=`Max temp: ${Math.floor(data.main.temp_max-273)}`;

         let p3=document.createElement("p")
         p3.textContent=`Min temp: ${Math.floor(data.main.temp_min-273)}`;

         cont.append(h3,imgdiv,p1,p2,p3);
         document.getElementById("box2").append(cont)
})

    // let iframe=document.getElementById("gmap_canvas")
    // iframe.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}
