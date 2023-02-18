const express = require('express');
const app = express();
const Port =   3000;

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
}); 

app.use(express.json());

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    });
});

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;
    if (!logo) {
        res
        .status(418)
        .send({
            message: 'We need a logo!'
        });
    }

    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id} `,
    });
});