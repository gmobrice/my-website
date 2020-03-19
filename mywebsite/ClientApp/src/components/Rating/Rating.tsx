import React, { Component } from 'react';

import './Rating.scss';

interface IRatingProps
{
    rating: number,
    outOf: number,
    id: number,
}

interface IRatingState
{

}

export class Rating extends Component<IRatingProps, IRatingState> 
{
    public static defaultProps: Pick<IRatingProps, "outOf"> =
    {
        outOf: 5
    };

    render () 
    {
        let render: JSX.Element[] = [];

        for (let i = 0; i < this.props.rating; i++)
            render.push( <span key={this.props.id + "r" + i} className='rating filled'></span> );

        for (let i = 0; i < (this.props.outOf - this.props.rating); i++)
            render.push( <span key={this.props.id + "e" + i} className='rating empty'></span> );

        return (
        <span>
            { render }
        </span>
        );
    }
}
