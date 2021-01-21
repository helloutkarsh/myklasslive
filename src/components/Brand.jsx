import React from 'react'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react'
import './timetable.css'
export default function Brand() {
    return (
        <>

            <div className="logo">
                <div className="tag">A power product from
                <div className="image">
                        <IKContext urlEndpoint="https://ik.imagekit.io/783peqtlypv">
                            <IKImage src='https://ik.imagekit.io/783peqtlypv/logo_nUnDyiEy3.png' />
                        </IKContext>
                    </div>

                </div>
            </div>

        </>
    )
}