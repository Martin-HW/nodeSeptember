const Part = require("../models/part");

const partsGet = (req, res) => {
  Part.find({})
    .then((parts) => {
      res.status(200).json({ parts });
    })
    .catch((err) => {
      res.staus(404).json({ err });
    });
};

const partsPost = (req, res) => {
  const { color, name, description } = req.body;
  const part = new Part({ color, name, description });
  console.log(part, "parttt");
  part
    .save()
    .then(({ _id, color, name, description }) => {
      res.status(201).json({ _id, color, name, description });
    })
    .catch((err) => {
      res.status(400).json({ err: "my badddd" });
    });
};

const partsPut = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["__v", "_id", "color", "name", "description"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    res.status(400).json({ err: "the data doesn't match at all" });
  }
  try {
    const part = await Part.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.json({ part });
  } catch (e) {
    res.status(404).send(e);
  }
};

const partsDelete = async (req, res) => {
  try {
    const part = await Part.findByIdAndDelete(req.params.id);
    if (!part) {
      return res.status(404).json({ err: "Part not found" });
    }
    res.json({ part });
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports = {
  partsGet,
  partsPost,
  partsPut,
  partsDelete,
};
