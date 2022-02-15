import { Router } from 'express';
import { AppointmentRepository } from '../repositories/appointment-repository';

const appointment = Router();
appointment.post('/appointments', async (req, res) => {
  const repo = new AppointmentRepository();
  try {
    const creating = await repo.create(req.body);
    return res.status(201).json(creating);

  } catch (error) {
    res.status(500).send(error);
  }

}
);

appointment.get('/appointments/:patientId', async (req, res) => {
  try {
    const repo = new AppointmentRepository();
    const { patientId } = req.params;
    const { pagination } = req.query;
    console.log(pagination);

    const search = await repo.findById(patientId, Number(pagination));

    return res.status(200).json(search);
  } catch (error) {
    res.status(500).send(error);
  }

}
);

export { appointment };