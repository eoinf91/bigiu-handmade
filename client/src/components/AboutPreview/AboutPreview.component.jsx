import React from 'react'

// Styles
import './AboutPreview.styles.scss'

const AboutPreview = () => (
    <div className='about-preview'>
        <h2>About BiGiu Handmade</h2>
        <div className='about-preview-container'>
            <div className='image'>Add Image</div>
            <div className='copy'>
                <p>Mi sono spesso sottovalutata quando si trattava delle mie capacità, creavo sempre gioielli per me stessa e raramente mostravo ciò che riuscivo a realizzare.</p>
                <p>La passione per il fai da te e per l’arte è sempre esistita, tanto da decidere di iscrivermi al Liceo Artistico.</p>
                <a href='/' className='button'>Read More</a>
            </div>
        </div>
    </div>
)

export default AboutPreview;