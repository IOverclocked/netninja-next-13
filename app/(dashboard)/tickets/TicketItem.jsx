import Link from 'next/link';

export default function TicketItem({ ticket }) {
  return (
    <Link href={`/tickets/${ticket.id}`}>
      <div key={ticket.id} className="card my-5">
        <h3>{ticket.title}</h3>
        <p>{ticket.body.slice(0, 200)}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </Link>
  );
}
