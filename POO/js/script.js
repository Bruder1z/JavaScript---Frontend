// //1-métodos
// const animal = {
//     nome: "bob",
//     latir:function(){
//     console.log("au au");
//     }
// };

// console.log(animal.nome);
// animal.latir();

// //2 aprofundando em métodos
// const pessoa = {
//     nome:"manu",

//     getNome: function(){
//         return this.nome;
//     },
//     setNome: function(novoNome){
//         this.nome = novoNome;
//     },
// };

// console.log(pessoa.nome);
// console.log(pessoa.getNome());

// pessoa.setNome("lucas");
// console.log(pessoa.getNome());

// //3 prototypes
// const text = "asd"

// console.log(Object.getPrototypeOf(text));
// const bool =true;
// console.log(Object.getPrototypeOf(bool));
// const arr = []
// console.log(arr.length);
// console.log(Object.getPrototypeOf(arr));

// //4 mais sobre prototype
// const myObject = {
//     a: "b"
// };

// console.log(Object.getPrototypeOf(myObject));
// console.log(Object.getPrototypeOf(myObject) === Object.prototype);

// const mySecondObject = Object.create(myObject)

// console.log(mySecondObject);

// console.log(mySecondObject.a);

// console.log(Object.getPrototypeOf(mySecondObject)=== myObject);

// //5 classes básicas
// const cachorro = {
//     raca: null,
//     patas:4
// };

// const pastorAlemao = Object.create(cachorro);

// pastorAlemao.raca = "pastor alemão";

// console.log(pastorAlemao);

// console.log(pastorAlemao.patas);

// const bulldog = Object.create(cachorro);
// bulldog.raca = "bulldog";
// console.log(bulldog);

// //6 função com classe - função construtora
// function criarCachorro(nome, raca){
//     const cachorro = Object.create({})
    
//     cachorro.nome = nome;
//     cachorro.raca = raca;

//     return cachorro;
// }
// const bob = criarCachorro("bob","lulu" );
// console.log(bob);

// const jack = criarCachorro("jack", "golden");
// console.log(jack);
// console.log(Object.getPrototypeOf(jack));

// //7 funcoes como classe
// function Cachorro(nome, raca){
//     this.nome = nome;
//     this.raca = raca;
// }

// const husky = new Cachorro("leia", "husky");
// console.log(husky);

// //8 metodos na funcao construtora
// Cachorro.prototype.uivar = function(){
//     console.log("auuuuuuu!");
// }

// console.log(cachorro.prototype);
// husky.uivar();

// //9 classes ES6
// class CachorroClasse {
//     constructor(nome, raca)
// {
//     this.nome = nome;
//     this.raca = raca;
// }
// }
// const jeff = new CachorroClasse("jeff", "labrador");
// console.log(jeff);
// // console.log(Object.setPrototypeOf(jeff));

// //10 mais sobre classes
// class Caminhao{
//     constructor(eixos, cor){
//         this.eixos = eixos;
//         this.cor = cor;
//     }
//     descreverCaminhao(){
//         console.log(`este caminhao tem ${this.eixos} eixos e é da cor ${this.cor}`);
//     }
// }
// const scania = new Caminhao (6, "red");
// console.log(scania);

// scania.descreverCaminhao();

// Caminhao.motor = 4;
// const c2 = new Caminhao(4, "black");
// console.log(c2);
// Caminhao.prototype.motor = 4.0;
// const c3 = new Caminhao(6, "blue");
// console.log(c3.motor);

// //override
// class Humano{
//     constructor(nome, idade){
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const matheus = new Humano("matheus",31);
// console.log(matheus);

// Humano.prototype.idade = "não definida";
// console.log(matheus.idade);
// console.log(Humano.prototype.idade);

//symbol
class Aviao  {
    constructor(marca, turbinas){
        this.marca = marca;
        this.turbinas =turbinas;
    }
}
const asas = Symbol()
const pilotos =Symbol()
Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos]=3;
const boeing = new Aviao("boeing", 10);
console.log(boeing);

console.log(boeing[asas]);
console.log(boeing[pilotos]);

//getter e setter
class Post {
    constructor(titulo, descrição, tags){
        this.titulo = titulo;
        this.descrição = descrição;
        this.tags = tags;
    }
    get exibirTitulo(){
        return `você esta lendo: ${this.titulo}`;
    }
    set adcionarTags(tags){
        const tagsArrays = tags.split(", ");
        this.tags = tagsArrays;
    }
}

const myPost = new Post("algum post","é um post sobre programação" );
console.log(myPost);
console.log(myPost.exibirTitulo);

myPost.adcionarTags = "programacao, js";
console.log(myPost);

//herança
class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}
class Lobo extends Mamifero {
    constructor (patas, nome){
        super(patas, patas);
        this.nome = nome;
    }
}

const shark = new Lobo(4, "shark");
console.log(shark);
console.log(shark.patas);

//instanceOf
console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, "teste") instanceof Mamifero);
console.log(new Post("a", "b")instanceof Lobo);
