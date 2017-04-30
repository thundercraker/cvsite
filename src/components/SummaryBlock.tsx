import * as React from "react";
import {DateToMonthYear} from "../service/DateFormater";

interface SummaryBlockProps {
    position: string,
    place: string,
    startDate: Date,
    endDate: Date,
    logo: string
}

interface State {
    isExpanded: Boolean
}

class SummaryBlock extends React.Component<SummaryBlockProps, State> {
    constructor(props: SummaryBlockProps, state: State) {
        super(props, state);
        this.state = { isExpanded: true };
    }

    summaryClassName(): string {
        let cn = "summary" + this.state.isExpanded ? "" : "-hidden";
        return cn;
    }

    toStartDateString(): string {
        return DateToMonthYear(this.props.startDate);
    }

    toEndDateString(): string {
        return (this.props.endDate == null) ? "Current" : 
        DateToMonthYear(this.props.endDate);
    }

    render() {
        return (
            <div className="SummaryBlock CardBlock">
                <div className="image_col">
                    <img src={this.props.logo} className="logo" />
                </div>
                <div className="detail_col">
                    <div className="rowspan">
                        <span className="place">{this.props.place}</span><br/>
                        <span className="position">{this.props.position}</span>
                    </div>
                    <div className="rowspan">{this.toStartDateString.apply(this)} to {this.toEndDateString.apply(this)}</div>
                    <div className={this.summaryClassName.apply(this)}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export {SummaryBlock, SummaryBlockProps};