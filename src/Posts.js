import React from 'react';
import ReactDOM from 'react';

var nilImage = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/13c06c83-22ad-4dfc-8189-d817045577a2/dclfign-5f8b0100-c889-4eba-8861-8b76dab78b02.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEzYzA2YzgzLTIyYWQtNGRmYy04MTg5LWQ4MTcwNDU1NzdhMlwvZGNsZmlnbi01ZjhiMDEwMC1jODg5LTRlYmEtODg2MS04Yjc2ZGFiNzhiMDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wA_t9EA3vf_ipDmA2rgFGylhtRhSgSPGrJW-Z7zBHlw"

class Posts extends React.Component {

    UpVote() {
            return (console.log("ADASDASDA"))
        }

  UpVote(e) {
    console.log('props', this.props.post.data.ups++);
    this.setState({})
  }

  DownVote(e) {
    console.log('props', this.props.post.data.ups--);
    this.setState({})
  }
    render() {

        return(
            <div className="Post">
            <div className="row">

                <div className="col-md-2 Votes-section">
                  <div onClick={(e) => this.UpVote(e)}>
                    <p> <i className="fas fa-arrow-up"></i> </p>
                  </div>
                <p> {this.props.post.data.ups}</p>
                  <div onClick={(e) => this.DownVote(e)}>
                    <p> <i className="fas fa-arrow-down"></i> </p>
                  </div>
                </div>

                <div className="col-md-4 Image-section" >
                <img src={this.props.post.data.url} alt="no-image" onError={(e)=>{e.target.onerror = null; e.target.src=nilImage}}/>
                </div>

                <div className="col-md-6 Post-section">
                    <h3> {this.props.post.data.title} </h3>

                    <div className="Post-actions">
                    <a href={"https://www.reddit.com" + this.props.post.data.permalink} target="_blank"> {this.props.post.data.num_comments} Comments </a>
                    <p> share </p>
                    <p> save </p>
                    <p> hide </p>
                    <p> report </p>
                    </div>
                    <p> Submitted by {this.props.post.data.author} </p>
                </div>
            </div>
            </div>
        )
    }
}

export default Posts;

              // <div className="col-md-2"> <h2> THIS IS A Vote</h2> </div>
              // <div className="col-md-2"> <h2> THIS IS A Pictuew </h2> </div>
              // <div className="col-md-8"> <h2> THIS IS A POST </h2> </div>