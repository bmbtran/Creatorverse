import { React, useState, useEffect } from 'react';
import { Outlet, Link, useParams } from "react-router-dom";
import { supabase } from '../client';

const EditCreator = () => {
    const {id} = useParams();
    const [creator, setCreator] = useState(
        {
            name: "",
            imageURL: "",
            desc: "",
            youtubeURL: "",
            twitterURL: "",
            instagramURL: ""
        }
    );

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await supabase
            .from('creators')
            .select()
            .eq("id", id)
            
            setCreator(data[0]);
        }

        fetchData();
    }, []);

    const editCreator = async (event) => {
        event.preventDefault();

        console.log("creator: ", creator);

        const { data, error } = await supabase
        .from('creators')
        .update({name: creator.name, imageURL: creator.imageURL, desc: creator.desc, youtubeURL: creator.youtubeURL, twitterURL: creator.twitterURL, instagramURL: creator.instagramURL})
        .eq('id', id);

        if (error) {
            console.error('Error editing row:', error);
        } else {
            console.log('Row edited successfully:', data);
        }

        window.location = "/";
    }

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
        <div className="add-creator">
            <h2 className="add-creator-header">BASIC INFORMATION</h2>
            <form className="add-creator-form">
                <label htmlFor="name">
                    Name*
                    <input type="text" id="name" name="name" value={creator.name} onChange={(event) => setCreator({name: event.target.value, imageURL: creator.imageURL, description: creator.description, youtubeURL: creator.youtubeURL, twitterURL: creator.twitterURL, instagramURL: creator.instagramURL})} required></input>
                </label>

                <label htmlFor="image">
                    Image*
                    <p>Provide a link to an image of the creator. Be sure to include the http://</p>
                    <input type="text" id="image" name="image" value={creator.imageURL} onChange={(event) => setCreator({name: creator.name, imageURL: event.target.value, description: creator.description, youtubeURL: creator.youtubeURL, twitterURL: creator.twitterURL, instagramURL: creator.instagramURL})} required></input>
                </label>

                <label htmlFor="description">
                    Description*
                    <p>Provide a text description of the creator. Who are they? What makes them interesting?</p>
                    <textarea id="description" name="description" row="3" col="50" value={creator.description} onChange={(event) => setCreator({name: creator.name, imageURL: creator.imageURL, description: event.target.value, youtubeURL: creator.youtubeURL, twitterURL: creator.twitterURL, instagramURL: creator.instagramURL})} required></textarea>
                </label>

                <h2 className="add-creator-header">SOCIAL MEDIA LINKS</h2>
                <p>Provide at least one of the following social media links to the creator.</p>

                <label htmlFor="youtubeurl">
                    <span className="fa fa-youtube-play"></span> {" YouTube"}
                    <p>The creator's YouTube handle (without the @)</p>
                    <input type="text" id="youtubeurl" name="youtubeurl" value={creator.youtubeURL} onChange={(event) => setCreator({name: creator.name, imageURL: creator.imageURL, description: creator.description, youtubeURL: event.target.value, twitterURL: creator.twitterURL, instagramURL: creator.instagramURL})}></input>
                </label>

                <label htmlFor="twitterurl">
                    <span className="fa fa-twitter"></span> {" Twitter"}
                    <p>The creator's Twitter handle (without the @)</p>
                    <input type="text" id="twitterurl" name="twitterurl" value={creator.twitterURL} onChange={(event) => setCreator({name: creator.name, imageURL: creator.imageURL, description: creator.description, youtubeURL: creator.youtubeURL, twitterURL: event.target.value, instagramURL: creator.instagramURL})}></input>
                </label>

                <label htmlFor="instagramurl">
                    <span className="fa fa-instagram"></span> {" Instagram"}
                    <p>The creator's Instagram handle (without the @)</p>
                    <input type="text" id="instagramurl" name="instagramurl" value={creator.instagramURL} onChange={(event) => setCreator({name: creator.name, imageURL: creator.imageURL, description: creator.description, youtubeURL: creator.youtubeURL, twitterURL: creator.twitterURL, instagramURL: event.target.value})}></input>
                </label>

                <button type="submit" onClick={editCreator}>Edit</button>
                <button type="submit" className='delete-btn' onClick={deleteCreator}>Delete</button>
            </form>
        </div>
    )
}

export default EditCreator;