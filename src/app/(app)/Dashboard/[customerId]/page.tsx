/**
 *  Page - Dashboard
 */

'use client'

import {
  type ReactElement,
  useEffect,
  useState
} from 'react';
import { useRouter, useParams } from "next/navigation";
import { Grid } from '@mui/material';

import { Appbar } from '@/components/appbar/appbar';
import styles from './style.module.css';

const Dashboard = (): ReactElement => {
  const [customerId, setCustomerId] = useState('');
  const [menuItems, setMenuItems] = useState<Array<DashboardItem>>([]);
  const router = useRouter();
  const params = useParams<{ customerId: string }>();

  useEffect(() => {
    const fetchGetDashboardItems = async () => {
      const _items: Array<DashboardItem> = [];
      _items.push({ sequence: 1, requireModuleCode: '', name: 'ข้อมูลลูกค้า', description: '' });
      _items.push({ sequence: 2, requireModuleCode: '', name: 'อาชีพและข้อมูลการเงิน', description: '' });
      _items.push({ sequence: 3, requireModuleCode: '', name: 'บัญชี ATS - E Dividend', description: '' });
      _items.push({ sequence: 4, requireModuleCode: '', name: 'ช่องทางการจัดส่งเอกสาร', description: '' });
      _items.push({ sequence: 5, requireModuleCode: '', name: 'KYC - CDD', description: '' });
      _items.push({ sequence: 6, requireModuleCode: '', name: 'FATCA - CRS', description: '' });
      _items.push({ sequence: 7, requireModuleCode: '', name: 'ผู้รับผลประโยชน์', description: '' });
      _items.push({ sequence: 8, requireModuleCode: '', name: 'CONSENT', description: '' });

      setMenuItems(_items);
    }

    fetchGetDashboardItems();
  }, []);

  useEffect(() => {
    const { back } = router;
    const { customerId } = params;
    if (!customerId) { return back(); }
    setCustomerId(customerId);
  }, [ router, params ]);

  const onClickItem = (item: DashboardItem) => {
    console.log('onClickItem', item)
  }

  const generateMenuItem = () => {
    return menuItems.map((item, idx) => {
      const { sequence, requireModuleCode, name, description } = item;
      return (
        <Grid item
          key={`dashboard-item-${ idx }_${ sequence || '' }-${ requireModuleCode || '' }`}
          xs={12} sm={12} md={12} lg={6}
        >
          <div
            className={ styles['item-container'] }
            onClick={() => { onClickItem(item); }}
          >
            <Grid container>
              <Grid item>
                <i className={'far fa-user item-icon'}></i>
              </Grid>
              <Grid item>
                <span className={ styles['item-text-title'] }>
                  { name }
                </span>
                {/* <br />
                <span className={ styles['item-text-sub-title'] }>
                  { description }
                </span> */}
              </Grid>
            </Grid>
          </div>
        </Grid>
      );
    });
  }

  return (
    <Appbar>
      <Grid container spacing={2} className={'p-4'}>
        { generateMenuItem() }
      </Grid>
    </Appbar>
  );
}

interface DashboardItem {
  sequence: number;
  requireModuleCode: string;
  name: string;
  description: string;
}

export default Dashboard;