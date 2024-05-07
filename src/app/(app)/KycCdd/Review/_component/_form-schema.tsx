/**
 *  Component Shared Resource - Form Schema
 */

import { z } from 'zod';
import { Codex } from '@/utils/codex';

export const FormSchemaPersonalInfo = z.object({
  titleTh: z.string().min(1, { message: 'กรุณาเลือก คำนำหน้า' }),
  firstnameTh: z.string().min(1, { message: 'กรุณาระบุ ชื่อ (ภาษาไทย)' }),
  lastnameTh: z.string().min(1, { message: 'กรุณาระบุ นามสกุล (ภาษาไทย)' }),
  firstnameEn: z.string().min(1, { message: 'กรุณาระบุ ชื่อ (ภาษาอังกฤษ)' }),
  lastnameEn: z.string().min(1, { message: 'กรุณาระบุ นามสกุล (ภาษาอังกฤษ)' }),
  nationality: z.string().min(1, { message: 'กรุณาระบุ ประเทศเจ้าของสัญชาติ' }),
  occupation: z.string().min(1, { message: 'กรุณาระบุ อาชีพ' }),
  incomeRate: z.string().min(1, { message: 'กรุณาระบุ รายได้รวมต่อเดือน' }),
  incomeSource: z.array(z.string()).nonempty('กรุณาเลือก แหล่งที่มาของรายได้'),
  incomeCountry: z.string().min(1, { message: 'กรุณาเลือก ประเทศของแหล่งที่มาของรายได้/เงินลงทุน' }),
  exp: z.number().min(0, { message: 'กรุณาระบุ ประสบการณ์การลงทุน (ปี)' }),
  investmentPurpose: z.array(z.string()).nonempty('กรุณาเลือก วัตถุประสงค์การลงทุน')
});

export const FormSchemaCurrentAddress = z.object({
  currentAddr_addressNo: z.string().min(1, { message: 'กรุณาระบุ เลขที่' }),
  currentAddr_moo: z.string().optional(),
  currentAddr_buildingOrVillage: z.string().optional(),
  currentAddr_roomNo: z.string().optional(),
  currentAddr_floor: z.string().optional(),
  currentAddr_soi: z.string().optional(),
  currentAddr_street: z.string().optional(),
  
  currentAddr_countryCode: z.string().min(1, { message: 'กรุณาระบุ ประเทศ' }),
  currentAddr_zipCode: z.string().min(1, { message: 'กรุณาระบุ รหัสไปรษณีย์' }),
  currentAddr_provinceCode: z.string().optional(),
  currentAddr_districtCode: z.string().optional(),
  currentAddr_subDistrictCode: z.string().optional(),
  currentAddr_customAddress1: z.string().optional(),
  currentAddr_customAddress2: z.string().optional(),
  currentAddr_customAddress3: z.string().optional()
}).refine(({ currentAddr_zipCode, currentAddr_provinceCode }) => (currentAddr_zipCode !== Codex.Postcode.foreign) ? !!currentAddr_provinceCode : true, {
  path: ['currentAddr_provinceCode'], message: 'กรุณาเลือก จังหวัด'
}).refine(({ currentAddr_zipCode, currentAddr_districtCode }) => (currentAddr_zipCode !== Codex.Postcode.foreign) ? !!currentAddr_districtCode : true, {
  path: ['currentAddr_districtCode'], message: 'กรุณาเลือก อำเภอ / เขต'
}).refine(({ currentAddr_zipCode, currentAddr_subDistrictCode }) => (currentAddr_zipCode !== Codex.Postcode.foreign) ? !!currentAddr_subDistrictCode : true, {
  path: ['currentAddr_subDistrictCode'], message: 'กรุณาเลือก ตำบล / แขวง'
});

export const FormSchemaWorkAddress = z.object({
  workAddr_addressNo: z.string().min(1, { message: 'กรุณาระบุ' }),
  workAddr_moo: z.string().optional(),
  workAddr_buildingOrVillage: z.string().optional(),
  workAddr_roomNo: z.string().optional(),
  workAddr_floor: z.string().optional(),
  workAddr_soi: z.string().optional(),
  workAddr_street: z.string().optional(),
  
  workAddr_countryCode: z.string().min(1, { message: 'กรุณาระบุประเทศ' }),
  workAddr_zipCode: z.string().min(1, { message: 'กรุณาระบุรหัสไปรษณีย์' }),
  workAddr_provinceCode: z.string().optional(),
  workAddr_districtCode: z.string().optional(),
  workAddr_subDistrictCode: z.string().optional(),
  workAddr_customAddress1: z.string().optional(),
  workAddr_customAddress2: z.string().optional(),
  workAddr_customAddress3: z.string().optional()
}).refine(({ workAddr_zipCode, workAddr_provinceCode }) => (workAddr_zipCode !== Codex.Postcode.foreign) ? !!workAddr_provinceCode : true, {
  path: ['workAddr_provinceCode'], message: 'กรุณาเลือก จังหวัด'
}).refine(({ workAddr_zipCode, workAddr_districtCode }) => (workAddr_zipCode !== Codex.Postcode.foreign) ? !!workAddr_districtCode : true, {
  path: ['workAddr_districtCode'], message: 'กรุณาเลือก อำเภอ / เขต'
}).refine(({ workAddr_zipCode, workAddr_subDistrictCode }) => (workAddr_zipCode !== Codex.Postcode.foreign) ? !!workAddr_subDistrictCode : true, {
  path: ['workAddr_subDistrictCode'], message: 'กรุณาเลือก ตำบล / แขวง'
});

