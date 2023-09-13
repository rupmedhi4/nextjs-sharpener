import { connectionString } from "@/app/lib/db"
import MeetupData from "@/app/lib/model/meetupdetails"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function GET(request, content) {

    const productId = content.params.meetup_id
    const record = { _id: productId }
    await mongoose.connect(connectionString)
    const result = await MeetupData.findById(record)
    return NextResponse.json({ result, success: true })

}