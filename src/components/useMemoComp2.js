export function Movie ({ title, releaseDate }) {
    return (
        <div>
            <div>Title : { title }</div>
            <div>Release Date :{ releaseDate }</div>
        </div>
    )
}

export const memoMovie = React.memo(<Movie></Movie>)