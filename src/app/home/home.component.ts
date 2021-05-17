import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CowinService } from '../cowin.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // aa = [
  //   {
  //     center_id: 697752,
  //     name: 'Uphc Gurunanak Basti (18-44)',
  //     address: 'Gurunanak Basti UPHC Sri GanganagarRajasthan',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'urban',
  //     pincode: 335001,
  //     lat: 29,
  //     long: 73,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: '34a37573-cdd0-48f2-b5b0-54a12bb392ad',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 0,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 697887,
  //     name: 'Ward NO 4 And 5 UPHC (18-44)',
  //     address: 'Ward NO 4 And 5 UPHC',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'urban',
  //     pincode: 335001,
  //     lat: 29,
  //     long: 73,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: '06cd3718-3f37-4aad-9439-56991239f2e4',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 0,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 697768,
  //     name: 'CHC Suratgarh (18-44)',
  //     address: 'CHC Suratgarh',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'Suratgarh',
  //     pincode: 335804,
  //     lat: 29,
  //     long: 73,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: '70f2732e-f099-4433-b8e4-532e83cab974',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 0,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 697781,
  //     name: 'PHC JAITSAR (18-44)',
  //     address: 'PHC JAITSAR BLOCK AnoopgarhSri Ganganagar',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'Anoopgarh',
  //     pincode: 335702,
  //     lat: 29,
  //     long: 73,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: '63c99fe9-36a3-4ee9-9a46-2738fb3ae539',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 0,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 697759,
  //     name: 'SADULSHAHAR CHC (18-44)',
  //     address: 'SADUL SAHAR CHC Sadulsahar',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'Sadulsahar',
  //     pincode: 335062,
  //     lat: 29,
  //     long: 74,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: 'ba048b07-8c8b-4a1b-99a6-db247c9f3108',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 0,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 697765,
  //     name: 'Samejakothi CHC (18-44)',
  //     address: 'Samejakothi CHC Raisinghnagar',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'Raisinghnagar',
  //     pincode: 335021,
  //     lat: 29,
  //     long: 73,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: '4de3527e-0163-4b25-9976-e73be75b9978',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 0,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 697798,
  //     name: 'Gajsinghpur CHC (18-44)',
  //     address: 'Gajsinghpur CHCSri Ganganagar',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'Padampur',
  //     pincode: 335024,
  //     lat: 29,
  //     long: 73,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: 'ca17182c-3ca9-4517-b2bc-2ad1bd720033',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 0,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 697747,
  //     name: 'DISTRICT HOSPITAL (18-44)',
  //     address: 'District Hospital Suratgarh Road Sriganganagar',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: '',
  //     pincode: 335001,
  //     lat: 29,
  //     long: 73,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: 'a368ed0d-fbc0-48b8-b49c-5203837d5d87',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 0,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 697761,
  //     name: 'CHC Lalgarh (18-44)',
  //     address: 'Chc Lalgarh Sriganganagar',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'Sadulsahar',
  //     pincode: 335037,
  //     lat: 29,
  //     long: 74,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: 'e739ab2a-90a0-45c8-a90f-b1959f9d3c4a',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 0,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 697799,
  //     name: 'CHC SRI KARANPUR (18-44)',
  //     address: 'Karanpur CHCSri Ganganagar',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'Karanpur',
  //     pincode: 335073,
  //     lat: 29,
  //     long: 73,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: 'a621869f-f723-4a82-aefc-4e4ac6c3f455',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 0,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 697789,
  //     name: 'Padampur CHC (18-44)',
  //     address: 'Padampur CHCSri Ganganagar',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'Padampur',
  //     pincode: 335041,
  //     lat: 29,
  //     long: 73,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: '25a42723-3ba4-48af-9a50-caf237ad4af4',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 0,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 697779,
  //     name: 'Vijaynagar Chc (18-44)',
  //     address: 'Vijaynagar Chc BLOCK Anoopgarh Sri Ganganagar',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'Anoopgarh',
  //     pincode: 335704,
  //     lat: 29,
  //     long: 73,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: '6b6be06c-88c6-4a8d-bd20-698ce9ea3a6a',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 0,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 697805,
  //     name: 'UPHC Ashok Nagar (18-44)',
  //     address: 'UPHC Ashok Nagar Opp Mausam Vibhag',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'urban',
  //     pincode: 335001,
  //     lat: 29,
  //     long: 73,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: 'e52fa63f-df72-4770-ba8d-841d98a1ca53',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 0,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 697802,
  //     name: 'CHC KESRISINGHPUR (18-44)',
  //     address: 'Kesrisinghpur CHCSri Ganganagar',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'Karanpur',
  //     pincode: 335027,
  //     lat: 29,
  //     long: 73,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: 'cf5b2e86-ad3e-4b65-a8ee-be0af2eaf794',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 0,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 697756,
  //     name: 'Chunawad CHC (18-44)',
  //     address: 'Chunawad CHC',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'Sri Ganganagar',
  //     pincode: 335022,
  //     lat: 29,
  //     long: 73,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: 'ef01e6ca-e796-4428-a3ba-3a24718e16af',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 0,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 697786,
  //     name: 'Chc Rawla (18-44)',
  //     address: 'Chc Rawla',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'Gharsana',
  //     pincode: 335707,
  //     lat: 28,
  //     long: 72,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: 'ce56d796-29ea-4541-acbd-a146e35a82e0',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 0,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 697777,
  //     name: 'PHC Ramsinghpur (18-44)',
  //     address: 'PHC Ramsinghpur BLOCK AnoopgarhSri Ganganagar',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'Anoopgarh',
  //     pincode: 335703,
  //     lat: 29,
  //     long: 73,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: '569427cc-989e-44e7-9c4d-24d326428852',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 0,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 697784,
  //     name: 'Gharsana CHC (18-44)',
  //     address: 'Gharsana CHC Sri Ganganagar',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'Gharsana',
  //     pincode: 335707,
  //     lat: 29,
  //     long: 73,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: 'd61df9ff-1ea7-454e-bfa7-466cfbeddaba',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 0,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 702898,
  //     name: 'Mirjewala PHC (18-44)',
  //     address: 'Mirjewala PHC',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'Sri Ganganagar',
  //     pincode: 335038,
  //     lat: 29,
  //     long: 73,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: 'e24358f7-dad8-463e-ad17-b256bb05f54c',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 0,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 697764,
  //     name: 'Raisinghnagar CHC (18-44)',
  //     address: 'Raisinghnagar CHC Raisinghnagar',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'Raisinghnagar',
  //     pincode: 335051,
  //     lat: 29,
  //     long: 73,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: '9edb603a-8243-45d7-a59a-27902ef61d60',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 20,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 697748,
  //     name: 'UPHC PURANI ABADI (18-44)',
  //     address:
  //       'W NO 22 UPHC Purani Abadi DISPANCERI MADCHAND ASWAL VAIKA Purani Abadi SGNR',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'urban',
  //     pincode: 335001,
  //     lat: 29,
  //     long: 73,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: 'a2bf2bdd-5245-44d8-aaa6-c66266913290',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 0,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  //   {
  //     center_id: 697775,
  //     name: 'Chc Anupgarh (18-44)',
  //     address: 'Chc Anupgarh Anupgarh',
  //     state_name: 'Rajasthan',
  //     district_name: 'Sri Ganganagar',
  //     block_name: 'Anoopgarh',
  //     pincode: 335701,
  //     lat: 29,
  //     long: 73,
  //     from: '09:00:00',
  //     to: '18:00:00',
  //     fee_type: 'Free',
  //     sessions: [
  //       {
  //         session_id: 'c1bc2792-5795-4a30-a66f-669525d08c1d',
  //         date: '17-05-2021',
  //         available_capacity: 0,
  //         min_age_limit: 18,
  //         vaccine: 'COVISHIELD',
  //         slots: [
  //           '09:00AM-11:00AM',
  //           '11:00AM-01:00PM',
  //           '01:00PM-03:00PM',
  //           '03:00PM-06:00PM',
  //         ],
  //         available_capacity_dose1: 22,
  //         available_capacity_dose2: 0,
  //       },
  //     ],
  //   },
  // ];
  resultData: any = [];

  intervalId = 0;
  seconds = 240;
  districtRef = 509;
  dateRef = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  time: number=0;
  constructor(private CowinService: CowinService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    // this.getStatus();
  }

  getStatus(userChoice: any) {
    // this.resultData = this.aa.filter(
    //   (data: any) => data.sessions[0]['available_capacity_dose1'] > 0
    // );
    this.CowinService.checkVaccine(userChoice).subscribe((res) => {
      // console.log('data response', res.centers);
      this.getCurrentTime();
      this.resultData = res.centers.filter(
        (data: any) =>
          data.sessions[0]['min_age_limit'] == 18 &&
          data.sessions[0]['available_capacity_dose1'] > 0 ||data.sessions[0]['available_capacity_dose2'] > 0
      );
    });
  }
  getCurrentTime() {
    this.time =  Date.now();
   }
  checkNow(val: any) {
    // console.log('val ', val);
    let inputDate = val.date.date.split('-');
    inputDate = inputDate[2] + '-' + inputDate[1] + '-' + inputDate[0];
    let para = {
      date: inputDate,
      districtId: val.districtId,
    };
    console.log(para);
    this.getStatus(para);
    this.startTimer();
    this.getCurrentTime();
    setInterval(() => {
      this.getStatus(para);

    // }, 5000);
    }, 240000);
  }

  startTimer() {
    this.seconds = 240;
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;

      if (this.seconds < 0) {
        this.seconds = 240;
      } // reset
    }, 1000);
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }
}
