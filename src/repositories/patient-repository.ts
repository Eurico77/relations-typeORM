import { getRepository, Repository } from 'typeorm';
import { Patient } from '../entities/Patient';

export class PatientRepository {
  private repository: Repository<Patient>;

  constructor() {
    this.repository = getRepository(Patient);
  }

  async create({ name }: Patient): Promise<Patient> {
    const patient = await this.repository.create({ name });
    return await this.repository.save(patient);
  }

  async findByName(name: string): Promise<Patient[]> {
    return this.repository.find({
      where: {
        name,
      },
    });
  }

  async findById(id: string): Promise<Patient | undefined> {
    return this.repository.findOne(id);
  }

  async findAll(): Promise<Patient[]> {
    return this.repository.find();
  }

}