const Question = require('../models/question');
const Option = require('../models/option');

module.exports.create = async function (req, res) {
    try {
        const existingQuestion = await Question.findOne({ title: req.body.title });
        if (existingQuestion) {
            return res.status(200).json('The question already exists');
        }
        const newQuestion = await Question.create(req.body);
        return res.status(201).send(newQuestion);
    }
    catch (err) {
        console.log(err);
    }
}

module.exports.delete = async function (req, res) {
    try {
        let question = await Question.findById(req.params.id);
        if (question) {
            await Question.deleteOne({ _id: req.params.id });
            return res.status(200).json('Question deleted successfully');
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports.showDetails = async function (req, res) {
    try {
        const question = await Question.findById(req.params.id).populate('options');
        if (question) {
            return res.send(question);
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports.createOption = async function(req, res){
    try {
        const question = await Question.findById(req.params.id);
        if(question){
            const option = await Option.create({
                text: req.body.text,
                question: req.params.id
            });
            const updateOption = await Option.findByIdAndUpdate(option._id, {"link_to_vote" : `http://localhost:8000/options/${option._id}/add_vote`});
            question.options.push(updateOption);
            question.save();
            return res.send(question);
        }
    } catch (err) {
        if(err.code === 11000){
            return res.send('The option already exists for the specified question');
        }
        console.log(err.code);
    }
}