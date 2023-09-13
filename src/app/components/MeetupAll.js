import React from 'react'
import Image from 'next/image'
import styles from '@/app/components/Style/MeetupAll.module.css'

export default async function MeetupAll() {

    const showMeetup = async () => {
        let response = await fetch("http://localhost:3001/api/addmeetup", { cache: "no-cache" })
        response = await response.json()
        if (response.success) {
            return response.result
        } else {
            return response.success
        }
    }
    const data = await showMeetup()

    return (
        <>
            {
                data.map((meetup) => (
                    <div className={styles.cardContainer}>

                        <div className={styles.imageContainer}>
                            <img src={meetup.imageUrl} width={300} height={200} className={styles.img} />
                        </div>

                        <div className={styles.mainContainer}>
                            <h5>{meetup.title}</h5>
                            <p>
                                {meetup.description}
                            </p>
                        </div>

                    </div>
                ))
            }

        </>
    )
}
