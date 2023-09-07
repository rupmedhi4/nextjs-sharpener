import Image from "next/image"
import Link from "next/link"
import style from '@/app/components/style/style.css'

export default function page() {
    let arr = [
        { id: 1, title: 'A 1st MeetUp one horned rhinos', description: 'First place in Assam', img: 'meetup1.jpg' },
        { id: 2, title: 'A 2nd MeetUp', description: 'Second place in Assam', img: 'meetup2.jpg' },
        { id: 3, title: 'A 3rd MeetUp', description: 'Third place in Assam', img:'meetup3.jpg' },
        { id: 4, title: 'A 4th MeetUp', description: 'Third place in Assam', img:'meetup4.jpg' },
    ];

    return (
        <div className="main_div">
            {arr.map((place) => (
                <div key={place.id} className="meetup_item">
                    <Image src={`/${place.img}`} alt="meetup image" height={300} width={400} />
                    <div className="description">
                        <h5>{place.title}</h5>
                        <p>{place.description}</p>
                        <Link href={`/meetup/${place.id}`}>
                            <button>Show Details</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
