import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { text } from '@fortawesome/fontawesome-svg-core'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']

    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login")
    };

    const searchProducts =(event) => {
        if(event.key ===  "Enter"){
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`)
        }
    }

    return (
    <div>
    <div>
        <div className='login-button' onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
        </div>
    </div>
    <div className='nav-section'>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-QlWGpc1nFtCV7SFAnHKIQaD0mTxlByJmrHQCM4XnA&s' alt='logo'></img>
    </div>
        <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map(menu => (<li>{menu}</li>))}
            </ul>
            <div className='search-box'>
                <FontAwesomeIcon className='menu-search-icon' icon={faSearch} />
                <input className='menu-search-input' type={text} onKeyPress={(event) => searchProducts(event)}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar