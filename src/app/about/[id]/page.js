'use client'
export default function page({ params }) {
    const details = [
        { id: 1, name: 'Yash', role: 'Senior Developer' },
        { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
        { id: 3, name: 'Suresh', role: 'Frontend Developer' }
    ]
 
    const devloper = details.find((data)=>data.id === parseInt(params.id))
    return (
        <>
            {
               devloper ? (
                <>
                <h1>name : {devloper.name}</h1>
                <h3>role : {devloper.role}</h3>
                </>
               ): <span>Developer doesn't exist</span>
            }
        </>
    )
}
