const CommentsListPage = () => {
  const [comments, setComments] = useState([]);
  
  const fetchCommentsHandler = async () => {
    const data = await await fetch("/api/comments").json();
    console.log(data);
    setComments(data);
  };

  return (
    <>
      <button type="button" onClick={fetchCommentsHandler}>load comments</button>
    </>
  );
};

export default CommentsListPage;
