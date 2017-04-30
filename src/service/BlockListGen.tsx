import * as React from "react"

import {ProjectBlock, ProjectBlockProps} from "../components/ProjectBlock"
import {SummaryBlock, SummaryBlockProps} from "../components/SummaryBlock"

interface ProjectBlockModel extends ProjectBlockProps {
    details: string
}

interface SummaryBlockModel extends SummaryBlockProps {
    details: string
}

class BlockListGenerator {
    GenerateProjectList(proplist: ProjectBlockModel[]): JSX.Element[] {
        return proplist.map(x => {
            return (
                <ProjectBlock key={x.title}
                    title={x.title}
                    languages={x.languages}
                    github={x.github}
                    summary={x.summary}>
                    {x.details}
                </ProjectBlock>
            )
        })
    }

    GenerateSummaryList(proplist: SummaryBlockModel[]): JSX.Element[] {
        return proplist.map(x => {
            return (
                <SummaryBlock place={x.place}
                    position={x.position}
                    startDate={x.startDate}
                    endDate={x.endDate}
                    logo={x.logo}>
                    {x.details}
                </SummaryBlock>
            )
        })
    }
}

export {BlockListGenerator, ProjectBlockModel, SummaryBlockModel}