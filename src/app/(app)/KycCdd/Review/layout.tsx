/**
 *  KYC CDD : Review - Layout
 */

import {
  type ReactNode,
  Fragment
} from 'react';
import Navbar from '@/components/navbar/header-navbar';

const KycCddLayout = ({ children }: { children: ReactNode; }) => {
  return (
    <Fragment>
      <Navbar title={'KYC / CDD ทบทวน KYC'} />
      { children }
    </Fragment>
  );
}

export default KycCddLayout;