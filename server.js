const express = require('express');
const path = require('path');

const port = process.env.PORT ?? 3000;
const app = express();
const dirnameProject = path.resolve();

app.use(express.static(path.resolve(dirnameProject, 'public')));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});