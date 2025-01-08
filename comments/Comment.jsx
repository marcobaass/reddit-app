const Comment = ({ comment }) => {
    const { text: commentText, author } = comment;

    return (
        <p>
            {commentText}
        </p>
    );
};

export default Comment;