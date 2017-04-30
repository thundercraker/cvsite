import * as React from "react";

interface Props {
    fullname: string,
    phone: string,
    email: string,
    linkedin: string,
    github: string,
    address1: string,
    address2: string,
    profilePic: string
}

class BioDataBlock extends React.Component<Props, undefined> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <div className="BioDataBlock CardBlock">
                <div className="detail_col">
                    <h2>{this.props.fullname}</h2>
                    {this.props.email} {this.props.phone}<br/>
                    {this.props.address1}<br/>
                    {this.props.address2}<br/>
                    <a href={this.props.linkedin}>LinkedIn</a>&nbsp;
                    <a href={this.props.github}>GitHub</a>
                </div>
                <div className="profile_pic_col">
                    <img src={this.props.profilePic} className="profile_pic" />
                </div>
            </div>
        );
    }
}

export {BioDataBlock};