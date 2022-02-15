import { Router } from 'express';
import { PatientRepository } from '../repositories/patient-repository';


const patient = Router();

patient.post('/patients', async (req, res) => {
  const repo = new PatientRepository();
  try {
    const creating = await repo.create(req.body);
    return res.status(201).json(creating);

  } catch (error) {
    res.status(500).send(error);
  }

}
);

export { patient };