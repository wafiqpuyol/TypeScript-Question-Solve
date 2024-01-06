type Football = {
    playerName:string;
    height:number;
    gersey:number;
}

type func = (playerName:string, height:number, gersey:number)=> Football;

const footballer:func= (playerName, height, gersey)=> {
    return {
        playerName,
        height,
        gersey
    }
};

type Car = {
    // model:func;
    millage:string;
}
const car:Car = {
    // model:(carModel)=> carModel.toUpperCase(),
    millage:"40hp",
}


// console.log(car.model("bugattie"));
console.log(footballer("virgil van dijk", 6.4, 69));