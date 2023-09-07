import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import {Configuration, OpenAIApi } from "openai";
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";


// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// export async function POST(
//     req: Request
// )
// {
//     try {
//         const {userId} = auth();
//         const body = await req.json();
//         const {messages} = body;

//         if (!userId) {
//             return new NextResponse("Unauthorized", {status:401});

//         }
//         if (!configuration.apiKey){
//             return new NextResponse("OpenAI API Key not configured", {status:500});
//         }
//         if (!messages) {
//             return new NextResponse("Messages are required", {status:400});
//         }
//         const freeTrail = await checkApiLimit();

//         // For all the services or products on the platform, always check for the free trail expiry and raise the 403,
//         // catch same in the page.tsx and throw the upgrade modal to the user.

//         if (!freeTrail){
//             return new NextResponse("Free trial has expired.", {
//                 status: 403
//             });
//         }

//         const response = await openai.createChatCompletion({
//             model: "gpt-3.5-turbo",
//             messages
//         });

//         await increaseApiLimit();

//         return NextResponse.json(response.data.choices[0].message);


//     } catch(error) {
//         console.log("[CONVERSATION-ERROR]", error);
//         return new NextResponse("Internal error", {status:500});
//     }
// };

export async function POST(req: Request) {
    try {
        const {userId} = auth();
        const body = await req.json();
        const {messages} = body;

        if (!userId) {
            return new NextResponse("Unauthorized", {status:401});
        }

        if (!messages) {
            return new NextResponse("Messages are required", {status:400});
        }

        const data = { 
            "input" : messages
        }

        const response = await fetch(
            "https://zoblcaiblb3ytejq.us-east-1.aws.endpoints.huggingface.cloud",
            {
                headers: { 
                    "Authorization": "Bearer beWfmXYcVFydybDRLYAQZJMQIowfVHlpjVMubaElFEWoWQXDZLtNfXxvPBlEnSEEwVkoyZPqAwFQNreNeidsjRKOaQccleJbyLPZvVFhWgURJBcOJAZeXudRpVxLhpFe", 
                    "Content-Type": "application/json" 
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const results = await response.json();
        return NextResponse.json(results.generated_text);

    } catch (error) {
        console.log("[CONVERSATION-ERROR]", error);
        return new NextResponse("Internal error", {status:500});
    }
}