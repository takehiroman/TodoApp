import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav>
            <ul>
                <Link to='/'>Todoリスト</Link><br />
                <Link to='/search'>検索</Link>
            </ul>
        </nav>
    </header>
)

export default Header