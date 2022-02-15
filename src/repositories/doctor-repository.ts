import { getRepository, Repository } from 'typeorm';
import { Doctor } from '../entities/Doctor';


export class DoctorRepository {
  private repository: Repository<Doctor>;

  constructor() {
    this.repository = getRepository(Doctor);
  }

  async create({ name }: Doctor): Promise<Doctor> {
    const doctor = await this.repository.create({ name });
    return this.repository.save(doctor);
  }

  async findByName(name: string): Promise<Doctor[]> {
    return this.repository.find({
      where: {
        name,
      },
    });
  }

  async findById(id: string): Promise<Doctor | undefined> {
    return this.repository.findOne(id);
  }

  async findAll(): Promise<Doctor[]> {
    return this.repository.find();
  }

}