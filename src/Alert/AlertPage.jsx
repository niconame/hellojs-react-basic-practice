var AlertButton = require('Alert/AlertButton.jsx');

class AlertPage extends React.Component {
  render() {
    var texts = ['hi','mylove','Moomoo','Shras'];
    return (
      <div>
        {texts.map((t,index)=>{
          return <AlertButton key={index} texts={t}/>;
        })}
        {(()=> {
          if (texts.length >= 3) {
            return <button>true</button>;
          } else {
            return <button>false</button>;
          }
        })()}
      </div>
    );
  }
}
module.exports = AlertPage;
