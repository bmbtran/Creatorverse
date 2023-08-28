import { React, useState, useEffect } from 'react';
import { Outlet, Link, useParams } from "react-router-dom";
import { supabase } from '../client';

const ViewCreator = () => {
    const {id} = useParams();
    const defaultCreator = {
        id: "-1",
        name: "No name",
        imageURL: "https://clipart-library.com/images/5TRraz5jc.jpg",
        description: "N/A. Click Add A Creator to enter a new creator or View All Creators to see previously created creators."
    }
    const [creator, setCreator] = useState(defaultCreator);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await supabase
            .from('creators')
            .select()
            .eq("id", id)
            
            if (data[0]) {
              setCreator(data[0]);  
            }         
        }
        fetchData();
    }, [id]);

    const deleteCreator = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase
          .from('creators')
          .delete()
          .eq('id', id);
    
        if (error) {
          console.error('Error deleting row:', error);
        } else {
          console.log('Row deleted successfully:', data);
        }
        window.location = "/";

      }

    return(
        <div className="view-creator">
            <div className="view-creator-image">
                <img src={creator.imageURL} alt={creator.name}></img>
            </div>
            <div className='view-creator-desc'>
                <h2 className='creator-card-name'>{creator.name}</h2>
                <p>{creator.description}</p>
                {creator.youtubeURL ? <Link to={`https://www.youtube.com/@${creator.youtubeURL}`}><button className='creator-link-btn'><span className='fa fa-youtube-play'></span> @{creator.youtubeURL}</button></Link> : null}
                {creator.twitterURL ? <Link to={`https://www.twitter.com/${creator.twitterURL}`}><button className='creator-link-btn'><span className='fa fa-twitter'></span> @{creator.twitterURL}</button></Link> : null}
                {creator.instagramURL ? <Link to={`https://www.instagram.com/${creator.instagramURL}`}><button className='creator-link-btn'><span className='fa fa-instagram'></span> @{creator.instagramURL}</button></Link> : null}
            </div>
            { creator.id != "-1" ?
                <div className='view-creator-btns flex-cont-row'>
                    <Link to={`/edit/${creator.id}`}><button className='layout-btn'>EDIT</button></Link>
                    <button className='layout-btn delete-btn' onClick={deleteCreator}>DELETE</button>
                </div> 
                : null
            }
            
        </div>
    )
}

export default ViewCreator;