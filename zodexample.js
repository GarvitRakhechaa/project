const zod = require('zod');

validate = (obj) => {
    const Value = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8),
        name: zod.string().min(3),
        age: zod.number().min(18),
        gender: zod.string().min(1),
        kidneys: zod.array(zod.number().min(1))
    })

    const result = Value.safeParse(obj);
    console.log(result);
}
 
validate({
    email: "garvitrakhecha786@gmail.com", 
    password: "GarvitRajhehca", 
    name: "Rafha", 
    age: 20, 
    gender: "male", 
    kidneys: [2]
})

