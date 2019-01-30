const router = require('express').Router();

const users = [];

for (let i = 0; i <= 20; i++) {
    users.push({
        id: i,
        name: `Gigel ${i}`,
        password: `secret${i}`
    });
}

router.get('/:id', (req, res) => {
    const user = users.find((user) => {
        return user.id === parseInt(req.params.id);
    });
    if (user) {
        res.json(user);
    } else {
        res.status(404);
    }
    res.json();
});

router.post('/', (req, res) => {
    users.push(req.body);
    res.status(200).json(users);
});

module.exports = router;