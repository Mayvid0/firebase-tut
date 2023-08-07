import React, { useState } from 'react'
import {storage} from '../config/firebase'
import{ref, uploadBytes} from 'firebase/storage'

export const FileUpload = () => {
    const [fileupload, setFileUpload]= useState(null)

    const uploadFile = async()=>{
        if(!fileupload) return;
        const fileFolderRef= ref(storage,`projectFiles/${fileupload.name}`)
        try{
            await uploadBytes(fileFolderRef, fileupload)
        }catch(err){
            console.error(err)
        }
        
    }
  return (
    <div>
        <input type="file" onChange={(e)=> setFileUpload(e.target.files[0])} />
        <button type='submit' onClick={uploadFile} >Send File</button>
    </div>
  )
}

