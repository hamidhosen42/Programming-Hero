const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://hamid42:dremcNkRteJfRam3@cluster0.1geox.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const notesCollection = client.db("notesTaker").collection("notes");

    // get api to read all notes
    //http://localhost:5000/notes
    app.get("/notes", async (req, res) => {
      const q = req.query; //query={}
      const cursor = notesCollection.find(q);
      const result = await cursor.toArray();
      res.send(result);
    });

    //! create notesTaker
    //http://localhost:5000/note
    //   body  {
    // "userName":"Hamid",
    // "textData":"hello world 2"
    // }

    app.post("/note", async (req, res) => {
      const data = req.body;
      const result = await notesCollection.insertOne(data);
      res.send(result);
    });

    // update notesTaker
    //http://localhost:5000/note/626b6aa791c5fc6083c657e8
    app.put("/note/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };

      //   const updateDoc = {
      //     $set: req.body,
      //   };

      const updateDoc = {
        $set: {
          userName: data.userName,
          textData: data.textData,
        },
      };

      const result = await notesCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    // delete note
    //http://localhost:5000/note/626b6aa791c5fc6083c657e8
    app.delete("/note/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: ObjectId(id) };
      const result = await notesCollection.deleteOne(filter);
      res.send(result);
    });

    console.log("connected to db");
  } finally {
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello Hamid Hosen");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
