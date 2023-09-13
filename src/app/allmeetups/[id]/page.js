'use client'
import { useState, useEffect } from "react"
import styles from '@/app/components/Style/MeetupAll.module.css'

export default function page({ params }) {

    const [singleData, setSingleData] = useState('')

    useEffect(() => {
        const fetchData = async () => {
          try {
            let response = await fetch(`http://localhost:3000/api/addmeetup/${params.id}`);
            response = await response.json();
            setSingleData(response.result);
          } catch (error) {
            alert(error);
          }
        };
    
        fetchData();
      }, [params.id]);


    return (
        <>
                    <div className={styles.cardContainer} key={singleData._id}>

                        <div className={styles.imageContainer}>
                            <img src={singleData.imageUrl} width={300} height={200} className={styles.img} />
                        </div>

                        <div className={styles.mainContainer}>
                            <h5>{singleData.title}</h5>
                            <p>
                                {singleData.description}
                            </p>
                        </div>


                    </div>
        </>
    )
}
