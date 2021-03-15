const expreses = require('express');
const app = express();
const PORT = 3000;
app.use(express.static(path.resolve(__dirname, '../client')));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});