import React from "react"
import styles from "../index.css"

export const Loading = () => {
    return(
        <div className="col-12 center">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Loading . . .</p>
        </div>
    )
}