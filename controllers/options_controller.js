const Question = require('../models/question');
const Option = require('../models/option');

module.exports.delete = async function (req, res) {
    try {
        let option = await Option.findById(req.params.id);
        if (option) {
            const quesId = option.question;
            // finding the question to which the option is deleted and removing that option from its options array
            const ques = await Question.findByIdAndUpdate(quesId, { $pull: { options: req.params.id } });
            await Option.deleteOne({ _id: req.params.id });
            return res.status(200).json('Option deleted successfully');
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports.addVote = async function (req, res) {
    try {
        // this the increment query in which the vote is incremented by one 
        const opt = await Option.findByIdAndUpdate(req.params.id, { $inc: { votes: 1 } }, {new: true});
        if (opt) {
            await opt.save();
            res.send(opt);
        }
    } catch (err) {
        console.log(err);
    }
}