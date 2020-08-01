import React from 'react'
import LessonList from '../components/LessonList'
import Video from '../components/Video'


class Explore extends React.Component{
    constructor(props){
        super(props)
        console.log(1)
        this.state = {
            data: [],
          };    
    }
    componentDidMount(){
        console.log(3)
        this.timeoutId = setTimeout(() => {
            this.setState({
                data: [              {
                    id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                    Name: 'Crepes & Waffles',
                    imgUrl:
                    'https://instagram.fbog2-2.fna.fbcdn.net/v/t51.2885-19/s320x320/69621607_496699594487582_8129503935976177664_n.jpg?_nc_ht=instagram.fbog2-2.fna.fbcdn.net&_nc_ohc=OfEOkbPnbqwAX9iZfgW&oh=90e901d2dc912fb8beb52b2eb69229da&oe=5E8AF631'
                },
                  {
                    id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                    Name: 'Wok',
                    imgUrl:
                    'https://instagram.fbog2-2.fna.fbcdn.net/v/t51.2885-19/s150x150/64649395_500178434055100_643862941094903808_n.jpg?_nc_ht=instagram.fbog2-2.fna.fbcdn.net&_nc_ohc=7TAPObxzM88AX_JcxCW&oh=ae804fe921269dc56ef3ac9dfbe7a160&oe=5E88C4AC'
                },
                  {
                    id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
                    Name: 'Andres Carne de res',
                    imgUrl:
                    'https://instagram.fbog2-2.fna.fbcdn.net/v/t51.2885-19/s320x320/60868025_443830029525661_7274070678247047168_n.jpg?_nc_ht=instagram.fbog2-2.fna.fbcdn.net&_nc_ohc=i7N5ynmsAF8AX9NpIxZ&oh=0a83172ad6fc9e9a50308fdbbc3bcd5e&oe=5E80D144'
                },] 
            })
        }, 0);
    }
    componentDidUpdate(preprops, prestate){
        console.log({
            preprops: preprops, 
            prestate: prestate})
        console.log({
            props: this.props,
            state: this.state})
        
    }
    componentWillUnmount(){
        console.log('se desmonto')
        clearTimeout(this.timeoutId)
    }
    render(){
        return(
            <React.Fragment>
                <div className="Page-container" id="Explorer">
                    <h1 className="Page-title">Explore</h1>
                    <div className="restaurants">
                        <h2>Restaurants</h2>
                        <LessonList
                        restaurant={this.state.data}
                        />
                        <Video/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Explore;