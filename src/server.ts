import App from "./App";

const port = process.env.PORT || 8080;
App.listen(port, (err) => {
  if (err) {
    console.error(`Error starting server: ${err}`);
    process.abort();
  }
  console.log(`Server is listening on port ${port}`);
});
