const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={className}>{buttonText} </button>;
  //  Write your code here.
};

const element = (
  <div class="bg-container">
    <h1>Social Buttons</h1>
    <div class="button-container">
      <Button className="button like-button" buttonText="Like" />
      <Button className="button comment-button" buttonText="Comment" />
      <Button className="button share-button" buttonText="Share" />
    </div>
  </div>
  //  Write your code here.
);

ReactDOM.render(element, document.getElementById("root"));
