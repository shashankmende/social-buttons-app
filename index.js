const Button = (props) => {
  //  Write your code here.
  const { button } = props;
  const likeButton = button[0];
  const commentButton = button[1];
  const shareButton = button[2];
  return (
    <div>
      <button className="likeCss">{likeButton}</button>
      <button className="commentCss">{commentButton}</button>
      <button className="shareCss">{shareButton}</button>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg_container">
    <h1 className="socialHeading">Social Buttons</h1>

    <Button button={["Like", "Comment", "Share"]} />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
