import { Injectable } from '@nestjs/common';
import { CreatePrescriptionDispersionDto } from './dto/create-prescription-dispersion.dto';
import { UpdatePrescriptionDispersionDto } from './dto/update-prescription-dispersion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Prescription } from './entities/prescription.entity';
import { Repository } from 'typeorm';
import { ResponseService } from '../../commons/response.service';
import { Pharmacy } from './entities/pharmacy.entity';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { PrescriptionDispercion } from './entities/prescriptionDispersion.entity';
import { io, Socket } from 'socket.io-client';

@Injectable()
export class PrescriptionDispersionsService {
  private socket: Socket;
  
  constructor(
    @InjectRepository(Prescription)
    private readonly prescriptionRepository: Repository<Prescription>,
    @InjectRepository(PrescriptionDispercion)
    private readonly prescriptionDispercionRepository: Repository<PrescriptionDispercion>,
    @InjectRepository(Pharmacy)
    private readonly pharmacyRepository: Repository<Pharmacy>,
    private reponseService: ResponseService,
    ) {
      this.socket = io('http://pharmacy:81');
    }

  async create(createPrescriptionDispersionDto: CreatePrescriptionDispersionDto) {
      const pharmacy = await this.pharmacyRepository.findOne({
        where: {
          id: createPrescriptionDispersionDto.pharmacy
        }
      });

      if (!pharmacy) {
        return this.reponseService.responseError('Pharmacy Not Found', 404);
      }

      const prescription = await this.prescriptionRepository.findOne({
        where: {
          id: createPrescriptionDispersionDto.prescription,
        }
      });

      if (!pharmacy) {
        return this.reponseService.responseError('Prescription Not Found', 404);
      }

      const prescriptionDispersion = this.prescriptionDispercionRepository.create({
        prescription: prescription,
        pharmacy: pharmacy
      });

      this.socket.emit('prescriptionDispersion', prescription.id);

      const prescriptionDispersionCreated = this.prescriptionDispercionRepository.save(prescriptionDispersion);

      return await this.reponseService.responseSuccess(prescriptionDispersionCreated, 'Prescription Dispersion Created', 201);
  }

  async createPharmacy(createPharmacyDto: CreatePharmacyDto) {
    return await this.pharmacyRepository.save(createPharmacyDto);
  }

  findAll() {
    return `This action returns all prescriptionDispersions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prescriptionDispersion`;
  }

  update(id: number, updatePrescriptionDispersionDto: UpdatePrescriptionDispersionDto) {
    return `This action updates a #${id} prescriptionDispersion`;
  }

  remove(id: number) {
    return `This action removes a #${id} prescriptionDispersion`;
  }
}
