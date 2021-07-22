const Card = ({imgSrc, alt, heading, subheading, details, date}) => {
    return (
        <div className='card'>
            <table>
                <tbody>
                    <tr>
                        <td className='card-element img'>
                            <img src={imgSrc} alt={alt} height='150' width='150'/>
                        </td>
                        <td className='card-element info'>
                            <h2>{heading}</h2>
                            <h4>{date}</h4>
                            <h3>{subheading}</h3>
                            <p>{details}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Card