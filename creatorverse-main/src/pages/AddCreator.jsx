import { React, useState } from 'react';
import { supabase } from '../client.js';

const AddCreator = () => {
    const [newCreator, setNewCreator] = useState(
        {
            name: "",
            imageURL: "",
            description: "",
            youtubeURL: "",
            twitterURL: "",
            instagramURL: "",
            id: "8",
        }
    );
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewCreator((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const addCreator = async (event) => {
        event.preventDefault();

        await supabase
        .from('creators')
        .insert({name: newCreator.name, imageURL: newCreator.imageURL, desc: newCreator.description, youtubeURL: newCreator.youtubeURL, twitterURL: newCreator.twitterURL, instagramURL: newCreator.instagramURL, id: newCreator.id})
        .select();

        window.location = "/";
    }

    return(
        <div className="add-creator">
            <h2 className="add-creator-header">CREATOR'S INFO</h2>
            <form className="add-creator-form">
                <label htmlFor="name">
                    Name*
                    <input type="text" id="name" name="name" placeholder="Name" onChange={handleInputChange} required></input>
                </label>

                <label htmlFor="image">
                    Image*
                    <p>Provide a link to an image of the creator. Be sure to include the http://</p>
                    <input type="text" id="image" name="image" placeholder="https://..." onChange={handleInputChange} required></input>
                </label>

                <label htmlFor="description">
                    Description*
                    <p>Provide a text description of the creator. Who are they? What makes them interesting?</p>
                    <textarea id="description" name="description" row="3" col="50" placeholder="This creator plays the banjo for his cats!" onChange={handleInputChange} required></textarea>
                </label>

                <h2 className="add-creator-header">SOCIAL MEDIA LINKS</h2>
                <p>Provide at least one of the following social media links to the creator.</p>

                <label htmlFor="youtubeurl">
                    <span className="fa fa-youtube-play"></span> {" YouTube"}
                    <p>The creator's YouTube handle (without the @)</p>
                    <input type="text" id="youtubeurl" name="youtubeurl" onChange={handleInputChange}></input>
                </label>

                <label htmlFor="twitterurl">
                    <span className="fa fa-twitter"></span> {" Twitter"}
                    <p>The creator's Twitter handle (without the @)</p>
                    <input type="text" id="twitterurl" name="twitterurl" onChange={handleInputChange}></input>
                </label>

                <label htmlFor="instagramurl">
                    <span className="fa fa-instagram"></span> {" Instagram"}
                    <p>The creator's Instagram handle (without the @)</p>
                    <input type="text" id="instagramurl" name="instagramurl" onChange={handleInputChange}></input>
                </label>

                <button type="submit" onClick={addCreator}>Submit</button>
            </form>
        </div>
    )
}

export default AddCreator;