"use client";

import CustomerProfileContent from "./customer-profile-content";


export interface SearchParams {
  corporateID?: string
  referenceID?: string
  fullName?: string
  emailNumber?: string
  pageIndex?: string | number
  pageSize?: string | number
}

export interface CustomerInfoPageProps {
  searchParams?: SearchParams
  onClickWithEditEvent?: any //(coperateId: number) => void
}

const CustomerInfoPage = ({ searchParams, onClickWithEditEvent }: CustomerInfoPageProps) => {
  return <>
    <CustomerProfileContent />
  </>
};


export default CustomerInfoPage;
