/**
 * Created by Mattily on 3/19/2016.
 */
import express from 'express';
let app = express();

app.use(express.static('src'));

app.listen(3000);