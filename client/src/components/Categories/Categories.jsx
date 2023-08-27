import React from 'react'
import "./Categories.css"
import {Link} from "react-router-dom"

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                <button>
                    <Link to="/category/1" className='link'>Men</Link>
                </button>
            </div>
            <div className="row">
            <img src="https://images.unsplash.com/photo-1590330297626-d7aff25a0431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                <button>
                    <Link to="/category/1" className='link'>Women</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" />
                <button>
                    <Link to="/category/1" className='link'>Shoes</Link>
                </button></div>
        </div>
        <div className="col col-lg">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://images.unsplash.com/photo-1619784299133-f691ffaea42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="" />
                <button>
                    <Link to="/category/1" className='link'>Kids</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row"><img src="https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=704&q=80" alt="" />
                <button>
                    <Link to="/category/1" className='link'>Hats</Link>
                </button></div>
                </div>
            </div>
            <div className="row"><img src="https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1159&q=80" alt="" />
                <button>
                    <Link to="/category/1" className='link'>Accessories</Link>
                </button></div> 
        </div>

    </div>
  )
}

export default Categories