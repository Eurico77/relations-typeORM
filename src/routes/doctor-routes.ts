import { Router } from 'express';
import { getRepository } from 'typeorm';
import { Doctor } from '../entities/Doctor';

const doctor = Router();

doctor.post('/doctors', async (request, response) => {
  try {
    const repo = getRepository(Doctor);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log(err);


    return response.status(400).send();
  }
});

export { doctor };