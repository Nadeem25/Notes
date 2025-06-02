import express from 'express';

export const userRoutes = () => {
    const userRouter = express.Router()
    userRouter.get('/:id', (req, res, next) => {
        console.log(`Inside userRoutes`);
        next()
    })
    return userRouter
}