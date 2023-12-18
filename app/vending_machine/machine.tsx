'use client';
import styles from './machine.module.css';
import data from '@/app/lib/data.json';
import VendButton from './button';
import SuccessMessage from './successMessage';
import { useState } from 'react';

const VendingMachine: React.FC = () => {
  function handleVend(item: any) {
    console.log('here is the handle vend function ');
    console.log(item);
    setSuccessItem(item);
    if (item.quantity === 0) {
      // TODO - add a toast message that indicates out of stock
      return;
    }
    item.quantity -= 1;
    setOpen(true);
    setVendItems([...vendItems]);
  }

  const [vendItems, setVendItems] = useState(data);
  const [open, setOpen] = useState(false);
  const [successItem, setSuccessItem] = useState({} as any);

  const items = vendItems.map((item) => {
    return (
      <VendButton
        key={item.id}
        item={item}
        vendFunction={() => handleVend(item)}
      />
    );
  });

  return (
    <div className={styles.machine}>
      <h1 className={styles.machineheader}>Czavendo</h1>
      <div className={styles.machinebody}>
        <div className="col-span-4">
          <div className={styles.items}>{items}</div>
        </div>
        <div>
          <div className={(styles.display, 'w-full')}>
            Display stuff goes here
          </div>
        </div>
      </div>

      {successItem && (
        <SuccessMessage item={successItem} open={open} setOpen={setOpen} />
      )}
      <div className={styles.machinefooter}></div>
    </div>
  );
};

export default VendingMachine;
