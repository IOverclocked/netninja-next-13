import { notFound } from 'next/navigation';
import TicketItem from '../TicketItem';

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const id = params.id

  const res = await fetch(`http://localhost:4000/tickets/${id}`)
  const ticket = await res.json()
 
  return {
    title: `Dojo Helpdesk | ${ticket.title}`
  }
}

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/tickets');
  const tickets = await res.json();

  return tickets.map((ticket) => ({ id: ticket.id }));
}

async function getTicket(id) {
  const res = await fetch('http://localhost:4000/tickets/' + id, {
    next: {
      revalidate: 60
    }
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export default async function Ticket({ params }) {
  const ticket = await getTicket(params.id);

  return (
    <main>
      <TicketItem ticket={ticket} />
    </main>
  );
}
