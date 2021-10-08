




type persona={ 
    nombre:String, 
    edad:number,
    pareja?:persona //puede o no tener dicho atributo
} 


const personaX:persona={ 
    nombre:"JUAN", 
    edad:220, 
    
} 


const persona1:persona={ 
    nombre:"Maria", 
    edad:20, 
    pareja:personaX,
} 
const a={
    a:"Hola",
    b:"adios",
    c:[1,2,3],
    d:{
        f: 3,
        c:{
            j:[{a:1,b:2},3,{c:1,a:2}]
        }
    }
}
//JSON.stringify(objeto)
const printDeep=(person:any):string=>{
    let caso:number=0;
    let str:string="";


    if((typeof person) === "object"){ caso=1; str+="{";}
    if(Array.isArray(person)){ caso=2; str+="[";}

    if(caso === 0){
            //console.log(person);
            return person;
        }else{
            Object.keys(person).forEach( (k:string)=>{
                //console.log("\""+ k +"\""+":");
                str+="\""+ k +"\""+":";
                if(Array.isArray((person as any)[k])){
                    //console.log("[");
                    str+="[";
                    person[k].forEach((o:Object)=> str+=printDeep(o)+",")
                    //console.log("]");
                    str=str.substr(0,str.length-1);//eliminamos ultima coma del array
                    str+="],";
                    

                }
                else if((typeof(person as any)[k]) === "object"){

                    str+=printDeep((person as any)[k]);

                }else if((typeof(person as any)[k])==="string"){
                    
                    str+="\""+((person as any)[k])+"\""+",";

                }else{
                    //console.log((person as any)[k]);
                    str+=((person as any)[k])+",";

                    //console.log((`${k}:${(person as any)[k]}`));
                }
            
            })
        }

        if(caso === 1){

            if(str.charAt(str.length-1) ===","){str = str.substring(0,str.length-1);}
            str+="}";
        }
        else if(caso === 2){if(str.charAt(str.length-1) ===","){str = str.substring(0,str.length-1);}
            str+="]";
        }
    


    
    return str;
}
let solu:string=printDeep(a);
console.log(solu);
console.log(JSON.stringify(a));


if(printDeep(a) == JSON.stringify(a)) console.log("Ejercicio 1 funciona");
