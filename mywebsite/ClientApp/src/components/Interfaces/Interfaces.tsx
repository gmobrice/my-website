import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export interface ICarouselItem
{
    src: string,
    altText: string,
    caption?: string,
    header?: string,
    key: number
}

export interface IProjectLink
{
    icon: IconDefinition,
    link: string
}

export interface IProjectProps
{
    carouselItems: ICarouselItem[],
    name: string,
    description: string,
    links: IProjectLink[]
}

export interface IHomeState
{
    introHeader: string,
    introText: string,
    aboutMeText: string,
    skillsText: string,
    projects: IProjectProps[],
    articles: IProjectProps[]
}