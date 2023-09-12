import { connectionString } from "@/app/lib/db"
import MeetupData from "@/app/lib/model/meetupdetails";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function POST(request){
    try {
        const payload = await request.json()
    await mongoose.connect(connectionString)
    let MeetupDetails =new MeetupData(payload)
    // let MeetupDetails = new MeetupData({
    //     name : "redmi 8",
    //     category: "mobile",
    //     color: "white",
    //     company: "MI",
    //     price: "6466",
    // });
    
    const result = await MeetupDetails.save()
    return NextResponse.json({result, success:true})
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success:false})
    }
    
}