import { useParams } from 'react-router-dom'

export function User(params) {
    const {id} = useParams()
    return (<>This is User component:{id}</>)
}