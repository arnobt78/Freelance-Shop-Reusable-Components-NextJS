interface Payment {
  name: string;
  image: string;
}

const payments: Payment[] = [
  { name: "VISA", image: "/visa.png" },
  { name: "MASTERCARD", image: "/mastercard.png" },
];

export default function FooterPayments() {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4">
      {payments.map((payment, i) => (
        <div
          key={i}
          className="w-10 sm:w-8 md:w-10 h-6 sm:h-5 md:h-6 rounded flex items-center justify-center bg-white shadow-sm border border-gray-200"
        >
          <img 
            src={payment.image} 
            alt={payment.name} 
            className="size-5 object-contain"
          />
        </div>
      ))}
    </div>
  );
}
