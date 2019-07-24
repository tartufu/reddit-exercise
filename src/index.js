import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import Posts from './Posts';


class Reddit extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("https://www.reddit.com/r/houkai3rd.json")
        .then( res => {
            const posts = res.data.data.children;
            console.log(posts);
            this.setState({
                posts: posts,
                subreddit: posts[0].data.subreddit
            })
            console.log(this.state.posts[0].data.subreddit)
        })
    }

    render() {
        return(
            <React.Fragment>
            <div className="Subreddit-title">
              <h1> {this.state.subreddit} Subreddit </h1>
            </div>
            <div className="container">
              {this.state.posts.map( post => {
                return <Posts post={post} key={post.id} />
              })}
            </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Reddit />, document.getElementById('root'));