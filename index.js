const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const QuestionModel = require('./model/Questions')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://iberidze38:Sandro2013@cluster0.26xy4yz.mongodb.net/test')

app.get('/getQuestions', (req, res) => {
    QuestionModel.find()
    .then(questions => res.json(questions.at(0).questions))
    .catch(err => res.json(err))
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`ვუსმენ ${PORT} პორტს`)
})
