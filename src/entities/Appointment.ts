import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, JoinTable, ManyToMany, } from "typeorm";

import { Doctor } from "../entities/Doctor";
import { Patient } from "../entities/Patient";

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryGeneratedColumn()
  @Column({ name: 'doctor_id' })
  doctorId: number;

  @PrimaryGeneratedColumn()
  @Column({ name: 'patient_id' })
  patientId: number;

  @ManyToOne(() => Doctor, { primary: true })
  @JoinColumn({ name: 'doctor_id' })
  doctor: Doctor;

  @ManyToOne(() => Patient, { primary: true })
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;


}

export { Appointment };