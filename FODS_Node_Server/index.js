/* 
FODS Node.js Server - ENEL 500 - Written by: Patrick Robert Willmann

Group Members: Nooreldeen Abdallah, Peter Boonstra, Shelby Herle, Nikhil Naikar, Patrick Willmann

This server is required to connect to the AWS database and handles all associated mySQL database GET/PUT requests.

To test the database update function, use curl in a terminal once the server is running and mess with this command as needed: 

curl -i -X PUT -H 'Accept: application/json' \
    -H 'Content-type: application/json' http://localhost:3000/FODS_Node_Server/4 \
    --data '{"EpName":"TractorPTO", "CriticalTemp": 60, "WarningTemp": 50}' 

Note that the number after 'FODS_Node_Server/' in the URL refers to the sensor ID to update. The rest should be pretty self-explanatory.

To test the getSingle function, use the following curl command in a terminal once the server is running:

curl -i -X GET -H 'Accept: application/json' \
    -H 'Content-type: application/json' http://localhost:3000/FODS_Node_Server/1 \

This example will retrieve the full row of data associated with ID=1
*/

const express = require("Express");
const app = express();
const port = 3000;
const sensorsRouter = require('./Routes/sensors');

// sensorsRouter.connect();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Connected to client" });
});

app.use('/FODS_Node_Server', sensorsRouter)

app.use((err,req,res,next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({message: err.message});
  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


