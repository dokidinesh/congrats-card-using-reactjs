const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="wishes-heading">Congratulations</h1>
    <div className="card-background">
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
      <h1 className="name-heading">Kiran V</h1>
      <p className="paragraph">
        Vishnu instute of Computer Education and Technology, Bhimavaram
      </p>
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
