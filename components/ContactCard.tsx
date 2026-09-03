interface ContactCardProps {
  name: string;
  email: string;
  phone: string;  
}

export default function ContactCard({ name, email, phone }: ContactCardProps) {
  return (    
    <div className="bg-white shadow-md rounded-lg overflow-hidden">      
        <div className="p-4">
            <h3 className="text-xl font-bold mb-2 text-red-700">Name: {name}</h3>
            <p className="text-gray-600 mb-4">Email: {email}</p>
            <p className="text-gray-600 mb-4">Phone: {phone}</p>
        </div>
    </div>    
  );
}
