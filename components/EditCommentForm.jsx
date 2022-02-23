import { useState } from 'react';

const EditCommentForm = ({ comment }) => {
    const [value, setValue] = useState(comment);

    const submitHandler = async e => {
        e.preventDefault();
        const response = await fetch('/api/comments', comment.id);
        const data = await response.json();
        console.log(data);
    }

    return ( 
        <form onSubmit={submitHandler}>
            <input type="text" value={value} onChange={() => setValue(e.target.value)} />
            <button>submit</button>
        </form>
     );
}
 
export default EditCommentForm;