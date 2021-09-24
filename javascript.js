const Abc = [
    {name:"abc",password:10,id:1},
    {name:"bbc",password:20,id:2},
    {name:"ccc",password:30,id:3}
]


console.log(Abc.filter(name=>{
 
     return name.password <20;
}))


