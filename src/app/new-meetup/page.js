'use client'
import style from '@/app/components/Style/meetup.module.css'
import { useState } from 'react'

export default function page() {

    const [title, setTitle] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [address, setAddress] = useState("")
    const [description, setDescription] = useState("")

    const addData = async ()=>{
        let response = await fetch("http://localhost:3001/api/addmeetup",{
            method:"POST",
            body:JSON.stringify({title, imageUrl,address,description})
        })

        response = await response.json()

        if(response.success){
            alert("meetup add successfully")
        }else{
            alert("Oops something went wrong")
        }
    }

    return (
        <>
        <div className={style.main_div}>
            <form className={style.inputGroup}>
                <div >
                    <label htmlFor="meetupTitle">Meetup Title:</label>
                    <input onChange={(e)=>setTitle(e.target.value)} type="text" id="meetupTitle" placeholder="Enter meetup title" />
                </div>

                <div>
                    <label htmlFor="meetupImage">Meetup Image:</label>
                    <input onChange={(e)=>setImageUrl(e.target.value)} type="text" id="meetupImage" placeholder="Enter meetup image URL" />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input onChange={(e)=>setAddress(e.target.value)} type="text" id="address" placeholder="Enter address" />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input onChange={(e)=>setDescription(e.target.value)} className={style.description} type="text" id="description" placeholder="Enter meetup description" />
                </div>
            </form>
           <button onClick={addData} className={style.meetupBtn}>Add Meetup</button>

        </div>
            
        </>
    )
}
