const Button = (props) => {
  //  Write your code here.
  const { button ,className= props
  return (
       <button className={className}>{button}</button>
      
    
  );
};

const element = (
  //  Write your code here.
  
  <div className="bg_container">
    <h1 className="socialHeading">Social Buttons</h1>
    <div>
        <Button button = "Like" className = 'likeCss'/>
        <Button button='Comment' className='commentCss'/>
        <Button button='Share' className='shareCss'/>
    </div>
  </div>
)
)
;

ReactDOM.render(element, document.getElementById("root"));
