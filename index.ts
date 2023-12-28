import app from "./src/App";
import connectDB from "./src/db/mongodb";

const port = 3000;

connectDB();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
