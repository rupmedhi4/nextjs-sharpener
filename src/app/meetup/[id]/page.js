import style from '@/app/components/style/style.css'
import Image from 'next/image';

export default function page({ params }) {
    let arr = [
        { id: 1, title: 'A First MeetUp', description: 'First place in Assam', img: 'meetup1.jpg' },
        { id: 2, title: 'A Second MeetUp', description: 'Second place in Assam', img: 'meetup1.jpg' },
        { id: 3, title: 'A Third MeetUp', description: 'Third place in Assam', img: 'meetup1.jpg' },
        { id: 4, title: 'A 4th MeetUp', description: 'Third place in Assam', img:'meetup4.jpg' },

    ];

    const meetup_place = arr.find((place) =>  parseInt(params.id) === place.id)
    return (
        <div>
            {
                meetup_place ? <>
                    <div className="meetup_item">
                        <Image src={`/${meetup_place.img}`} alt="meetup image" height={300} width={400} />
                        <div className="description">
                            <h5>{meetup_place.title}</h5>
                            <p>{meetup_place.description}</p>
                        </div>
                    </div>
                </>: <span>Something went wrong</span>
       }

        </div>
    )
}
