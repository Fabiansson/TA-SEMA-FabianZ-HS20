import './Card.css';

function Card() {

    return (
        <div className="card">
            <img className="image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkvvDuPwAFgQLKpGTOcgAAAABJRU5ErkJggg==" alt="" width="300" height="174"></img>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <form>
                <label>First name:</label><br />
                <input type="text" id="fname" name="fname" /><br />
                <label>Last name:</label><br />
                <input type="text" id="lname" name="lname" /><br />

                <button type="reset">Reset</button>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Card;
