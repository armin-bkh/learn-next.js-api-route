import { useState } from 'react';

const EditCommentForm = ({ comment, handleSubmit }) => {
    const [value, setValue] = useState(comment);
    const submitHandler = (e) => {
        e.preventDefault();
        handleSubmit(value)
    }
    return ( 
        <form onSubmit={submitHandler}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button>submit</button>
        </form>
     );
}
 
export default EditCommentForm;