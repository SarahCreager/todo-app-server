'use strict';

const express = require('express');
const { ListItem } = require('../model/index');
const apiRouter = express.Router();

apiRouter.get('/todo', handleGetAll);
apiRouter.post('/todo', handleCreate);
apiRouter.delete('/todo/:id', handleDelete);
apiRouter.put('/todo/:id', handleUpdate);

async function handleGetAll(req, res) {
  let allRecords = await ListItem.findAll();
  res.status(200).json(allRecords);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await ListItem.create(obj);
  console.log(newRecord);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  const foundRecord = await ListItem.findOne({ where: { id } });
  let updatedRecord = await foundRecord.update(obj);
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await ListItem.destroy({ where: { id } });
  res.status(200).json(deletedRecord);
}

module.exports = apiRouter;
