const express = require('express');
const zod = require('zod');

app = express();

app.use(express.json());
port = 3000

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

app.post("/health-checkup", (req, res) => {
    const response = validate(req.body);
    console.log(response);

    if (!response.success) {
        return res.status(500).send(response.error.message);       
    } else {
        return res.status(200).json({ message: `Your Kidney is ${response.data.kidneys}` });
    }
});

app.listen(port);