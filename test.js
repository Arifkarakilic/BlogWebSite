const mongoose = require('mongoose')

const Post = require('./models/post')

 mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db')

Post.create({
    title: 'Deneme Basligi',
    content: 'lorem ipsum dolor sit amet'
}, (error,post)=>{
    console.log(error,post);
})
Post.find({}, (error,post)=>{
    console.log(error,post)

})
Post.findById('q8efw947q68dqwd',(error,post)=>{
    console.log(error,post)
})