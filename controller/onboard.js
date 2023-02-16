const User = require("../models/user");

const onboard = async (req, res) => {
  try {
    const { name, email, destination, noOfTravellers, budget } = req.body;

    const createNew = await User.create({
      name,
      email,
      destination,
      passengers: Number(noOfTravellers),
      budget_per_person: Number(budget),
    });
    console.log("createNew: ", createNew);

    res.status(200).json({ msg: "success" });
  } catch (err) {
    console.log("err: ", err);
    res.status(500).send();
  }
};

const onboardGet = async (req, res) => {
  try {
    const submissions = await User.find();
    if (!submissions) res.status(404).json({ data: [] });

    res.status(200).json({
      msg: "Success",
      data: submissions,
    });
  } catch (err) {
    res.status(500).send();
  }
};

module.exports = { onboard, onboardGet };
