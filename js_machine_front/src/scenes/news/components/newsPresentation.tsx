import React from 'react';
import { News, NewsPresentationState } from '../models/news';

export class NewsPresentation extends React.PureComponent<News, NewsPresentationState> {
    constructor(props: News) {
        super(props);
        this.state = { hover: false };
    }

    private onMouseEnterHandling = () => {
        this.setState(() => ({ hover: true }));
    }

    private onMouseLeaveHandling = () => {
        this.setState(() => ({ hover: false }));
    }

    render(): JSX.Element {
        const newsDate: number = new Date(this.props.date).getDate();
        const newsMonth: string = new Date(this.props.date).toLocaleString('ru', { month: 'short' }).toUpperCase();
        const newsReadActive = this.state.hover ? 'news__read_active' : '';
        const newsContentDisable = this.state.hover ? 'news__content_disable' : '';

        return (
            <div className="news__wrapper" onMouseEnter={this.onMouseEnterHandling} onMouseLeave={this.onMouseLeaveHandling}>
                <div className={`news__read ${newsReadActive}`}>Читать ></div>
                <div className={`news__content ${newsContentDisable}`}>
                    <div>
                        <p className="news__day">{newsDate} {newsMonth}</p>
                    </div>
                    <div>
                        <p className="news__title">{this.props.title}</p>
                    </div>
                    <div>
                        <p className="news__description">{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}
