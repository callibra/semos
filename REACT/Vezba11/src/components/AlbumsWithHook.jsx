import React,{useState} from 'react';
import {api} from './../config/properties';
import useFetch from '../utils/FetchHook';
import {createPortal} from 'react-dom';

export const AlbumsWithHook = () =>{
    const [data] = useFetch(`${api.root}/albums`);
    const [portalUse,setPortalUse] = useState(false);

    const container = document.getElementById('albums-header');

    return(
        <div id="albums">
            <div id="albums-header">
            </div>
            {portalUse && createPortal(<p>This is from Portal</p>,document.body)}
            <button onClick={()=>{setPortalUse(!portalUse)}}>Portal</button>
           {data && data.map(album=>{
            return <p key={album.id}>{album.title}</p>
           })}
        </div>
    )
}