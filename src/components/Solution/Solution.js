import React, { Component } from 'react'

class Solution extends Component {

    render() {
        let solution = new Array(4).fill('_')
        return (
            <div>
                {solution.map(_ => <span> {_} </span>)}
                <div>
                    <em>HINT</em>
                </div>
            </div>
        )
    }

}

export default Solution