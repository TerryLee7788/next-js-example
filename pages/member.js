import React, { Component } from 'react';
import withWrap from '../hoc/withWrap';
import axios from 'axios';

class Member extends Component {

    constructor (props) {

        super(props);

        this.state = {
            lists: []
        };

    }

    componentDidMount () {

        axios.get('/memberList')
            .then((res) => {

                console.log('componentDidMount: ', res);
                this.setState({
                    lists: res.data
                });

            });

    }

    render () {

        return (
            <div>
                <span>memeber</span>
                <ul>
                    {
                        this.state.lists.map((list, idx) => (
                            <li
                                key={`${list.userId}-${idx}`}
                            >{list.title}</li>
                        ))
                    }
                </ul>
            </div>
        )

    }

}

export default withWrap(Member);
