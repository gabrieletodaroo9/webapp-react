import axios from "axios";
import { useState } from "react";

export default function ReviewForm({ movieId }) {

    const initialForm = {
        name: "",
        vote: "",
        text: ""
    }

    const [formData, setFormData] = useState(initialForm)

    function handleSubmit(e) {
        console.log("request completed")
        axios.post(`http://localhost:3000/api/movies/${movieId}/review`, formData)
            .then((res) => {
                setFormData(initialForm)
            })
            .catch((err) => {
                console.log("error into the API store route")
            })

    }


    return (
        <>
            <hr />
            <h2 className="text-center pt-3 fw-bold my-4">Write your personal review</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">Your name</label>
                    <input type="text" className="form-control bg-third" id="name" aria-describedby="name" placeholder="Insert here your name..." value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="vote" className="form-label fw-bold">Rating</label>
                    <select className="form-select form-select-lg bg-third" name="vote" id="vote" value={formData.vote} onChange={(e) => setFormData({ ...formData, vote: e.target.value })}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="review" className="form-label fw-bold">Review</label>
                    <textarea className="form-control bg-third" name="review" id="review" rows="3" placeholder="Insert here your personal review..." value={formData.text} onChange={(e) => setFormData({ ...formData, text: e.target.value })} ></textarea>
                </div >
                <button type="submit" className="btn btn-dark btn-lg w-100 mt-2 mb-5 fw-bold">Submit</button>

            </form >
        </>
    )
}