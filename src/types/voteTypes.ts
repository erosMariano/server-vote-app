export interface IBaseVoteProps {
    community: String
    title: String
    description: String
    link: String
    quantityTokens: Number
    typeVote: Number
    options: String[]
    period: Number
    networkBlockchain: Number
    individualVote: Number
    tokenPeopleVote: String[]

    createdAt: Date;
    updatedAt: Date;
}
