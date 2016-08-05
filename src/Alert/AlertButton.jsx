
class AlertButton extends React.Component {
  constructor(props) {
    super(props);
    this.alertText = this.alertText.bind(this);
  }

  alertText() {
    alert(this.props.text);
  }
  render() {
    return (
      <button onClick={this.props.text}>No. {this.props.num} 我是一隻 {this.props.text} 貓</button>
    );
  }
}
AlertButton.propsTypes = {
  text: React.PropTypes.string,
  num: React.PropTypes.number
};
AlertButton.DefaultProps = {
  text: 'abc',
  num: 0
}
module.exports = AlertButton;
