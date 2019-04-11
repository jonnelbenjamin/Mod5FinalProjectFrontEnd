import ReactDOMServer, {ReactDOM} from 'react-dom/server'
import React from 'react'
class InfoWindow extends React.Component {
  constructor(props) {
    super(props);
    this.infoWindowRef = React.createRef();
    this.onInfoWindowOpen = this.onInfoWindowOpen.bind(this);
    if (!this.containerElement) {
      this.containerElement = document.createElement(`div`);
    }
  }

  onInfoWindowOpen() {
   ReactDOM.render(React.Children.only(this.props.children), this.containerElement);
   this.infoWindowRef.current.infowindow.setContent(this.containerElement);
 }


  componentDidUpdate(prevProps, prevState) {
    if (this.props.map !== prevProps.map) {
      this.renderInfoWindow();
    }
    if (this.props.children !== prevProps.children) {
      this.updateContent();
    }

    if ((this.props.visible !== prevProps.visible) ||
    (this.props.marker !== prevProps.marker))
    {
      this.props.visible ?
        this.openWindow() :
        this.closeWindow();
    }
  }

  onInfoWindowButtonClick = (props) => {
    console.log('hit the window button, here are the props:', props)
  }

  openWindow() {
    this.infowindow
      .open(this.props.map, this.props.marker);
  }
  closeWindow() {
    this.infowindow.close();
  }

  updateContent() {
    const content = this.renderChildren();
    this.infowindow
    .setContent(content);
  }

  renderChildren(){
    const {children} = this.props;
    return ReactDOMServer.renderToString(children);
  }
  renderInfoWindow(){
    let {google} = this.props;

    this.infowindow = new google.maps.InfoWindow({
      content: ''
    });
  }
  render() {
    return null;
  }
  }
  export default InfoWindow;
