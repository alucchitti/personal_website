import {AiFillHeart} from 'react-icons/ai'
import {BiCodeAlt} from 'react-icons/bi'
import {IconContext} from "react-icons"

const Footer = () => {
    return (
        <footer>
            <p>Created with <IconContext.Provider value={{style: {color:'red'}}}><AiFillHeart /></IconContext.Provider> and <BiCodeAlt /> by Anthony Lucchitti</p>
        </footer>
    )
}

export default Footer
