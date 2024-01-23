import { Suspense } from "react";
import TicketsList from "./TicketsList";
import Loading from "../loading";
import Link from "next/link";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets</small></p>
        </div>

        <Link href="/tickets/create">
          <button className="btn-primary">
            Create new
          </button>
        </Link>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketsList />
      </Suspense>
    </main>
  );
}
