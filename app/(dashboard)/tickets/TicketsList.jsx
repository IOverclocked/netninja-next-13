import TicketItem from './TicketItem';

async function getTickets() {
  return await new Promise((response) => {
    setTimeout(async () => {
      const res = await fetch('http://localhost:4000/tickets', {
        next: {
          revalidate: 0
        }
      });
    
      response(res.json());
    }, 3000)
  })
}

export default async function TicketsList() {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}

      {!tickets.length && (
        <p className="text-center">There are no open tickets</p>
      )}
    </>
  );
}
