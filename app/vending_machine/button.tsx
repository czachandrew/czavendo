'use client';
import styles from './machine.module.css';
import type { Item } from '@/app/lib/definitions';

interface VendButtonProps {
  item: Item;
  vendFunction: () => void;
}

const VendButton: React.FC<VendButtonProps> = ({ item, vendFunction }) => {
  const handleClick = () => {
    vendFunction();
  };

  return (
    <div className={styles.machinebutton} onClick={handleClick}>
      <h1>{item.name}</h1>
      <p>{item.quantity}</p>
    </div>
  );
};

export default VendButton;
