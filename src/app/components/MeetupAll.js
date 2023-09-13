import React from 'react'
import Image from 'next/image'
import styles from '@/app/components/Style/MeetupAll.module.css'
import Link from 'next/link'

export default async function MeetupAll() {

    const showMeetup = async () => {
            let response = await fetch("http://localhost:3000/api/addmeetup", {cache:"no-cache"})
            response = await response.json();
            console.log(response);
            if (response.success) {
                console.log("ok" + response.result);
                return response.result
            } else {
                console.log("not ok" + response);
                return response.success
            }

    }

    const data = await showMeetup()

    return (
        <>
            {
                data.map((meetup) => (
                    <div className={styles.cardContainer} key={meetup._id}>

                        <div className={styles.imageContainer}>
                            <img src={meetup.imageUrl} width={300} height={200} className={styles.img} />
                        </div>

                        <div className={styles.mainContainer}>
                            <h5>{meetup.title}</h5>
                            <p>
                                {meetup.description}
                            </p>
                        </div>

                        <Link href={`/allmeetups/${meetup._id}`} className={styles.meetupBtn}>Show Details</Link>

                    </div>
                ))
            }

        </>
    )
}
