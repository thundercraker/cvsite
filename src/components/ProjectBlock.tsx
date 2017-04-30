import * as React from "react";
import {LanguageTag, LanguageTagA} from "./LanguageTag";

interface ProjectBlockProps {
    title: string,
    languages: string,
    github: string,
    summary: string
}

interface State {
    isExpanded: Boolean
}

class ProjectBlock extends React.Component<ProjectBlockProps, State> {
    constructor(props: ProjectBlockProps, state: State) {
        super(props, state);
        this.state = { isExpanded: false };
    }

    toggleVisibility(): void {
        this.setState({ isExpanded: !this.state.isExpanded });
    }

    readMoreOrCollapseText(): string {
        return !this.state.isExpanded ? "Read more..." : "Collapse...";
    }

    detailClassName(): string {
        return "detail" + (this.state.isExpanded ? "" : "-hidden");
    }

    renderLanguageTags(): JSX.Element[] {
        let toks = this.props.languages.split(",");
        return toks.map(l => {
            if(l.trim() == "C#")
                return LanguageTagA("C#", "cs")
            return LanguageTag(l);
        });
    }

    renderRespositoryLink(): JSX.Element {
        if(this.props.github.length > 0) {
            return (<div><a href={this.props.github}>Repository</a></div>);
        } else {
            return;
        }
    }

    renderReadMore(): JSX.Element {
        if(this.props.children)
            return (<span className="flink" onClick={this.toggleVisibility.bind(this)}>{this.readMoreOrCollapseText()}</span>);
        else return;
    }

    render() {
        return (
            <div className="ProjectBlock CardBlock">
                <div className="title">{this.props.title}</div>
                <div>{this.renderLanguageTags()}</div>
                    {this.renderRespositoryLink()}
                <div>
                    {this.props.summary}&nbsp;
                    {this.renderReadMore()}
                </div>
                <div className={this.detailClassName()}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export {ProjectBlock, ProjectBlockProps};