import { Schema, model, connect } from 'mongoose';
import { IBaseVoteProps } from '../types/voteTypes';


// 1. Create an baseVoteProps representing a document in MongoDB.
export const baseVoteSchema = new Schema<IBaseVoteProps>({
    community: String,
    title: String,
    description: String,
    link: String,
    quantityTokens: Number,
    typeVote: Number,
    options: Array,
    period: Number,
    networkBlockchain: Number,
    individualVote: Number,
    tokenPeopleVote: Array,

    createdAt: Date,
    updatedAt: Date,
});

// // 3. Create a Model.
export const BaseVoteSchema = model<IBaseVoteProps>('BaseVoteSchema', baseVoteSchema);