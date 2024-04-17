const express = require('express');
const app = express();
port = 3000


userMiddleware = (req, res, next) => {
    const username = req.headers.username;
    const password = req.headers.password;
    if (username != "Garvit" && password != "pass") {
        res.status(403).json({ message: "User doesnt exist" }
        );
    }
    else {
        res.status(200).json({ message: "User exists" });
        next();
    }
}
KidneyMiddleware = (req, res, next) => {
    const KidneyId = req.query.KidneyId;
    if (KidneyId != 1 && KidneyId != 2) {
        res.status(403).json({ message: "Invalid Kidney Id" }
        );
    }
    else {
        res.status(200).json({ message: `YOur Kidney is ${KidneyId}` });
        next();
    }
};
app.get('/health-checkup', userMiddleware, KidneyMiddleware, (req, res) => {
    const KidneyId = req.query.KidneyId;
    const username = req.headers.username
    const password = req.headers.password;


    // Dimb way 
    
    // if (usename === "Garvit" && password === "pass") {
    //     if (KidneyId == 1 || KidneyId == 2) {
    //         res.status(200).json({ message: "User exists" }
    //         );
    //     }
    //     else {
    //         res.status(403).json({ message: "User doesnt exist" }
    //         );
    //     }
    // }
    // else {
    //     res.status(403).json({ message: "User doesnt exist" }
    //     );
    // }

    // if (usename != "Garvit" && password != "pass") {
    //     res.status(403).json({ message: "User doesnt exist" }
    //     );
    //     return;
    // }
    // if (KidneyId != 1 && KidneyId != 2) {
    //     res.status(403).json({ message: "Invalid Kidney Id" }
    //     );
    //     return;
    // }
    // else{
    //     res.status(200).json({ message: "User exists" }
    //     );
    // }

    // smart way using middleware



    res.send("Your heart is healthy!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

 