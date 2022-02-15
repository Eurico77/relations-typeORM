import { Router } from 'express';
import { doctor } from './doctor-routes';
import { appointment } from './appointment-routes';
import { patient } from './patient-routes';

const routes = Router();



routes.use('/', doctor);
routes.use('/', appointment);
routes.use('/', patient);



export default routes;