import React from "react";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default function Loading() {

    return (
        <Loader type="Hearts"
                color="red"
                height={350}
                width={350}
        />
    )
}
