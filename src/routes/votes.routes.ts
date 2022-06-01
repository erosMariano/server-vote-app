import express from 'express';
import { BaseVoteSchema } from '../models/Vote';
import { IBaseVoteProps } from '../types/voteTypes';

export const voteRouter = express.Router()


voteRouter.post('/createVote', async (req, res) => {

    const { community, title, description, link, quantityTokens, typeVote, options, period, networkBlockchain, individualVote, tokenPeopleVote } = <IBaseVoteProps>req.body



    let createdAt = new Date();
    let updatedAt = new Date();


    const newVotation = new BaseVoteSchema({
        community, 
        title,
        description, 
        link, 
        quantityTokens, 
        typeVote, 
        options, 
        period, 
        networkBlockchain, 
        individualVote, 
        tokenPeopleVote, 
        createdAt, 
        updatedAt
    })


    try {
        await newVotation.save()

        res.status(201).json({
            message: 'Votação cadastrada'
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
})