export const FormSchemaSpouseInfo = z.object({
  maritalStatus: z.string().min(1, { message: 'กรุณาเลือก สถานสภาพสมรส' }),
  refType: z.string().optional(),
  refId: z.string().optional(),
  title: z.string().optional(),
  firstname: z.string().optional(),
  lastname: z.string().optional()
}).refine(({ maritalStatus, refType }) => (maritalStatus === Codex.MaritalStatus.married) ? !!refType : true, {
  path: ['refType'], message: 'กรุณาระบุ'
}).refine(({ maritalStatus, refId }) => (maritalStatus === Codex.MaritalStatus.married) ? !!refId : true, {
  path: ['refId'], message: 'กรุณาระบุ'
}).refine(({ maritalStatus, title }) => (maritalStatus === Codex.MaritalStatus.married) ? !!title : true, {
  path: ['title'], message: 'กรุณาระบุ'
}).refine(({ maritalStatus, firstname }) => (maritalStatus === Codex.MaritalStatus.married) ? !!firstname : true, {
  path: ['firstname'], message: 'กรุณาระบุ'
}).refine(({ maritalStatus, lastname }) => (maritalStatus === Codex.MaritalStatus.married) ? !!lastname : true, {
  path: ['lastname'], message: 'กรุณาระบุ'
});

// export const FormSchemaBeneficiaryInfo = z.object({
//   beneficiary_addressNo: z.string().min(1, { message: 'กรุณาระบุ เลขที่' }),
//   beneficiary_moo: z.string().optional(),
//   beneficiary_buildingOrVillage: z.string().optional(),
//   beneficiary_roomNo: z.string().optional(),
//   beneficiary_floor: z.string().optional(),
//   beneficiary_soi: z.string().optional(),
//   beneficiary_street: z.string().optional(),
  
//   beneficiary_countryCode: z.string().min(1, { message: 'กรุณาระบุ ประเทศ' }),
//   beneficiary_zipCode: z.string().min(1, { message: 'กรุณาระบุ รหัสไปรษณีย์' }),
//   beneficiary_provinceCode: z.string().optional(),
//   beneficiary_districtCode: z.string().optional(),
//   beneficiary_subDistrictCode: z.string().optional(),
//   beneficiary_customAddress1: z.string().optional(),
//   beneficiary_customAddress2: z.string().optional(),
//   beneficiary_customAddress3: z.string().optional()
// }).refine(({ beneficiary_zipCode, beneficiary_provinceCode }) => (beneficiary_zipCode !== Codex.Postcode.foreign) ? !!beneficiary_provinceCode : true, {
//   path: ['beneficiary_provinceCode'], message: 'กรุณาเลือก จังหวัด'
// }).refine(({ beneficiary_zipCode, beneficiary_districtCode }) => (beneficiary_zipCode !== Codex.Postcode.foreign) ? !!beneficiary_districtCode : true, {
//   path: ['beneficiary_districtCode'], message: 'กรุณาเลือก อำเภอ / เขต'
// }).refine(({ beneficiary_zipCode, beneficiary_subDistrictCode }) => (beneficiary_zipCode !== Codex.Postcode.foreign) ? !!beneficiary_subDistrictCode : true, {
//   path: ['beneficiary_subDistrictCode'], message: 'กรุณาเลือก ตำบล / แขวง'
// });

// export const FormSchemaAttorneyInfo = z.object({
//   attorney_addressNo: z.string().min(1, { message: 'กรุณาระบุ เลขที่' }),
//   attorney_moo: z.string().optional(),
//   attorney_buildingOrVillage: z.string().optional(),
//   attorney_roomNo: z.string().optional(),
//   attorney_floor: z.string().optional(),
//   attorney_soi: z.string().optional(),
//   attorney_street: z.string().optional(),
  
//   attorney_countryCode: z.string().min(1, { message: 'กรุณาระบุ ประเทศ' }),
//   attorney_zipCode: z.string().min(1, { message: 'กรุณาระบุ รหัสไปรษณีย์' }),
//   attorney_provinceCode: z.string().optional(),
//   attorney_districtCode: z.string().optional(),
//   attorney_subDistrictCode: z.string().optional(),
//   attorney_customAddress1: z.string().optional(),
//   attorney_customAddress2: z.string().optional(),
//   attorney_customAddress3: z.string().optional()
// }).refine(({ attorney_zipCode, attorney_provinceCode }) => (attorney_zipCode !== Codex.Postcode.foreign) ? !!attorney_provinceCode : true, {
//   path: ['attorney_provinceCode'], message: 'กรุณาเลือก จังหวัด'
// }).refine(({ attorney_zipCode, attorney_districtCode }) => (attorney_zipCode !== Codex.Postcode.foreign) ? !!attorney_districtCode : true, {
//   path: ['attorney_districtCode'], message: 'กรุณาเลือก อำเภอ / เขต'
// }).refine(({ attorney_zipCode, attorney_subDistrictCode }) => (attorney_zipCode !== Codex.Postcode.foreign) ? !!attorney_subDistrictCode : true, {
//   path: ['attorney_subDistrictCode'], message: 'กรุณาเลือก ตำบล / แขวง'
// });