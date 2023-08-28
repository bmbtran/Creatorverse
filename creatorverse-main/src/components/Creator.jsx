import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Creator = (props) => {
    return(
        <div className='creator-card' style={{backgroundImage: `url(${props.imageURL})`}}>
            <article className='creator-card-sub'>
                <div className='creator-card-header-left flex-cont-col'>
                    <h3 className='creator-card-name'>{props.name}</h3>
                    <div className='creator-card-links flex-cont-row'>
                        {props.youtubeURL ?
                            <a className='creator-card-link fa fa-youtube-play' href={`https://www.youtube.com/@${props.youtubeURL}`}></a> : null
                        }
                        {props.twitterURL ?
                            <a className='creator-card-link fa fa-twitter' href={`https://www.twitter.com/${props.twitterURL}`}></a> : null
                        }
                        {props.instagramURL ?
                            <a className='creator-card-link fa fa-instagram' href={`https://www.instagram.com/${props.instagramURL}`}></a> : null
                        }                       
                    </div>  
                </div>
                <div className='creator-card-header-right flex-cont-col'>
                    <div className='creator-card-header-right-sub flex-cont-row'>
                        {console.log("id : ", props.id)}
                        <Link className='creator-card-link fa fa-info-circle' to={`/${props.id}`}></Link>
                        <Link className='creator-card-link fa fa-pencil' to={`/edit/${props.id}`}></Link>
                    </div>
                </div> 
                <div className='creator-card-desc'>
                    <p className='creator-card-desc-text'>{props.desc}</p>
                </div>
            </article>
        </div>
    )
}

export default Creator;