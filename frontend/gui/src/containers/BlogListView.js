import React from 'react';
import axios from 'axios';

import Blogs from '../components/Blog';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

class BlogList extends React.Component {

    //stores the blogs that comes from API to here
    state = {
        blogs: []
    }

    //Promise
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    blogs: res.data
                });
                console.log(res.data);
            })
    }


    render() {
        return (
            <Blogs data={this.state.blogs} />
        )
    }
}

export default BlogList;