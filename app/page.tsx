import VendingMachine from './vending_machine/machine';

export default function Home() {
  return (
    <div>
      <VendingMachine />
      <h1 className={'font-bold text-xl text-center pt-8 pb-12'}>
        Czavendo Snack and Beverage Vending
      </h1>
      <p>This is where the content will appear for this specific page</p>
    </div>
  );
}
