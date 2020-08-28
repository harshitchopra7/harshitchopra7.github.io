import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="bg container center">
            <form action="action_page.php">
                <div className="row">
                <div className="col-25">
                    <label className='center' htmlFor="fname">First Name</label>
                </div>
                <div className="col-75">
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                </div>
                </div>
                <div className="row">
                <div className="col-25">
                    <label htmlFor="lname">Last Name</label>
                </div>
                <div className="col-75">
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                </div>
                </div>
                <div className="row">
                <div className="col-25">
                    <label htmlFor="country">Country</label>
                </div>
                <div className="col-75">
                    <select id="country" name="country">
                    <option value="India">India</option>
                    </select>
                </div>
                </div>
                <div className="row">
                <div className="col-25">
                    <label htmlFor="subject">Subject</label>
                </div>
                <div className="col-75">
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{height: 200}} defaultValue={""} />
                </div>
                </div>
                <div className="row mr5">
                <input type="submit" defaultValue="Submit" />
                </div>
            </form>
        </div>

    );
}
export default Contact;