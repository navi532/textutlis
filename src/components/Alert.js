import React from 'react'

export default function Alert({ alert }) {
    const captialize = (word) => {
        const lower = word.toLowerCase();
        return lower[0].toUpperCase() + lower.slice(1)
    }
    return (
        <>
            {alert && <div className="alert alert-success" role="alert">
                <strong>{captialize(alert.type)} </strong> : {alert.msg}
            </div>}
        </>

    )
}
