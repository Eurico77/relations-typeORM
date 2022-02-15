import { getRepository, Repository } from 'typeorm';
import { Appointment } from '../entities/Appointment';

export class AppointmentRepository {
  private repository: Repository<Appointment>;

  constructor() {
    this.repository = getRepository(Appointment);
  }

  async create(doctor: Appointment): Promise<Appointment> {
    return this.repository.save(doctor);
  }

  async findByName(name: string): Promise<Appointment[]> {
    return this.repository.find({
      where: {
        name,
      },
    });
  }

  async findById(patientId?: string, pagination?: number): Promise<Appointment | unknown> {

    try {
      const res = await this.repository.find({
        where: { patientId, },
        join: {
          alias: 'apt',
          leftJoinAndSelect: {
            patient: 'apt.patient',
          },
        },
        take: pagination,
      });
      return res || null;

    } catch (error) {
      console.log(error);
    }

  }

  async findAll(): Promise<Appointment[]> {
    return this.repository.find();
  }

}