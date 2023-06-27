const port = 3001;

app.use(express.json());

let x = null;
let y = null;

app.get('/coord', (req, res) => {
    res.json({
            x: x,
            y: y,
        });
});

app.put('/coord', (req, res) => {
    x = req.body.x;
    y = req.body.y;
    res.json({});
});

app.listen(port, () => {
    console.log('Listening on port ${port}');
})
