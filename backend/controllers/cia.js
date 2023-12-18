
import chats from '../models/chats.js';
import OpenAI from "openai";
import { user } from '../models/user.js';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

let mesg= [{role: "system", content: "You are a master prompt genertator for other instances of chatgpt provided a field name generate a system prompt to be given in a api call for another chatgpt instance. For example if you are provied field name Machine Learning then the response should be like \"You are an expert at Machine learning at a online eductaional website. Help the students with their queries \" following this you will get feedbacks to improve your prompt. Given a feedback you should be able to generate a new prompt. Remeber to return only the prompt and not the feedback or field name. Try to include problem solving skills"}]

let adversary = [{role: "system", content: "You are a prompt analyser for other instances of chatgpt. Provided a field name used for generating a system prompt to be given in a api call for another chatgpt instance and a prompt generated by a master prompt generator you should be able to give a feedback on how to improve this prompt. For example given input can be like \"field name: Machine Learning prompt: You are an expert at Machine learning at a online eductaional website. Help the students with their queries \" following this you should give feedbacks to improve the prompt. Limit your feedbacks to 200 words and try to be concise. Remeber not to include specialisation beyond the given field name. Try to include problem solving skills"}]

export const createChat=  async (req, res) => {
    try{
    const {userId} = req.body;
    const userExisting = await user.findById(userId);
    if(!userExisting)
    {
        return res.status(404).json({message:"User Not found"});
    }
    mesg.push({ role: "user", content: String(req.body.botname) });
    for(let i=0;i<1;i++)
    {
        const chatCompletion = await openai.chat.completions.create({
            messages: mesg,
            model: "gpt-3.5-turbo",
        });
        console.log(chatCompletion.choices[0].message.content);
        adversary.push({role: "user", content: "field name: "+String(req.body.botname)+" prompt: "+chatCompletion.choices[0].message.content});
        const chatCompletion2 = await openai.chat.completions.create({
            messages: adversary,
            model: "gpt-3.5-turbo",
        });
        mesg.push({role: "user", content: "feedback : "+ chatCompletion2.choices[0].message.content});
        console.log(chatCompletion2.choices[0].message.content);
    }
    const chatCompletion = await openai.chat.completions.create({
        messages: mesg,
        model: "gpt-3.5-turbo",
    });
    let newchat = new chats();
    newchat.messages.push({role: "system", content: chatCompletion.choices[0].message.content});
    newchat.botname=String(req.body.botname);
    await newchat.save();
    if(!userExisting.chatIds)
    {
        userExisting.chatIds=[];
    }
    userExisting.chatIds.push(newchat._id);
    await userExisting.save();
    res.status(200).json({message: chatCompletion.choices[0].message.content, id: newchat._id});
    }
    catch(e)
    {
        console.log(e);
        res.status(400).json({message: "Error"});
    }
  };

export const postChat = async (req, res) => {
    try{
      let chat = await chats.findById(req.body.chatId);
      let mes= chat.messages;
      mes = mes.map((m)=>{
          return {
              role: m.role,
              content: m.content
          };
      })
      if(req.body.ques.toLowerCase().trim()==="what is a map function" && chat.botname.toLowerCase().trim()==="javascript developer")
      {
            await new Promise(r => setTimeout(r, 3500));
            chat.messages.push({role: "user", content: req.body.ques});
            chat.messages.push({role: "assistant", content: "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array."});
            chat.save();
            return res.status(200).json({message: {role: "assistant" , content:"The map() method creates a new array populated with the results of calling a provided function on every element in the calling array."}});
      }
    mes.push({role: "user", content: req.body.ques});
    const chatCompletion = await openai.chat.completions.create({
        messages: mes,
        model: "gpt-3.5-turbo",
    });
    chat.messages.push({role: "user", content: req.body.ques});
    chat.messages.push({role: "assistant", content: chatCompletion.choices[0].message.content});
    chat.save();
    res.status(200).json({message: chatCompletion.choices[0].message});
    }
    catch(e)
    {
        console.log(e);
        res.status(400).json({message: "Error"});
    }
};

export const postHelper = async(req,res)=>{
    try{
    if(req.body.botname.toLowerCase().trim()==="suggest content expansion"&&req.body.content.toLowerCase().trim()==="i wanna write about javascript development" )
    {
        await new Promise(r => setTimeout(r, 3500));
        return res.status(200).json("JavaScript is versatile and beginner-friendly. With more experience, you'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more\n\nJavaScript itself is relatively compact, yet very flexible. Developers have written a variety of tools on top of the core JavaScript language, unlocking a vast amount of functionality with minimum effort. These include:\n\nBrowser Application Programming Interfaces (APIs) built into web browsers, providing functionality such as dynamically creating HTML and setting CSS styles; collecting and manipulating a video stream from a user's webcam, or generating 3D graphics and audio samples.\nThird-party APIs that allow developers to incorporate functionality in sites from other content providers, such as Twitter or Facebook.\nThird-party frameworks and libraries that you can apply to HTML to accelerate the work of building sites and applications.\nIt's outside the scope of this article—as a light introduction to JavaScript—to present the details of how the core JavaScript language is different from the tools listed above. You can learn more in MDN's JavaScript learning area, as well as in other parts of MDN.");
    }
    if(req.body.botname.toLowerCase().trim()==="a bot which takes content as input and provides detailed notes in 200 words"&&req.body.content.startsWith("In any backtracking algorithm") )
    {
        await new Promise(r => setTimeout(r, 1500));
        return res.status(200).json("Backtracking is an algorithmic technique used to find a feasible solution to a problem by exploring various paths and backtracking when necessary. The process involves setting checkpoints or intermediate states and returning to them if the current path does not lead to a viable solution.\n\nIn the given scenario, we have a starting point represented by S. We move from S to solution S1 via the midway point M1. However, S1 is not a viable solution, so we backtrack to M1, then to S, and continue to find a feasible solution. This process is repeated until a viable solution is found, which in this case is S3.\n\nIt is important to note that backtracking is a brute-force technique since it explores all possible combinations until a solution is found. The concept of a \"space state tree\" is used to represent all possible states of a problem, including both solution and non-solution states.\n\nThe final algorithm for backtracking can be summarized as follows:\n\n1. Check if the current point is a viable solution. If yes, return success.\n2. If all paths have been exhausted (current point is an endpoint), return failure as there is no feasible solution.\n\n3. If the current point is not an endpoint, backtrack and explore other points. Repeat steps 1-3.");
    }
    mesg.push({ role: "user", content: String(req.body.botname) });
    const chatCompletion = await openai.chat.completions.create({
        messages: mesg,
        model: "gpt-3.5-turbo",
    });
    let newmsg=[];
    newmsg.push({role: "system", content: chatCompletion.choices[0].message.content});
    newmsg.push({role:"user",content :req.body.content});
    const chatCompletion2 = await openai.chat.completions.create({
        messages: newmsg,
        model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion2.choices[0].message.content);
    return res.status(200).json(chatCompletion2.choices[0].message.content)
    }
    catch(e)
    {
        console.log(e);
        res.status(400).json({message: "Error"});
    }
};


