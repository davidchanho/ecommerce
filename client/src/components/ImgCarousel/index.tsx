import React from 'react'

const slides = [
    { label: 'Meet my pet', imgSrc: 'https://placeimg.com/640/480/animals', imgAlt: 'animal' },
    { label: 'Nature', imgSrc: 'https://placeimg.com/640/480/nature', imgAlt: 'nature' },
    { label: 'Tech', imgSrc: 'https://placeimg.com/640/480/tech', imgAlt: 'tech' },
    { label: 'Architecture', imgSrc: 'https://placeimg.com/640/480/arch', imgAlt: 'arch' },
    { label: 'People', imgSrc: 'https://placeimg.com/640/480/people', imgAlt: 'people' },
]

function ImgCarousel() {
    return (
        <div className='d-flex'>
            {slides.map(s => (
                <div>
                    <img className='rounded' src={s.imgSrc} alt={s.imgAlt} width={300} height={300} />
                    <p className='fw-bolder fs-3'>{s.label}</p>
                </div>
            ))}
        </div>
    )
}

export default ImgCarousel