require('dotenv').config();
const {bubblesort,
    linearsearch,
    queue,
    quicksort,
    linkedlist,
    selectionsort,
    insertionsort,
    mergesort,
    binarysearch,
    factorial,
    fibonacci,
    stack,} = require('./codes');
const axios = require("axios");
const {Telegraf} = require("telegraf");
const fs = require('fs');


const bot = new Telegraf(process.env.TELE_ID);

bot.start((context)=>context.reply("Hello, I'm a Coding Bot, how can i help you ?"));

bot.command("hello",(context)=>context.reply("hello and welcome to my coding bot here you will find some LeetCode DSA Codes"));

bot.command("arrayconcat",async function(context){
    const response = await axios.get("https://raw.githubusercontent.com/IAmShaaann/DSA-Codes/amazonalgoprep/Leetcode/Easy/ArrayConcat.cpp");
    // console.log(response.data);
    return context.reply(response.data);
})


bot.command("mergesortedarray",async function(context){
    const response = await axios.get("https://raw.githubusercontent.com/IAmShaaann/DSA-Codes/amazonalgoprep/Leetcode/Easy/MergeSortedArray.cpp");
    console.log(response.data);
    return context.reply(response.data);
})


bot.command("arrayfrompermutations",async function(context){
    const response = await axios.get("https://raw.githubusercontent.com/IAmShaaann/DSA-Codes/refs/heads/amazonalgoprep/Leetcode/Easy/ArrayFromPermutations.cpp")
    console.log(response.data);
    return context.reply(response.data);
})

bot.command("BestTimeToBuyAndSellStocks",async function(context){
    const response = await axios.get("https://raw.githubusercontent.com/IAmShaaann/DSA-Codes/refs/heads/amazonalgoprep/Leetcode/Easy/BestTimeToBuyAndSellStocks.cpp")
    console.log(response.data);
    return context.reply(response.data);
})

bot.command("GoodPairs",async function(context){
    const response = await axios.get("https://raw.githubusercontent.com/IAmShaaann/DSA-Codes/refs/heads/amazonalgoprep/Leetcode/Easy/GoodPairs.cpp")
    console.log(response.data);
    return context.reply(response.data);
})

bot.command("GreatestCandies",async function(context){
    const response = await axios.get("https://raw.githubusercontent.com/IAmShaaann/DSA-Codes/refs/heads/amazonalgoprep/Leetcode/Easy/GreatestCandies.cpp")
    console.log(response.data);
    return context.reply(response.data);
})

bot.command("HighestAltitude",async function(context){
    const response = await axios.get("https://raw.githubusercontent.com/IAmShaaann/DSA-Codes/refs/heads/amazonalgoprep/Leetcode/Easy/HighestAltitude.cpp")
    console.log(response.data);
    return context.reply(response.data);
});

bot.command("MajorityElement",async function(context){
    const response = await axios.get("https://raw.githubusercontent.com/IAmShaaann/DSA-Codes/refs/heads/amazonalgoprep/Leetcode/Easy/MajorityElement.cpp")
    console.log(response.data);
    return context.reply(response.data);
});

bot.command("MiddleIndexInArray",async function(context){
    const response = await axios.get("https://raw.githubusercontent.com/IAmShaaann/DSA-Codes/refs/heads/amazonalgoprep/Leetcode/Easy/MiddleIndexInArray.cpp")
    console.log(response.data);
    return context.reply(response.data);
});

bot.command("MoveZero",async function(context){
    const response = await axios.get("https://raw.githubusercontent.com/IAmShaaann/DSA-Codes/refs/heads/amazonalgoprep/Leetcode/Easy/MoveZero.cpp")
    console.log(response.data);
    return context.reply(response.data);
});

bot.command("bubblesort",async function(context){
    // const response = await axios.get("")
    const response = bubblesort
    console.log(response);
    return context.reply(response);
});

bot.command("linkedlist",async function(context){
    const response = linkedlist;
    console.log(response);
    return context.reply(response);
});

bot.command("mergesort",async function(context){
    const response = mergesort
    console.log(response);
    return context.reply(response);
});

bot.command("linearsearch",async function(context){
    const response = linearsearch
    console.log(response);
    return context.reply(response);
});

bot.command("queue",async function(context){
    const response = queue 
    console.log(response);
    return context.reply(response);
});

bot.command("quicksort",async function(context){
    const response = quicksort
    console.log(response);
    return context.reply(response);
});

bot.command("selectionsort",async function(context){
    const response = selectionsort
    console.log(response);
    return context.reply(response);
});

bot.command("insertionsort",async function(context){
    const response = insertionsort
    console.log(response);
    return context.reply(response);
});

bot.command("binarysearch",async function(context){
    const response = binarysearch
    console.log(response);
    return context.reply(response);
});

bot.command("factorial",async function(context){
    const response = factorial
    console.log(response);
    return context.reply(response);
});

bot.command("fibonacci",async function(context){
    const response = fibonacci
    console.log(response);
    return context.reply(response);
});

bot.command("stack",async function(context){
    const response = stack 
    console.log(response);
    return context.reply(response);
});


bot.on("sticker",(context)=>context.reply('❤️'))

bot.launch(console.log("Bot Is Online"))
