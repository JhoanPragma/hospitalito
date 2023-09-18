import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { InjectRepository } from '@nestjs/typeorm';
import { Prescription } from './entities/prescription.entity';
import { Repository } from 'typeorm';

@WebSocketGateway(81, {
  cors: { origin: '*' },
})
export class SocketGateway {
  constructor(
    @InjectRepository(Prescription)
    private readonly prescriptionRepository: Repository<Prescription>,
    ) {}

  @WebSocketServer() server: Server;
  
  handleConnection(client: any, ...args: any[]) {
    console.log('Farmacia Conectada al socket correctamente');
    client.join(`room`);
    this.server.emit('mensaje', '¡Bienvenido al servidor WebSocket!');
  }

  handleDisconnect(client: any) {
    console.log('Farmacia desconectada');
    client.leave(`room`);
  }
  
  @SubscribeMessage('prescriptionDispersion')
  async create(@MessageBody() prescriptionId: number) {
    const prescriptionData = await this.prescriptionRepository.findOne({
      where: {
        id: prescriptionId,
      },
      relations: {
        treatment: {
          patient: {
            allergies: true,
          },
          prescription: {
            medicines: true,
          }
        },
      }
    });
    
    this.server.to(`room`).emit('prescription', prescriptionData);
  }
}
