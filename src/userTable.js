import React from 'react'
import './App.css';


function userTable({data}) {
    
    return (
        <div>
            <div class="quiz-window-header">
                <div class="quiz-window-title">Users</div>
            </div>
            <div class="quiz-window-body">
                <div class="gui-window-awards">
                <ul class="guiz-awards-row guiz-awards-header">
                    <li class="guiz-awards-header-title">Name</li>
                    <li class="guiz-awards-header-track">Email</li>
                    <li class="guiz-awards-header-time">Address</li>
                </ul>
                {data.map(item => (
                <ul key={item.id} class="guiz-awards-row guiz-awards-row-even">
                    <li class="guiz-awards-title">{item.name}
                        <div class="guiz-awards-subtitle">{item.company.catchPhrase}</div>
                    </li>
                    <li class="guiz-awards-track">{item.email}</li>
                    <li class="guiz-awards-time">{item.address.street}</li>
                </ul>
                ))}
                </div>
            </div>
       </div>
    )
}

export default userTable