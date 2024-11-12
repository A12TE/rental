import { Injectable } from '@angular/core';
import { vehicles } from './vehicletype';
import {of} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }
  vehiclelist:vehicles[]=[
    {
       vehicleId:"1",
       vehicleName:"Maruti Suzuki Swift",
       vehicleImage:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/11709/1715245478487/front-left-side-47.jpg",
       vehicleCompany:"Maruti Suzuki",
       vehiclePrice:"9,00,00",
       vehicleType:"car",
       vehicleDesc:"The Maruti Suzuki Swift is a midsize hatchback that offers a good balance of performance, features, and fuel efficiency",
       rating:5.0,
       seatingCapacity:"5",
       availableTime:"6.00 AM - 9.00 PM",
       fuelType:"petrol"
    },
    {
     vehicleId:"2",
     vehicleName:"Maruti Suzuki Eritga",
     vehicleImage:"https://saboomaruti.in/static/media/Buy%20Maruti%20Suzuki%20Ertiga%202023%20in%20Hyderabad.2166f778bde76902dfa1.webp",
     vehicleCompany:"Maruti Suzuki",
     vehiclePrice:"10,00,00",
     vehicleType:"car",
     vehicleDesc:"The Maruti Ertiga has 1 Petrol Engine and 1 CNG Engine on offer. The Petrol engine is 146",
     rating:4.7,
     seatingCapacity:"7",
     availableTime:"8.00 AM - 8.00 PM",
     fuelType:"petrol"
  },
  {
   vehicleId:"3",
   vehicleName:"Mahindra Thar ROXX",
   vehicleImage:"https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Thar-ROXX/8438/1723692413550/front-left-side-47.jpg",
   vehicleCompany:"Mahindra",
   vehiclePrice:"15,00,00",
   vehicleType:"car",
   vehicleDesc:"Mahindra Thar Roxx has Engine has 2184.the petrol engine is 172",
   rating:4.7,
   seatingCapacity:"4",
   availableTime:"8.00 AM - 8.45 PM",
   fuelType:"Diesel"
},
{
 vehicleId:"4",
 vehicleName:"Tata Curvv",
 vehicleImage:"https://www.motorbeam.com/wp-content/uploads/Tata-Curvv-EV-Price.jpg",
 vehicleCompany:"Mahindra",
 vehiclePrice:"14,00,00",
 vehicleType:"car",
 vehicleDesc:"The Tata Curvv EV is the electric version of the 5-seater SUV-coupe, which is also available with traditional petrol and diesel engines. Offered in three variants, the Curvv EV comes with two battery pack options, with the larger battery pack boas",
 rating:4.7,
 seatingCapacity:"5",
 availableTime:"8.00 AM - 8.45 PM",
 fuelType:"Electric Vehicle"
},
{
  vehicleId:"5",
  vehicleName:"Royal Enfield Bear 650",
  vehicleImage:"data:image/jpeg;base64,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",
  vehicleCompany:"Royal",
  vehiclePrice:"3,00,00",
  vehicleType:"bike",
  vehicleDesc:" The Royal Enfield Bear 650 is powered by 648cc BS6 engine which develops a power of 46.8 bhp and a torque of 56.5 Nm. With both front and rear disc brakes, Royal Enfield Bear 650 comes up with anti-locking braking system",
  rating:4.7,
  seatingCapacity:"3",
  availableTime:"6.00 AM - 8.45 PM",
  fuelType:"Diesel"
 },
 {
  vehicleId:"6",
  vehicleName:"Royal Enfield Bullet 350",
  vehicleImage:"https://static.autox.com/uploads/bikes/2024/09/royal-enfield-bullet-350.jpg",
  vehicleCompany:"Royal",
  vehiclePrice:"2,00,00",
  vehicleType:"bike",
  vehicleDesc:"The Royal Enfield Bullet 350 is powered by 349cc BS6 engine which develops a power of 20.2 bhp and a torque of 27 Nm. With front disc and rear drum brakes, Royal Enfield Bullet 350 comes up with anti-locking braking system.",
  rating:4.7,
  seatingCapacity:"2",
  availableTime:"6.00 AM - 7.45 PM",
  fuelType:"diesel"
 },
 {
  vehicleId:"7",
  vehicleName:"oben rorr ez",
  vehicleImage:"https://imgd.aeplcdn.com/370x208/n/cw/ec/191883/oben-left-side-view1.jpeg?isig=0&q=80",
  vehicleCompany:"Oben Electric",
  vehiclePrice:"4,00,00",
  vehicleType:"bike",
  vehicleDesc:"The Rorr EZ electric bike is meant to be a daily urban commuter. It is available in three variants with varying battery sizes, including 2.6kWh, 3.4kWh, and 4.4kWh. Featuring LFP battery technology, the claimed IDC range of the bike is 175km for the variant with the biggest battery.",
  rating:5.0,
  seatingCapacity:"2",
  availableTime:"8.00 AM - 9.45 PM",
  fuelType:"Electric Vehicle"
 },
 {
  vehicleId:"8",
  vehicleName:"ktm 200 duke",
  vehicleImage:"https://bd.gaadicdn.com/processedimages/ktm/2023-200-duke/source/2023-200-duke66fea6b410ee9.jpg",
  vehicleCompany:"Ktm",
  vehiclePrice:"2,90,00",
  vehicleType:"bike",
  vehicleDesc:"The KTM 200 Duke is the entry point in the Austrian company’s Duke street naked bike portfolio. The bike features an aggressive design that is characteristic of a KTM. The bike is available in two colours",
  rating:4.7,
  seatingCapacity:"5",
  availableTime:"7.00 AM - 8.45 PM",
  fuelType:"petrol"
 }
 ]

 getallvehicle(){
     return of (this.vehiclelist);
 }
 getallvehicleByid(vid:any){
      return this.vehiclelist.find((e)=>e.vehicleId==vid)
 }
 getcar(){
      return of (this.vehiclelist.filter((e)=>e.vehicleType=="car"));
 }
 getbike(){
  return of (this.vehiclelist.filter((e)=>e.vehicleType=="bike"));
}
}
