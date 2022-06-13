import React from 'react';
import './UserItem.css';
//import 'bootstrap-icons/font/bootstrap-icons.css';



function UserItem(props) {

    const {name, email, salary, isGoldClient, deleteUser, id } = props;
    
    return(
        <div className="user">
                <div className="d-flex w-25">
                    <img src={"https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-1-avatar-2754574_120513.png"} alt="mars"/>
                    <div className="user-info">
                        <p className="name">{ name }</p>
                        <p className="email">{ email }</p>
                    </div>
                </div>
                
                {
                    salary
                        ? <p className="w-25 text-center word-break">{ salary } RON</p>  
                        : <p className="w-25 text-center word-break">0 RON</p>
                }
                {
                    isGoldClient
                        ? <p className="w-25 text-center">GOLD</p> 
                        : <p className="w-25 text-center">BASIC</p>
                }
                <div className='w-25 text-center'>
                    <button type="button" className="btn btn-outline-primary" onClick={ () => deleteUser(id)}>Delete User
                        <i className='bi bi-trash'></i>
                    </button>
                </div>  
        </div>
    );
}


export default UserItem;