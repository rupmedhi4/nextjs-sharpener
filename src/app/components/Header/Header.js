import style from '@/app/components/Style/Header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <div className={style.main_container} >
                <h1>React Meetups</h1>
                <div className={style.main_container_link}>
                    <Link href="/meetups" className={style.link}>
                        <span>All Meetups</span>
                    </Link>
                    <Link href="/new-meetup" className={style.link}>
                        <span>Add New Meetup</span>
                    </Link>
                </div>
            </div>
        </>
    )
}
