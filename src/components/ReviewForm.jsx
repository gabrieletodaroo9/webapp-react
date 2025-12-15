

export default function ReviewForm() {

    return (
        <>
            <hr />
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your name</label>
                    <input type="text" className="form-control bg-third" id="name" aria-describedby="name" placeholder="Insert here your name..." />
                </div>
                <div className="mb-3">
                    <label htmlFor="vote" className="form-label">Rating</label>
                    <select
                        className="form-select form-select-lg bg-third"
                        name="vote"
                        id="vote"
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="review" className="form-label">Review</label>
                    <textarea className="form-control bg-third" name="review" id="review" rows="3" placeholder="Insert here your personal review..."></textarea>
                </div >
                <button type="submit" className="btn btn-dark btn-lg w-100">Submit</button>

            </form >
        </>
    )
}