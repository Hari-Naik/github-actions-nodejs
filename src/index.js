const app = require("./app");
const port = 8001;

app.listen(port, () => {
  console.log(`server running at port:${port}`);
});
