const express = require('express');
const zod = require('zod');
const app = express();
port = 3000

app.use(express.json());
// const anything = zod.literals("1").or(zod.literal("2"));
 const anything = zod.array(zod.number());



app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    // const kidneyLength = kidneys.length;
    const response = anything.safeParse(kidneys);

    // res.send("your kidney length is " + kidneyLength);
    if(!response.success) {
        res.status(411).json({
            msg: " input is invalid"
        })
    }
    else{ 
        const length = kidneys.length;
        const responseData = {
            response: response.data,
            length: length
        };
        res.status(200).send({responseData});
    }
    


});

app.use((error, req, res, next) => {
    res.status(500).send(error.message
    )
})

app.listen(port);