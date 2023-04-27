const HttpStatus = require('http-status-codes');
const express = require('express');
const { handler, ErrorInfo } = require('../../errors/errorHandler');
const validateSchema = require('../../utils/validation/validation');
const { userPutSchema, userPostSchema } = require('../../utils/validation/userSchema');
const usersService = require('./user.controller');

const router = express.Router();

router
  .route('/')
  .get(
    async (_req, res) => {
      const users = await usersService.getAll();
      res.json(users).status(HttpStatus.OK).end();
    }
  )

  .post(validateSchema(userPostSchema), async (req, res, next) => {
    const newUser = req.body;

    if (!newUser || !newUser.login || !newUser.password) {
      handler(new ErrorInfo(HttpStatus.BAD_REQUEST), req, res, next);
    }

    const userId = await usersService.setUser(newUser);

    if (!userId) {
      handler(new ErrorInfo(HttpStatus.BAD_REQUEST), req, res, next);
    }
    res.type('application/json').json(userId).status(HttpStatus.OK).end();
  });

router
  .route('/:id')
  .get(async (req, res, next) => {
    const userId = req.params.id;

    if (!userId) {
      handler(new ErrorInfo(HttpStatus.BAD_REQUEST), req, res, next);
    }

    const user = await usersService.getUserById(userId);

    if (!user) {
      handler(new ErrorInfo(HttpStatus.NOT_FOUND), req, res, next);
    } else {
      res.type('application/json').json(user).status(HttpStatus.OK).end();
    }
  })

  .put(validateSchema(userPutSchema), async (req, res, next) => {
    const newUserData = req.body;
    const userId = req.params.id;

    if (!userId) {
      handler(new ErrorInfo(HttpStatus.BAD_REQUEST), req, res, next);
    }

    const user = await usersService.updateUserById(userId, newUserData);

    if (!user) {
      handler(new ErrorInfo(HttpStatus.NOT_FOUND), req, res, next);
    } else {
      res.type('application/json').json(user).status(HttpStatus.OK).end();
    }
    next();
  })

  .delete(async (req, res, next) => {
    const userId = req.params.id;

    if (!userId) {
      handler(new ErrorInfo(HttpStatus.BAD_REQUEST), req, res, next);
    }

    const deleteCount = await usersService.deleteUserById(userId);

    if (deleteCount === 0) {
      handler(new ErrorInfo(HttpStatus.NOT_FOUND), req, res, next);
    } else {
      res.status(HttpStatus.NO_CONTENT).end();
    }
    next();
  });

module.exports = { router };
