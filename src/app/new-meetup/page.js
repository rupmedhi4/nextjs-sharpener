import style from '@/app/components/Style/meetup.module.css'
import MeetupBtn from '@/app/components/MeetupBtn'

export default function page() {
    return (
        <>
        <div className={style.main_div}>
            <form className={style.inputGroup}>
                <div >
                    <label htmlFor="meetupTitle">Meetup Title:</label>
                    <input type="text" id="meetupTitle" placeholder="Enter meetup title" />
                </div>

                <div>
                    <label htmlFor="meetupImage">Meetup Image:</label>
                    <input type="text" id="meetupImage" placeholder="Enter meetup image URL" />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" placeholder="Enter address" />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input className={style.description} type="text" id="description" placeholder="Enter meetup description" />
                </div>
            </form>
            <MeetupBtn/>

        </div>
            
        </>
    )
}
