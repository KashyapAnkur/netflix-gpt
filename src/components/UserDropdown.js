import React from 'react'

function UserDropdown({ UserDropdownObject }) {

    return (
        <>
            <ul className="user-profile-dropdown">
                {UserDropdownObject.map((li) => {
                    return (
                        <li key={li.id} onClick={li.fun}>{li.name}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default UserDropdown;